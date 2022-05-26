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


def setup_envionment() -> None:
    """
    creates a new .env file within the directory and saves env secrets in it!
    """
    secret_key = generate_random_string(50)
    values = [
        f"SECRET_KEY={secret_key}",
        "ALLOWED_HOSTS=localhost, 127.0.0.1",
        "DEBUG=True",
        "CORS_ALLOWED_ORIGINS=http://localhost:3000",
        "CSRF_TRUSTED_ORIGINS=http://localhost:3000",
    ]

    with open(".env", "a") as f:
        f.write("\n".join(values))

    print("ENVIRONMENT SET!")


if __name__ == "__main__":
    setup_envionment()
