"""
Account Views
"""
from django.contrib.auth import get_user_model
from .serializers import UserProfileSerializer
from rest_framework.viewsets import ModelViewSet

User = get_user_model()


class UserProfileViewSet(ModelViewSet):
    """ API endpoint allowing viewing/editing of User Profiles. """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserProfileSerializer
