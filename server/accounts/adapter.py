"""
Custom Adapters
"""
import logging
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from allauth.account.adapter import DefaultAccountAdapter

LOGGER = logging.getLogger(__name__)


class AccountAdapter(DefaultAccountAdapter):
    """
        Custom adapter for accounts
    """

    def get_email_confirmation_url(self, request, emailconfirmation):
        current_site = get_current_site(request)
        LOGGER.debug("CURRENT SITE: %s, KEY: %s/", current_site,
                     emailconfirmation.key)
        return f"{current_site}/account/confirm-email/{emailconfirmation.key}/"


class SocialAccountAdapter(DefaultAccountAdapter):
    """
    Custom adapter for Social Media accounts
    """

    def is_open_for_signup(self, request):
        """
        Set whether Social Media accounts can be used.
        """
        return getattr(settings, "ACCOUNT_ALLOW_REGISTRATION", False)
