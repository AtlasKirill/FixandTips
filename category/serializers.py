from rest_framework import serializers
from category.models import Category


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('title', 'created_at','id', 'is_deleted')


