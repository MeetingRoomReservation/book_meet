from .models import Meeting, Room
from django.db import transaction
from rest_framework import serializers
from rest_framework.serializers import ValidationError

# current user 관련 마지막 확인
# https://stackoverflow.com/questions/51940976/django-rest-framework-currentuserdefault-with-serializer

# # option#1
# class MeetingCreateSerializer(serializers.ModelSerializer):
#     owner = serializers.HiddenField(default=serializers.CurrentUserDefault())
#     # account = AttrPKField()

#     def create(self, validated_data):
#         owner = validated_data.get("owner", "")
#         validated_data["user"] = owner
#         validated_data.pop("owner", None)
#         meeting = Meeting.objects.create(**validated_data)
#         return meeting

#     class Meta:
#         model = Meeting
#         fields = [
#             "title",
#             "meeting_date",
#             "meeting_starttime",
#             "meeting_end_time",
#             "owner",
#         ]


# option#2
class MeetingCreateSerializer(serializers.ModelSerializer):
    tracks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    def create(self, validated_data):
        """1. Override ``create`` to provide a user via request.user by default.
        This is required since the read_only ``user`` field is not included by
        default anymore since
        https://github.com/encode/django-rest-framework/issues/6031
        https://github.com/encode/django-rest-framework/pull/5886.

        2.read_only
        Read-only fields are included in the API output, but should not be included in the input during create or update operations. Any 'read_only' fields that are incorrectly included in the serializer input will be ignored.
        Set this to True to ensure that the field is used when serializing a representation, but is not used when creating or updating an instance during deserialization.
        Defaults to False
        """
        if "user" not in validated_data:
            validated_data["user"] = self.context["request"].user
        meeting = Meeting.objects.create(**validated_data)
        return meeting

    class Meta:
        model = Meeting
        fields = [
            "title",
            "meeting_date",
            "meeting_starttime",
            "meeting_end_time",
        ]

        # fields = ["title", "meeting_date", "meeting_starttime", "meeting_end_time", "owner"]

        """Override ``create`` to provide a user via request.user by default.
        This is required since the read_only ``user`` field is not included by
        default anymore since
        https://github.com/encode/django-rest-framework/pull/5886.
        """
