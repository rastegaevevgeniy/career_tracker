from django.conf import settings
from django.core.validators import MinValueValidator
from django.db import models

from users.models import User


class BaseName(models.Model):
    """Абстрактный класс модели с именем."""
    name = models.TextField(
        max_length=settings.LENGTH16,
        verbose_name='Имя'
    )

    class Meta:
        abstract = True
        ordering = ('name', )

    def __str__(self):
        return self.name[:settings.MODEL_STR_LIMIT]

class BaseUser(models.Model):
    """Абстрактная модель пользователя."""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Пользователь',
    )

    class Meta:
        abstract = True


class Skill(BaseName):
    """Модель навыков."""

    class Meta:
        verbose_name = 'Навык'
        verbose_name_plural = 'Навыки'


class TrainingProgram(BaseName):
    """Модель программы обучения."""

    class Meta:
        verbose_name = 'Программа'
        verbose_name_plural = 'Программы'


class Course(BaseName):
    """Модель курса обучения."""
    skill = models.ManyToManyField(
        Skill, through='CourseSkill',
        verbose_name='Навыки',
    )
    training_program = models.ForeignKey(
        TrainingProgram,
        on_delete=models.CASCADE,
        verbose_name='Профессия',
    )
    course_cost_full = models.PositiveSmallIntegerField(
        verbose_name='Полная стоимость обучения',
        validators=[MinValueValidator(1)]
    )
    course_per_month = models.PositiveSmallIntegerField(
        verbose_name='Ежемесячная стоимость обучения',
        validators=[MinValueValidator(1)]
    )
    link_course = models.URLField(
        max_length=settings.LENGTH254,
    )

    class Meta:
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'
        default_related_name = 'courses'
        constraints = ([models.UniqueConstraint(
            fields=['name', 'training_program'],
            name='name_training_program')])


class CourseSkill(models.Model):
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
    )
    skill = models.ForeignKey(
        Skill,
        on_delete=models.CASCADE,
    )

    class Meta:
        default_related_name = 'courses_skills'
        constraints = ([models.UniqueConstraint(
            fields=['course', 'skill'],
            name='course_skill')])

class Lesson(BaseName):
    """Модель лекции."""
    duration_training = models.PositiveSmallIntegerField(
        verbose_name='Продолжительность лекции',
        validators=[MinValueValidator(1)]
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        verbose_name='Курс',
    )

    class Meta:
        verbose_name = 'Лекция'
        verbose_name_plural = 'Лекции'
        default_related_name = 'lessions'
        constraints = ([models.UniqueConstraint(
            fields=['name', 'course'],
            name='name_course')])


class Profession(BaseName):
    """Класс проффессии."""
    level = models.TextField(
        max_length=settings.LENGTH16,
        verbose_name='Уровень'
    )
    skills =  models.ManyToManyField(
        Skill, through='ProfessionSkill',
        verbose_name='Навыки',
    )
    course = models.ManyToManyField(
        Course, through='ProfessionCourse',
        verbose_name='Курсы',
    )

    class Meta:
        verbose_name = 'Профессия'
        verbose_name_plural = 'Профессии'
        default_related_name = 'professions'
        constraints = ([models.UniqueConstraint(
            fields=['name', 'level'],
            name='name_level')])

class ProfessionSkill(models.Model):
    profession = models.ForeignKey(
        Profession,
        on_delete=models.CASCADE 
    )
    skill = models.ForeignKey(
        Skill,
        on_delete=models.CASCADE,
    )

    class Meta:
        default_related_name = 'professions_skills'
        constraints = ([models.UniqueConstraint(
            fields=['profession', 'skill'],
            name='profession_skill')])


class ProfessionCourse(models.Model):
    profession = models.ForeignKey(
        Profession,
        on_delete=models.CASCADE 
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
    )

    class Meta:
        default_related_name = 'professions_courses'
        constraints = ([models.UniqueConstraint(
            fields=['profession', 'course'],
            name='profession_course')])

class RecruitmentCompany(BaseName):
    """Модель рекрутинговой компании."""
    company_icon = models.ImageField(
        upload_to='icon_image/',
        verbose_name='Иконка',
        null=True
    )

    class Meta:
        verbose_name = 'Компания'
        verbose_name_plural = 'Компании'


class Vacancy(BaseName):
    """Модель вакансии."""
    recruter = models.ForeignKey(
        RecruitmentCompany,
        on_delete=models.CASCADE,
        verbose_name='Вакансия',
    )
    salary = models.PositiveSmallIntegerField(
        verbose_name='Стоимость',
        validators=[MinValueValidator(1)]
    )
    salary_measurement = models.TextField(
        max_length=settings.LENGTH16,
        verbose_name='Единица измерения'
    )
    date = models.DateTimeField(
        'Дата',
    )
    profession = models.ForeignKey(
        Profession,
        on_delete=models.CASCADE,
        verbose_name='Профессия',
    )
    skills = models.ManyToManyField(
        Skill,
        verbose_name='Навыки',
    )
    link_vacancy = models.URLField(
        max_length=settings.LENGTH254,
    )

    class Meta:
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'


class CourseUser(BaseUser):
    """Модель курсов пользователя."""
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        verbose_name='Курсы',
    )
    date = models.DateTimeField(
        'Дата',
    )

    class Meta:
        verbose_name = 'Курс пользователя'
        verbose_name_plural = 'Курсы пользователя'
        default_related_name = 'course_users'
        constraints = ([models.UniqueConstraint(
            fields=['user', 'course'],
            name='user_course')])


class LessionUser(BaseUser):
    """Модель лекций пользователя."""
    lession = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        verbose_name='Пользователь',
    )
    date = models.DateTimeField(
        'Дата',
    )

    class Meta:
        verbose_name = 'Лекция пользователя'
        verbose_name_plural = 'Лекции пользователя'
        default_related_name = 'leksion_users'
        constraints = ([models.UniqueConstraint(
            fields=['user', 'lession'],
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
