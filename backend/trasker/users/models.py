from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

from users.validators import validate_username


class User(AbstractUser):
    """Модель для работы с пользователями"""
    username = models.CharField(
        max_length=settings.LENGTH150,
        unique=True,
        verbose_name='Ник пользователя',
        blank=False,
        validators=[validate_username]
    )
    password = models.CharField(
        max_length=settings.LENGTH150,
        blank=False,
        verbose_name='Пароль',
    )
    email = models.EmailField(
        verbose_name='Адрес электронной почты',
        max_length=settings.LENGTH254,
        unique=True,
        blank=False,
    )
    first_name = models.CharField(
        max_length=settings.LENGTH150,
        blank=False,
        verbose_name='Имя пользователя',
    )
    last_name = models.CharField(
        max_length=settings.LENGTH150,
        verbose_name='Фамилия пользователя',
    )

    class Meta:
        ordering = ('username', )
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return self.username
