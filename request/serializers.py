from rest_framework import serializers
from core.serializers import UserShortSerializer
from status.serializers import StatusSerializer
from category.serializers import CategorySerializer
from request.models import Request



class RequestSerializer(serializers.ModelSerializer):

    author = UserShortSerializer(read_only=True)
    category = CategorySerializer
    class Meta:
        model = Request
        fields = ('author', 'created_at', 'category', 'id', 'is_deleted', 'materials', 'status', 'description', 'urgency')


