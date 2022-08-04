from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

from stocks import models
from stocks.serializers import StocksSerializer

ADD_STOCK = reverse("stocks:stocks")
LIST_STOCKS = reverse("stocks:stocks")


def retrieve_stock_url(stock_id):
    """
    returns retrieve stock url with stock id
    """
    return reverse("stocks:stock", args=[stock_id])


def partial_update_stock_url(stock_id):
    """
    returns update stock url with stock id
    """
    return reverse("stocks:stock", args=[stock_id])


def delete_stock_url(stock_id):
    """
    returns delete stock url with stock id
    """
    return reverse("stocks:stock", args=[stock_id])


def sample_user(email="test@gmail.com", password="testpassword"):
    # create a sample user
    return get_user_model().objects.create_user(email, password)


def sample_stock(params: dict):
    """
    create and return sample stock
    """

    return models.Stocks.objects.create(**params)


class StockModelTest(TestCase):
    """
    Test cases for stocks model.
    """

    def test_create_stock_with_valid_user(self):
        stock = models.Stocks.objects.create(
            user=sample_user(), stock_symbol="AAPL", company_name="Apple Inc."
        )

        self.assertEqual(str(stock), stock.stock_symbol)

    def test_add_duplicate_stock_same_user(self):
        user1 = sample_user()
        stock1 = models.Stocks.objects.create(
            user=user1, stock_symbol="AAPL", company_name="Apple Inc."
        )

        with self.assertRaises(Exception) as raised:
            stock2 = models.Stocks.objects.create(
                user=user1, stock_symbol="AAPL", company_name="Apple Inc."
            )
        self.assertEqual(IntegrityError, type(raised.exception))


class PublicStockAPITest(TestCase):
    """
    Test cases for public stock APIs
    """

    def setUp(self):
        self.client = APIClient()

    def test_create_stock_unauthorized(self):
        """
        to test creating stocks without authentication
        """
        payload = {"user": 6, "stock_symbol": "TSLA", "company_name": "Tesla Inc."}

        res = self.client.post(ADD_STOCK, payload)
        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)


class PrivateStockAPITest(TestCase):
    """
    Test cases for private stock APIs
    """

    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            "testemail@example.com", "testpassword"
        )
        self.client.force_authenticate(self.user)

    def test_list_stocks(self):
        """
        to test retrieving a list of stocks.
        """

        sample_stock(
            {"user": self.user, "stock_symbol": "AAPL", "company_name": "Apple Inc."}
        )
        sample_stock(
            {"user": self.user, "stock_symbol": "TSLA", "company_name": "Tesla Inc."}
        )

        res = self.client.get(LIST_STOCKS)

        stocks = models.Stocks.objects.all().filter(user=self.user)
        serializer = StocksSerializer(stocks, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)

    def test_delete_stock(self):
        """
        test deleting an existing stock detail
        """
        new_stock = sample_stock(
            {"user": self.user, "stock_symbol": "TSLA", "company_name": "Tesla Inc."}
        )

        delete_url = delete_stock_url(new_stock.pk)
        res = self.client.delete(delete_url)

        self.assertFalse(models.Stocks.objects.filter(pk=new_stock.pk).exists())

    def test_retrieve_stock(self):
        """
        to test retrieving stock details
        """
        payload = {
            "user": self.user,
            "stock_symbol": "TSLA",
            "company_name": "Tesla Inc.",
        }
        new_stock = sample_stock(payload)

        retrieve_url = retrieve_stock_url(new_stock.pk)

        res = self.client.get(retrieve_url)
        stock = models.Stocks.objects.filter(pk=new_stock.pk)
        serializer = StocksSerializer(stock, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)

    def test_partial_update_stock(self):
        """
        to test partial updating a stock
        """
        # creating a stock with wrong stock ticker
        new_stock = sample_stock(
            {"user": self.user, "stock_symbol": "TESLA", "company_name": "Tesla Inc."}
        )

        partial_update_url = partial_update_stock_url(new_stock.pk)
        retrieve_url = retrieve_stock_url(new_stock.pk)

        payload = {
            "user": self.user,
            "stock_symbol": "TSLA",
            "company_name": "Tesla Inc.",
        }

        update = self.client.patch(partial_update_url, payload=payload)

        res = self.client.get(retrieve_url)
        stock = models.Stocks.objects.filter(pk=new_stock.pk)
        serializer = StocksSerializer(stock, many=True)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)
