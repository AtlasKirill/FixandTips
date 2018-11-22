from rest_framework import serializers
from core.models import User
from django.contrib.auth import authenticate, login


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'username', 'role', 'group_num', 'flat', 'phone', 'avatar','surname')



class UserShortSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id','username','flat','name','surname',)

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'name', 'surname', 'flat')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'],
                                        name=validated_data['name'],
                                        surname=validated_data['surname'],
                                        flat=validated_data['flat']
                                        )
        return user


class LoginUserSerializer(serializers.Serializer):

    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        print (data)
        user = authenticate(**data)
        print(user)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")
