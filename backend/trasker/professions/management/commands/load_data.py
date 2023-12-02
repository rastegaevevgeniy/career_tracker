import os.path
from csv import DictReader

from django.conf import settings
from django.core.management import BaseCommand

#from shopping.models import Ingredient, Tag
from users.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
 #       if Ingredient.objects.exists() or Tag.objects.exists():
 #           print('Данные уже загружены в БД, выход из скрипта.')
 #           return
 #       if (not os.path.exists(settings.FILE_INGREDIENTS) or not os.path.
 #           exists(settings.FILE_TAGS) or not os.path.exists(settings.
 #                                                            FILE_USERS)):
 #           print('файлы для загрузки данных не найдены')
 #           return
 #       for row in DictReader(open(settings.FILE_INGREDIENTS, 'r',
 #                                  encoding='utf-8')):
 #           Ingredient(name=row['name'],
 #                      measurement_unit=row['measurement_unit']).save()
 #       print('Загрузка ингредиентов завершена')
 #       for row in DictReader(open(settings.FILE_TAGS, 'r', encoding='utf-8')):
 #           Tag(name=row['name'],
 #               color=row['color'],
 #               slug=row['slug']).save()
 #       print('Загрузка tags завершена')

        for row in DictReader(open(settings.FILE_USERS, 'r',
                                   encoding='utf-8')):
            user = row['username']
            if User.objects.filter(username=user).exists():
                print(f'Пользователь: {user} уже существует, не создан')
            else:
                User(username=user,
                    password=row['password'],
                    email=row['email'],
                    first_name=row['first_name'],
                    last_name=row['last_name']).save()
        print('Загрузка users завершена')
        return
