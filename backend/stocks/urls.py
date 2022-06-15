from django.urls import path
from stocks.views import StocksViewSet

app_name = "stocks"

urlpatterns = [
    path("list", StocksViewSet.as_view({"get": "list"}), name="list"),
    path("add", StocksViewSet.as_view({"post": "create"}), name="add"),
    path("<str:pk>", StocksViewSet.as_view({"get": "retrieve"}), name="retrieve"),
    path("<str:pk>", StocksViewSet.as_view({"put", "update"}), name="update"),
    path("<str:pk>", StocksViewSet.as_view({"delete": "destroy"}), name="delete"),
]
