"""
Python script to setup environment for the project
"""

import os
import random
from os.path import exists
from string import ascii_lowercase, ascii_uppercase, digits


def generate_random_string(length: int) -> str:
    """
    function for generating random string of given character length
    """
    characters = ascii_lowercase + ascii_uppercase + digits + "!@#$%^&*"
    random_string = "".join(random.choices(characters, k=length))
    return random_string


def setup_envionment() -> None:
    """
    creates a new .env file within the directory and saves env secrets in it!
    """
    secret_key = generate_random_string(50)
    os.environ["SECRET_KEY"] = secret_key
    os.environ["DEBUG"] = True
    os.environ["CORS_ALLOWED_ORIGINS"] = "http://localhost:3000"
    os.environ["CSRF_TRUSTED_ORIGINS"] = "http://localhost:3000"
    os.environ["ALLOWED_HOSTS"] = "localhost"

    print("ENVIRONMENT SET!")

    return


if __name__ == "__main__":
    setup_envionment()
