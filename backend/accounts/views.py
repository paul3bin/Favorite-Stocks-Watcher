from django.shortcuts import render
from rest_framework import (authentication, generics, permissions, status,
                            viewsets)
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.settings import api_settings

from accounts.serializers import (AuthTokenSerializer,
                                  ChangePasswordSerializer, UserSerializer)


class CreateUserView(generics.CreateAPIView):
    """
    Class based view for create a new user in the system.
    """

    serializer_class = UserSerializer


class CreateTokenView(ObtainAuthToken):
    """
    Create a new auth token for user
    """

    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES

    def post(self, request, *args, **kwargs):
        serializer = AuthTokenSerializer(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)

        return Response(
            {
                "token": token.key,
            }
        )


class ManageUserView(generics.RetrieveUpdateAPIView):
    """
    Manage authenticated user
    """

    serializer_class = UserSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        """
        retrieve and return authenticated user
        """
        return self.request.user


class ChangePasswordView(generics.UpdateAPIView):
    """
    Class based view for changing password
    """

    serializer_class = ChangePasswordSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (authentication.TokenAuthentication,)

    def get_object(self, queryset=None):
        return self.request.user

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = ChangePasswordSerializer(
            data=request.data, context={"request": request}
        )

        if serializer.is_valid(raise_exception=True):
            # checking old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response(
                    {"message": "Incorrect old password"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()

            return Response(
                {"message": "Password updated successfully."}, status=status.HTTP_200_OK
            )
