from rest_framework import serializers
from core.serializers import UserShortSerializer
from news.models import News


class NewsSerializer(serializers.ModelSerializer):

    author = UserShortSerializer(read_only=True)

    class Meta:
        model = News
        fields = ('author', 'created_at', 'text', 'id', 'is_deleted')


