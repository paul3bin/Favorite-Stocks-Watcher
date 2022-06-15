from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from stocks import models

ADD_STOCK = reverse("stocks:add")
LIST_STOCKS = reverse("stocks:list")


def retrieve_stock_url(stock_id):
    """
    returns retrieve stock url with stock id
    """
    return reverse("stocks:retrieve", args=[stock_id])


def update_stock_url(stock_id):
    """
    returns update stock url with stock id
    """
    return reverse("stocks:update", args=[stock_id])


def delete_stock_url(stock_id):
    """
    returns delete stock url with stock id
    """
    return reverse("stocks:delete", args=[stock_id])


def sample_user(email="test@gmail.com", password="testpassword"):
    # create a sample user
    return get_user_model().objects.create_user(email, password)


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


class PrivateStockAPITest(TestCase):
    """
    Test cases for private stock APIs
    """

    def setUp(self):
        self.client = APIClient()

    def test_create_stock_unauthorized(self):
        payload = {"user": 6, "stock_symbol": "TSLA", "company_name": "Tesla Inc."}

        res = self.client.post(ADD_STOCK, payload)
        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)
