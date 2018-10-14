from rest_framework import serializers
from status.models import Status


class StatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Status
        fields = ('title', 'created_at','id', 'is_deleted')
