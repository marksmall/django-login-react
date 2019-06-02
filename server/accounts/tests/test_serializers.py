import pytest

from accounts.serializers import UserProfileSerializer


@pytest.mark.django_db
class TestUserProfileSerializer:
    def test_successful_serialization(self):
        user = {
            "username": "testusername1",
            "password": "password",
            "email": "email@test.com",
            "avatar": "sometext",
        }

        serializer = UserProfileSerializer(data=user)
        print(f"SERIALIZER DATA: {serializer.initial_data}")
        print(repr(serializer))
        assert serializer.is_valid()
        # print(f"DATA: {serializer.data}")
        print(f"VALIDATE DATA: {serializer.validated_data}")
        # assert False
        assert serializer.validated_data["username"] == "testusername1"
        # FIXME: Why doesn't serializer send all UserDetailsSerializer fields
        # assert serializer.validated_data["email"] == "email@test.com"
        assert "password" not in serializer.data

    # def test_missing_username(self):
    #     user = {
    #         "username": "",
    #         "password": "password",
    #         "email": "email@test.com"
    #     }

    #     serializer = UserProfileSerializer(data=user)
    #     assert serializer.is_valid() == False
