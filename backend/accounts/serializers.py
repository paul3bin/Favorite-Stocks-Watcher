from django.contrib.auth import authenticate, get_user_model
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import AuthenticationFailed


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


class AuthTokenSerializer(serializers.Serializer):
    """
    Serializer for user authentication.
    """

    email = serializers.CharField()
    password = serializers.CharField(
        style={"input_type": "password"}, trim_whitespace=False
    )

    def validate(self, attrs):
        """
        validate and authenticate the user
        """
        email = attrs.get("email")
        password = attrs.get("password")
        request = self.context.get("request")
        user = authenticate(request=request, username=email, password=password)

        if not user:
            raise AuthenticationFailed

        attrs["user"] = user

        return attrs


class ChangePasswordSerializer(serializers.Serializer):
    """
    Serializer class for changing user password
    """

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
