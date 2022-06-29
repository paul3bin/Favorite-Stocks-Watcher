from collections import OrderedDict

import finnhub
from decouple import config
from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from stocks import models, serializers


def get_stock_quote(stock_symbol: str) -> dict:
    """
    Function that receives a stock symbol and returns a dictionary containing following keys:
    c - current price
    d - change
    dp - percent change
    h - high price of the day
    l - low price of the day
    o - open price of the day
    pc - previous close price
    """
    finnhub_client = finnhub.Client(api_key=config("FINNHUB_API_KEY"))
    stock_quote = finnhub_client.quote(stock_symbol)

    return stock_quote


class StocksViewSet(viewsets.ModelViewSet, viewsets.ViewSet):
    queryset = models.Stocks.objects.all()
    serializer_class = serializers.StocksSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def list(self, request):
        """
        method to list all the stock details added by the user.
        """
        stocks = models.Stocks.objects.all().filter(user=request.user.id)

        serializer = serializers.StocksSerializer(instance=stocks, many=True)
        resp = []

        for data in serializer.data:
            quote = get_stock_quote(dict(data)["stock_symbol"])
            data = dict(data)
            data.update(quote)
            resp.append(data)

        return Response(data=resp, status=status.HTTP_200_OK)

    def create(self, request):
        """
        method to create/add a new stock and its details.
        """
        data = OrderedDict()
        data.update(request.data)
        data["user"] = request.user.id

        serializer = serializers.StocksSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        """
        retrieve the details of individual stock
        """
        stock = models.Stocks.objects.filter(id=pk)
        serializer = serializers.StocksSerializer(instance=stock, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def partial_update(self, request, pk=None, *args, **kwargs):
        """
        method for updating user stock entry
        """
        stock = models.Stocks.objects.get(id=pk)
        serializer = serializers.StocksSerializer(
            instance=stock, data=request.data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        """
        method for deleting user stock
        """
        stock = models.Stocks.objects.get(id=pk)
        stock.delete()

        return Response(
            data={"message": "stock deleted"}, status=status.HTTP_202_ACCEPTED
        )
