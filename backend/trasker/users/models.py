from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from professions.models import Course, Lesson, Profession
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
    profession = models.ManyToManyField(
        Profession, through='ProfessionUser',
        verbose_name='Профессии',
    )
    course = models.ManyToManyField(
        Course, through='CourseUser',
        verbose_name='Курсы',
    )
    lesson = models.ManyToManyField(
        Lesson, through='LessonUser',
        verbose_name='Лекции',
    )

    class Meta:
        ordering = ('username', )
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        default_related_name = 'users'

    def __str__(self):
        return self.username


class BaseUser(models.Model):
    """Абстрактная модель пользователя."""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Пользователь',
    )

    class Meta:
        abstract = True


class CourseUser(BaseUser):
    """Модель курсов пользователя."""
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        verbose_name='Курсы',
    )
    date = models.DateField(
        'Дата подписки на курс',
    )

    class Meta:
        verbose_name = 'Курс пользователя'
        verbose_name_plural = 'Курсы пользователя'
        default_related_name = 'course_users'
        constraints = ([models.UniqueConstraint(
            fields=['user', 'course'],
            name='user_course')])


class LessonUser(BaseUser):
    """Модель лекций пользователя."""
    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        verbose_name='Пользователь',
    )
    date = models.DateField(
        'Дата завершения лекции',
    )

    class Meta:
        verbose_name = 'Лекция пользователя'
        verbose_name_plural = 'Лекции пользователя'
        default_related_name = 'leksion_users'
        constraints = ([models.UniqueConstraint(
            fields=['user', 'lesson'],
            name='user_lession')])


class ProfessionUser(BaseUser):
    profession = models.ForeignKey(
        Profession,
        on_delete=models.CASCADE,
        verbose_name='Пользователь',
    )

    class Meta:
        verbose_name = 'Профессия пользователя'
        verbose_name_plural = 'профессии пользователя'
        default_related_name = 'profession_users'
        constraints = ([models.UniqueConstraint(
            fields=['user', 'profession'],
            name='user_profession')])
