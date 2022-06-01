from django.contrib.auth import get_user_model
from django.test import TestCase
from stocks import models


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
