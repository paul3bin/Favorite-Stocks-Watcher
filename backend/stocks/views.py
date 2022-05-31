from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from stocks import models, serializers


class StocksViewSet(viewsets.ModelViewSet):
    queryset = models.Stocks.objects.all()
    serializer_class = serializers.StocksSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def create(self, request):
        """
        method to create/add a new stock and its details.
        """
        serializer = serializers.StocksSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

    def list(self, request):
        """
        method to list all the stock details added by the user.
        """
        stocks = models.Stocks.objects.all().filter(user=request.user)
        serializer = serializers.StocksSerializer(stocks, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        """
        retrieve the details of individual stock
        """
        stock = models.Stocks.objects.get(id=pk)
        serializer = serializers.StocksSerializer(instance=stock, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
