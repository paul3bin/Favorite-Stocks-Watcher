from django.contrib.auth import get_user_model
from django.test import TestCase
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


class ModelTest(TestCase):
    """
    Test cases for user model
    """

    def test_create_user_with_email(self):
        """
        to test creating a new user with email.
        """
        values = {"email": "testsample@email.com", "password": "testpassword"}
        user = get_user_model().objects.create_user(**values)

        self.assertEqual(user.email, values["email"])
        self.assertTrue(user.check_password(values["password"]))

    def test_new_user_email_normalized(self):
        """
        to test the email for a new user is normalized or not.
        """
        values = {"email": "testsample@EMAIL.com", "password": "testpassword"}
        user = get_user_model().objects.create_user(**values)

        self.assertEqual(user.email, values["email"].lower())

    def test_new_user_invalid_email(self):
        """
        test creating user with no email
        """
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, "testpass")

    def test_create_new_superuser(self):
        """
        test for creating a new super user.
        """
        values = {"email": "testsample@email.com", "password": "testpassword"}
        user = get_user_model().objects.create_superuser(**values)

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)


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

    def test_user_exists(self):
        """
        Method to test whether user already exists or not.
        """
        payload = {
            "email": "testsample@email.com",
            "password": "testpass",
        }

        create_user(**payload)

        res = self.client.post(CREATE_USER_URL, payload)

        # running a check for validating the existance of the user
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
