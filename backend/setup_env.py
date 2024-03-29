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
    values = [
        f"SECRET_KEY={secret_key}",
    ]

    with open(".env", "a") as f:
        f.write("\n".join(values))

    print("ENVIRONMENT SET!")

    print("Environment config already setup!")
    return


if __name__ == "__main__":
    setup_envionment()
