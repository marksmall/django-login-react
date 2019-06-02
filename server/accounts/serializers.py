"""
Account serializers
"""
from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer


class UserProfileSerializer(UserDetailsSerializer):
    """ User Profile serializer """
    avatar = serializers.CharField(source="userprofile.avatar")

    class Meta(UserDetailsSerializer.Meta):
        """ User Profile Meta """
        fields = UserDetailsSerializer.Meta.fields + (
            'avatar',
            'email',
        )

    def update(self, instance, validated_data):
        """ Update User Profile when updating User """
        print(f"VALIDATED DATA: {validated_data}")
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
