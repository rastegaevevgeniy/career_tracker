# Generated by Django 4.2.7 on 2023-12-09 06:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('professions', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lesson',
            options={'default_related_name': 'lessons', 'verbose_name': 'Лекция', 'verbose_name_plural': 'Лекции'},
        ),
    ]
