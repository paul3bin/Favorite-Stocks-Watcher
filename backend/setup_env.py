"""
Python script to setup environment for the project
"""

import os
import random
from string import ascii_lowercase, ascii_uppercase, digits


def generate_random_string(length: int) -> str:
    """
    function for generating random string of given character length
    """
    characters = ascii_lowercase + ascii_uppercase + digits + "!@#$%^&*"
    random_string = "".join(random.choices(characters, k=length))
    return random_string


def setup_envionment():
    os.environ["SECRET_KEY"] = generate_random_string(50)
    os.environ["ALLOWED_HOSTS"] = "localhost, 127.0.0.1, 192.168.0.103"
    os.environ["DEBUG"] = "True"
    os.environ["CORS_ALLOWED_ORIGINS"] = "http://localhost:3000"

    print("ENVIRONMENT SET!")


if __name__ == "__main__":
    setup_envionment()
