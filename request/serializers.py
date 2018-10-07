from rest_framework import serializers
from core.serializers import UserShortSerializer
from request.models import Request


class RequestSerializer(serializers.ModelSerializer):

    author = UserShortSerializer(read_only=True)

    class Meta:
        model = Request
        fields = ('author', 'created_at', 'category', 'id', 'is_deleted')


