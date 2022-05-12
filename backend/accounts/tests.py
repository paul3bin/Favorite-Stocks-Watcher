from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient


CREATE_USER_URL = reverse("accounts:create_user")
TOKEN_URL = reverse("accounts:get_token")
MANAGE_USER_URL = reverse("accounts:manage_user")


def create_user(**params):
    """
    creates a new user for testing, and returns user details
    """

    return get_user_model().objects.create_user(**params)


class PublicUserAPITests(TestCase):
    """
    Class for testing public user APIs
    """

    def setUp(self):
        self.client = APIClient()

    def test_create_valid_user_success(self):
        """
        Method to test creating user with valid payload.
        """
        payload = {
            "email": "testsample@email.com",
            "password": "testpass",
            "name": "Test Name",
        }

        res = self.client.post(CREATE_USER_URL, payload)

        # checking if user is created or not.
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)

        user = get_user_model().objects.get(**res.data)

        # checking if the password matches what user entered.
        self.assertTrue(user.check_password(payload["password"]))

        # checking whether the password is not returned in the response
        self.assertNotIn("password", res.data)
