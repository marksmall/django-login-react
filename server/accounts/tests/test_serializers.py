import pytest

from accounts.serializers import UserProfileSerializer

import logging

LOGGER = logging.getLogger(__name__)


@pytest.mark.django_db
class TestUserProfileSerializer:
    def test_successful_serialization(self):
        user = {
            "username": "testusername1",
            "password": "password",
            "email": "email@test.com"
        }

        serializer = UserProfileSerializer(user)

        assert serializer.is_valid
        LOGGER.debug(f"DATA: {serializer.data}")
        # assert serializer.data["username"] == "testusername1"
        # assert serializer.data["email"] == "email@test.com"
        # assert "password" not in serializer.data

    # def test_missing_username(self):
    #     user = {
    #         "username": "",
    #         "password": "password",
    #         "email": "email@test.com"
    #     }

    #     serializer = UserProfileSerializer(data=user)
    #     assert serializer.is_valid() == False
