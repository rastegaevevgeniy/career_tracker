from django.conf import settings
from django.contrib.auth.hashers import check_password
from rest_framework import serializers

from users.models import User


class UserReadSerializer(serializers.ModelSerializer):
    """Просмотр пользователя"""
    is_subscribed = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'email',
            'id',
            'username',
            'first_name',
            'last_name',
            'is_subscribed',
        )


class UserCreateSerializer(serializers.ModelSerializer):
    """Создание нового пользователя"""

    class Meta:
        model = User
        fields = (
            'email',
            'id',
            'username',
            'password',
            'first_name',
            'last_name',
        )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class SetPasswordSerializer(serializers.Serializer):
    """Смена пароля"""
    new_password = serializers.CharField(max_length=settings.LENGTH150)
    current_password = serializers.CharField(max_length=settings.LENGTH150)

    class Meta:
        fields = ('new_password', 'current_password')

    def validate_current_password(self, value):
        user = self.context.get('request').user
        if not check_password(value, user.password):
            raise (serializers.
                   ValidationError('Текущий пароль введен с ошибкой'))
        return value
