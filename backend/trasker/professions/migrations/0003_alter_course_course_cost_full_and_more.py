# Generated by Django 4.2.7 on 2023-12-10 18:34

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('professions', '0002_alter_lesson_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='course_cost_full',
            field=models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)], verbose_name='Полная стоимость обучения'),
        ),
        migrations.AlterField(
            model_name='course',
            name='course_per_month',
            field=models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)], verbose_name='Ежемесячная стоимость обучения'),
        ),
        migrations.AlterField(
            model_name='lesson',
            name='duration_training',
            field=models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)], verbose_name='Продолжительность лекции'),
        ),
        migrations.AlterField(
            model_name='profession',
            name='salary',
            field=models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)], verbose_name='Заработная плата'),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='salary',
            field=models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)], verbose_name='Стоимость'),
        ),
    ]
