from django.urls import path

from accounts import views

app_name = "accounts"

urlpatterns = [
    path("", views.CreateUserView.as_view(), name="create_user"),
    path("/token", views.CreateTokenView.as_view(), name="get_token"),
    path("/me", views.ManageUserView.as_view(), name="manage_user"),
    path(
        "/change-password", views.ChangePasswordView.as_view(), name="change-password"
    ),
]
