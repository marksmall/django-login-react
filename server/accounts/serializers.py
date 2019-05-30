"""
Account serializers
"""
import logging
from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer

LOGGER = logging.getLogger(__name__)


class UserProfileSerializer(UserDetailsSerializer):
    """ User Profile serializer """
    avatar = serializers.CharField(source="userprofile.avatar")

    class Meta(UserDetailsSerializer.Meta):
        """ User Profile Meta """
        fields = UserDetailsSerializer.Meta.fields + ('avatar', )

    def update(self, instance, validated_data):
        """ Update User Profile when updating User """
        LOGGER.debug("VALIDATED DATA: %s", validated_data)
        profile_data = validated_data.pop('userprofile', {})
        avatar = profile_data.get('avatar')

        instance = super(UserProfileSerializer,
                         self).update(instance, validated_data)

        # get and update User Profile
        profile = instance.userprofile
        if profile_data and avatar:
            profile.avatar = avatar
            profile.save()
        return instance
