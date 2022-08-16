from collections import OrderedDict

import finnhub
from decouple import config
from django.shortcuts import render
from django.views.decorators.cache import cache_page
from rest_framework import request, status, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import (api_view, authentication_classes,
                                       permission_classes)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from stocks import models, serializers


@api_view(["GET"])
@permission_classes((IsAuthenticated,))
@authentication_classes((TokenAuthentication,))
@cache_page(60 * 2)
def get_stock_quote(request, stock_symbol: str) -> dict:
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
    try:
        finnhub_client = finnhub.Client(api_key=config("FINNHUB_API_KEY"))
        stock_quote = finnhub_client.quote(stock_symbol)

        # renaming dict keys for better readability
        stock_quote["current_price"] = stock_quote.pop("c")
        stock_quote["change"] = stock_quote.pop("d")
        stock_quote["percent_change"] = stock_quote.pop("dp")
        stock_quote["high_price_of_the_day"] = stock_quote.pop("h")
        stock_quote["low_price_of_the_day"] = stock_quote.pop("l")
        stock_quote["opening_price"] = stock_quote.pop("o")
        stock_quote["previous_closing_price"] = stock_quote.pop("pc")
        stock_quote["timestamp"] = stock_quote.pop("t")

        return Response(stock_quote)

    except:
        return Response(
            {"message": "Something went wrong"}, status=status.HTTP_400_BAD_REQUEST
        )


@api_view(["GET"])
@permission_classes((IsAuthenticated,))
@authentication_classes((TokenAuthentication,))
@cache_page(60 * 2)
def company_profile(request, stock_symbol: str) -> dict:
    """
    Function that receives a stock symbol and returns a dictionary containing the company profile
    """
    try:
        finnhub_client = finnhub.Client(api_key=config("FINNHUB_API_KEY"))
        profile = finnhub_client.company_profile2(symbol=stock_symbol)

        finnhub_client.close()

        return Response(profile, status=status.HTTP_200_OK)

    except:
        return Response(
            {"message": "Something went wrong"}, status=status.HTTP_400_BAD_REQUEST
        )


@api_view(["GET"])
@permission_classes((IsAuthenticated,))
@authentication_classes((TokenAuthentication,))
@cache_page(60 * 2)
def suggested_stocks(request, exchange):
    try:
        finnhub_client = finnhub.Client(api_key=config("FINNHUB_API_KEY"))
        stocks = finnhub_client.stock_symbols("US")

        finnhub_client.close()

        return Response(stocks, status=status.HTTP_200_OK)

    except:
        return Response(
            {"message": "Something went wrong"}, status=status.HTTP_400_BAD_REQUEST
        )


class StocksViewSet(viewsets.ModelViewSet, viewsets.ViewSet):
    queryset = models.Stocks.objects.all()
    serializer_class = serializers.StocksSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def list(self, request):
        """
        method to list all the stock details added by the user.
        """
        stocks = (
            models.Stocks.objects.all()
            .filter(user=request.user.id)
            .order_by("added_on")
        )

        serializer = serializers.StocksSerializer(instance=stocks, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

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

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def destroy(self, request, pk=None):
        """
        method for deleting user stock
        """
        stock = models.Stocks.objects.get(id=pk)
        stock.delete()

        return Response(
            data={"message": "stock deleted"}, status=status.HTTP_204_NO_CONTENT
        )
