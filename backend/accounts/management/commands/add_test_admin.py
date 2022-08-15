import os

from decouple import config
from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    """
    Django management command to create a test superadmin at launch.
    """

    def handle(self, *args, **kwargs):
        try:
            os.system("python3 manage.py createsuperuser --noinput")
            self.stdout.write(
                f"Use following credentials to access admin panel:\n- Email: {config('DJANGO_SUPERUSER_EMAIL')}\n- Password: {config('DJANGO_SUPERUSER_PASSWORD')}"
            )
            self.stdout.write(
                self.style.NOTICE(
                    "For safety reasons, kindly change the admin password once you have access to the admin panel."
                )
            )

        except Exception as e:
            self.stdout.write("Admin already exists!")
