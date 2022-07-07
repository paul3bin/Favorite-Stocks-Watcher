from rest_framework import serializers
from stocks import models


class StocksSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Stocks
        fields = "__all__"
        read_only_fields = ("added_on",)
