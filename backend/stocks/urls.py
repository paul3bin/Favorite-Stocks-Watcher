from django.urls import path

from stocks.views import StocksViewSet, get_stock_quote, company_profile

app_name = "stocks"

urlpatterns = [
    path("", StocksViewSet.as_view({"get": "list", "post": "create"}), name="stocks"),
    path(
        "<str:pk>",
        StocksViewSet.as_view(
            {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
        ),
        name="stock",
    ),
    path("quote/<str:stock_symbol>", get_stock_quote, name="quote"),
    path("company-profile/<str:stock_symbol>", company_profile, name="company_profile"),
]
