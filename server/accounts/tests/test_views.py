"""
Tests for Account Views
"""
import pytest
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient


@pytest.mark.django_db
class TestRegistrationViewSet:
    """ Test Registration ViewSet """

    def test_successful_get_user_profile(self, client):
        """ Test retrieval of User Profiles """
        response = client.get(reverse("user-list"))
        print(f"RESPONSE: {response}")
        assert response.status_code == status.HTTP_200_OK

    def test_successful_update_user_profile(self, client):
        """ Test updating a single User Profile """
        pass

    def test_unsuccessful_update_user_profile(self, client):
        """ Test updating a single User Profile """
        pass
