from django.contrib.auth import authenticate, get_user_model
from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("name", "email", "password")
        extra_kwargs = {
            "password": {"write_only": True, "min_length": 8, "required": True}
        }

    def create(self, validated_data):
        """
        Create a new user with hashed password and return it.
        """
        user = get_user_model().objects.create_user(**validated_data)
        return user

    def update(self, instance, validated_data):
        """
        Update the user, setting the new password and return it.
        """
        password = validated_data.pop("password", None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user
