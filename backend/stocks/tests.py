from django.contrib.auth import get_user_model
from django.test import TestCase
from stocks import models
from django.db.utils import IntegrityError


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
