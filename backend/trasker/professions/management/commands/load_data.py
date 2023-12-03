import os.path
from csv import DictReader

from django.conf import settings
from django.core.management import BaseCommand

#from shopping.models import Ingredient, Tag
from users.models import User
from professions.models import TrainingProgram, Skill, Course, CourseSkill, Lesson, Profession, ProfessionSkill

RESULT_LOAD='загрузка завершена'

class Command(BaseCommand):
    def handle(self, *args, **options):
        loading_data()


def print_result(value):
    print(value, RESULT_LOAD)

def loading_user():
    for row in DictReader(open(settings.FILE['user'], 'r',
                                encoding='utf-8')):
        if User.objects.filter(username=row['username']).exists():
            print(row['username'], 'уже существует, не создан')
        else:
            User(username=row['username'],
                password=row['password'],
                email=row['email'],
                first_name=row['first_name'],
                last_name=row['last_name']).save()
    print_result(settings.FILE['user'])

def loading_training_program():
    for row in DictReader(open(settings.FILE['training_program'], 'r',
                               encoding='utf-8')):
        if TrainingProgram.objects.filter(name=row['name']).exists():
            print(row['name'], 'уже существует, не создан')
        else:
            TrainingProgram(name=row['name']).save()
    print_result(settings.FILE['training_program'])

def loading_skill():
    for row in DictReader(open(settings.FILE['skill'], 'r',
                               encoding='utf-8')):
        if Skill.objects.filter(name=row['name']).exists():
            print(row['name'], 'уже существует, не создан')
        else:
            Skill(name=row['name']).save()
    print_result(settings.FILE['skill'])

def loading_course():
    for row in DictReader(open(settings.FILE['course'], 'r',
                               encoding='utf-8')):
        if Course.objects.filter(name=row['name']).exists():
            print(row['name'], 'уже существует, не создан')
        else:
            Course(name=row['name'],
                   training_program=TrainingProgram.objects.get(id=int(row['training_program'])),
                   course_cost_full=int(row['course_cost_full']),
                   course_per_month=int(row['course_per_month']),
                   link_course=row['link_course']).save()
    print_result(settings.FILE['course'])

def loading_course_skill():
    for row in DictReader(open(settings.FILE['course_skill'], 'r',
                               encoding='utf-8')):
        if CourseSkill.objects.filter(course__id=int(row['course']), skill__id=int(row['skill'])).exists():
            print(row['course'], row['skill'], 'уже существует, не создан')
        else:
    #    Course.objects.get(id=int(row['course'])).skill.create(name=row['skill'])
            CourseSkill(
                course=Course.objects.get(id=int(row['course'])),
                skill=Skill.objects.get(id=int(row['skill']))
                ).save()
    print_result(settings.FILE['course_skill'])
#    print(Course.objects.get(id=1).skill.all())

def loading_lesson():
    for row in DictReader(open(settings.FILE['lesson'], 'r',
                               encoding='utf-8')):
        if Lesson.objects.filter(course__id=int(row['course']), name=row['name']).exists():
            print(row['course'], row['name'], 'уже существует, не создан')
        else:
            Lesson(
                name=row['name'],
                duration_training=int(row['duration_training']),
                course=Course.objects.get(id=int(row['course'])),
                ).save()
    print_result(settings.FILE['lesson'])

def loading_profession():
    for row in DictReader(open(settings.FILE['profession'], 'r',
                               encoding='utf-8')):
        if Profession.objects.filter(level=row['level'], name=row['name']).exists():
            print(row['name'], row['level'], 'уже существует, не создан')
        else:
            Profession(
                name=row['name'],
                level=row['level'],
                ).save()
    print_result(settings.FILE['profession'])

def loading_profession_skill():
    None
 #   for row in DictReader(open(settings.FILE['profession_skill'], 'r',
 #                               encoding='utf-8')):
 #       if ProfessionSkill.objects.filter(level=row['level'], name=row['name']).exists():
 #           print(row['name'], row['level'], 'уже существует, не создан')
 #       else:
 #           Profession(
 #               name=row['name'],
 #               level=row['level'],
 #               ).save()
 #   print_result(settings.FILE['profession_skill'])

def loading_profession_course():
    None

def loading_recruitmentcompany():
    None

def loading_vacancy():
    None

def loading_vacancy_skills():
    None

def loading_course_user():
    None

def loading_lession_user():
    None

def loading_profession_user():
    None

def loading_data():
    loading_user()
    loading_training_program()
    loading_skill()
    loading_course()
    loading_course_skill()
    loading_lesson()
    loading_profession()
    loading_profession_skill()
    loading_profession_course()
    loading_recruitmentcompany()
    loading_vacancy()
    loading_vacancy_skills()
    loading_course_user()
    loading_lession_user()
    loading_profession_user()
