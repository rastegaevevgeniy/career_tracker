from django.conf import settings
from django.core.validators import MinValueValidator
from django.db import models


class BaseName(models.Model):
    """Абстрактный класс модели с именем."""
    name = models.TextField(
        max_length=settings.LENGTH50,
        unique=True,
        verbose_name='Имя'
    )

    class Meta:
        abstract = True
        ordering = ('name', )

    def __str__(self):
        return self.name


class Skill(BaseName):
    """Модель навыков."""

    class Meta:
        verbose_name = 'Навык'
        verbose_name_plural = 'Навыки'


class DirectionTraining(BaseName):
    """Модель  направления обучения."""
    class Meta:
        verbose_name = 'Направление обучения'
        verbose_name_plural = 'Направления обучения'


class Course(BaseName):
    """Модель курса обучения."""
    description = models.TextField(
        max_length=settings.LENGTH254,
        verbose_name='Описание'
    )
    course_duration = models.FloatField(
        verbose_name='Длительность курса',
        validators=[MinValueValidator(0)]
    )
#    skill = models.ManyToManyField(
#        Skill, through='CourseSkill',
#        verbose_name='Навыки',
#    )
    direction_training = models.ForeignKey(
        DirectionTraining,
        on_delete=models.CASCADE,
        verbose_name='Направление обучения',
    )
    course_cost_full = models.PositiveIntegerField(
        verbose_name='Полная стоимость обучения',
        validators=[MinValueValidator(1)]
    )
    course_per_month = models.PositiveIntegerField(
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
            fields=['name', 'direction_training'],
            name='name_direction_training')])


#class CourseSkill(models.Model):
#    course = models.ForeignKey(
#        Course,
#        on_delete=models.CASCADE,
#    )
#    skill = models.ForeignKey(
#        Skill,
#        on_delete=models.CASCADE,
#    )

#    class Meta:
#        default_related_name = 'courses_skills'
#        verbose_name = 'Курс-Навык'
#        verbose_name_plural = 'Курсы-Навыки'
#        constraints = ([models.UniqueConstraint(
#            fields=['course', 'skill'],
#            name='course_skill')])


class Lesson(BaseName):
    """Модель лекции."""
    duration_training = models.PositiveIntegerField(
        verbose_name='Продолжительность лекции',
        validators=[MinValueValidator(1)]
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        verbose_name='Курс',
    )
    skill = models.ManyToManyField(
        Skill, through='LessonSkill',
        verbose_name='Навыки',
    )

    class Meta:
        verbose_name = 'Лекция'
        verbose_name_plural = 'Лекции'
        default_related_name = 'lessons'
        constraints = ([models.UniqueConstraint(
            fields=['name', 'course'],
            name='name_course')])


class LessonSkill(models.Model):
    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
    )
    skill = models.ForeignKey(
        Skill,
        on_delete=models.CASCADE,
    )

    class Meta:
        default_related_name = 'lesson_skills'
        verbose_name = 'Лекция-Навык'
        verbose_name_plural = 'Лекции-Навыки'
        constraints = ([models.UniqueConstraint(
            fields=['lesson', 'skill'],
            name='lesson_skill')])


class Profession(BaseName):
    """Класс проффессии."""
    name = models.TextField(
        max_length=settings.LENGTH50,
        verbose_name='Имя'
    )
    level = models.TextField(
        max_length=settings.LENGTH16,
        verbose_name='Уровень'
    )
    salary = models.PositiveIntegerField(
        verbose_name='Заработная плата',
        validators=[MinValueValidator(1)]
    )
    skills = models.ManyToManyField(
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
        verbose_name = 'Профессия-Навык'
        verbose_name_plural = 'Профессии-Навыки'
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
        verbose_name = 'Профессия-Курс'
        verbose_name_plural = 'Профессии-Курсы'
        constraints = ([models.UniqueConstraint(
            fields=['profession', 'course'],
            name='profession_course')])


class RecruitmentCompany(BaseName):
    """Модель рекрутинговой компании."""
    link_ikon = models.URLField(
        max_length=settings.LENGTH254,
        unique=True,
    )

    class Meta:
        verbose_name = 'Компания'
        verbose_name_plural = 'Компании'


class Vacancy(BaseName):
    """Модель вакансии."""
    name = models.TextField(
        max_length=settings.LENGTH50,
        verbose_name='Имя'
    )
    recruter = models.ForeignKey(
        RecruitmentCompany,
        on_delete=models.CASCADE,
        verbose_name='Вакансия',
    )
    salary = models.PositiveIntegerField(
        verbose_name='Стоимость',
        validators=[MinValueValidator(1)]
    )
    salary_measurement = models.TextField(
        max_length=settings.LENGTH16,
        verbose_name='Единица измерения'
    )
    date = models.DateField(
        'Дата',
    )
    profession = models.ForeignKey(
        Profession,
        on_delete=models.CASCADE,
        verbose_name='Профессия',
    )
    skills = models.ManyToManyField(
        Skill, through='VacancySkill',
        verbose_name='Навыки',
    )
    link_vacancy = models.URLField(
        max_length=settings.LENGTH254,
        unique=True,
    )

    class Meta:
        ordering = ['-date']
        default_related_name = 'vacancies'
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'


class VacancySkill(models.Model):
    vacancy = models.ForeignKey(
        Vacancy,
        on_delete=models.CASCADE
    )
    skill = models.ForeignKey(
        Skill,
        on_delete=models.CASCADE,
    )

    class Meta:
        default_related_name = 'vacancy_skills'
        verbose_name = 'Вакансия-Навык'
        verbose_name_plural = 'Вакансии-Навыки'
        constraints = ([models.UniqueConstraint(
            fields=['vacancy', 'skill'],
            name='vacancy_skill')])
