from django.db import models

from accounts.models import User


class Stocks(models.Model):
    """
    Model class for user stocks.
    """

    user = models.ForeignKey(to=User, on_delete=models.CASCADE, blank=False, null=False)
    stock_symbol = models.CharField(max_length=10)
    company_name = models.CharField(max_length=250, null=True)
    added_on = models.DateTimeField(auto_now_add=True, editable=False)

    class Meta:
        unique_together = ("user", "stock_symbol")

    def __str__(self):
        return self.stock_symbol
