import datetime
from csv import DictReader

from django.conf import settings
from django.core.management import BaseCommand

from professions.models import (Course, CourseSkill, Lesson,
                                 Profession, ProfessionCourse,
                                ProfessionSkill, RecruitmentCompany,
                                Skill, DirectionTraining,
                                Vacancy, VacancySkill)
from users.models import CourseUser,  LessonUser, ProfessionUser, User


RESULT_LOAD = 'загрузка завершена: '
ERROR_LOAD = 'запись уже существует, не создана: '


class Command(BaseCommand):
    def handle(self, *args, **options):
        loading_data()


def print_error(*value):
    print(ERROR_LOAD, value)


def print_result(*value):
    print(RESULT_LOAD, value)


def loading_user():
    for row in DictReader(open(settings.FILE['user'], 'r',
                               encoding='utf-8')):
        if User.objects.filter(username=row['username']).exists():
            print_error(row['username'])
        else:
            User(username=row['username'],
                 password=row['password'],
                 email=row['email'],
                 first_name=row['first_name'],
                 last_name=row['last_name']).save()
    print_result(settings.FILE['user'])


def loading_direction_training():
    for row in DictReader(open(settings.FILE['direction_training'], 'r',
                               encoding='utf-8')):
        if DirectionTraining.objects.filter(name=row['name']).exists():
            print_error(row['name'])
        else:
            DirectionTraining(name=row['name']).save()
    print_result(settings.FILE['direction_training'])


def loading_skill():
    for row in DictReader(open(settings.FILE['skill'], 'r',
                               encoding='utf-8')):
        if Skill.objects.filter(name=row['name']).exists():
            print_error(row['name'])
        else:
            Skill(name=row['name']).save()
    print_result(settings.FILE['skill'])


def loading_course():
    for row in DictReader(open(settings.FILE['course'], 'r',
                               encoding='utf-8')):
        if Course.objects.filter(name=row['name']).exists():
            print_error(row['name'])
        else:
            Course(name=row['name'],
                   direction_training=(DirectionTraining.objects.
                                       get(id=int(row['direction_training']))),
                   description=row['description'],
                   course_duration=float(row['course_duration']),
                   course_cost_full=int(row['course_cost_full']),
                   course_per_month=int(row['course_per_month']),
                   link_course=row['link_course']).save()
    print_result(settings.FILE['course'])


def loading_course_skill():
    for row in DictReader(open(settings.FILE['course_skill'], 'r',
                               encoding='utf-8')):
        if CourseSkill.objects.filter(course__id=int(row['course']),
                                      skill__id=int(row['skill'])).exists():
            print_error(row['course'], row['skill'])
        else:
            CourseSkill(
                course=Course.objects.get(id=int(row['course'])),
                skill=Skill.objects.get(id=int(row['skill']))
            ).save()
    print_result(settings.FILE['course_skill'])


def loading_lesson():
    for row in DictReader(open(settings.FILE['lesson'], 'r',
                               encoding='utf-8')):
        if Lesson.objects.filter(course__id=int(row['course']),
                                 name=row['name']).exists():
            print_error(row['course'], row['name'], ERROR_LOAD)
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
        if Profession.objects.filter(level=row['level'],
                                     name=row['name']).exists():
            print_error(row['name'], row['level'])
        else:
            Profession(
                name=row['name'],
                level=row['level'],
                salary=int(row['salary']),
            ).save()
    print_result(settings.FILE['profession'])


def loading_profession_skill():
    for row in DictReader(open(settings.FILE['profession_skill'], 'r',
                               encoding='utf-8')):
        if ProfessionSkill.objects.filter(
            profession__id=int(row['profession']),
            skill__id=int(row['skill'])
        ).exists():
            print_error(row['profession'], row['skill'])
        else:
            ProfessionSkill(
                profession=Profession.objects.get(id=int(row['profession'])),
                skill=Skill.objects.get(id=int(row['skill']))
            ).save()
    print_result(settings.FILE['profession_skill'])


def loading_profession_course():
    for row in DictReader(open(settings.FILE['profession_course'], 'r',
                               encoding='utf-8')):
        if ProfessionCourse.objects.filter(
            profession__id=int(row['profession']),
            course__id=int(row['course'])
        ).exists():
            print_error(row['profession'], row['course'])
        else:
            ProfessionCourse(
                profession=Profession.objects.get(id=int(row['profession'])),
                course=Course.objects.get(id=int(row['course']))
            ).save()
    print_result(settings.FILE['profession_course'])


def loading_recruitmentcompany():
    for row in DictReader(open(settings.FILE['recruitment_company'], 'r',
                               encoding='utf-8')):
        if RecruitmentCompany.objects.filter(name=row['name']).exists():
            print_error(row['name'])
        else:
            RecruitmentCompany(
                name=row['name'],
                link_ikon=row['link_icon'],
            ).save()
    print_result(settings.FILE['recruitment_company'])


def loading_vacancy():
    for row in DictReader(open(settings.FILE['vacancy'], 'r',
                               encoding='utf-8')):
        if Vacancy.objects.filter(link_vacancy=row['link_vacancy']).exists():
            print_error(row['link_vacancy'])
        else:
            Vacancy(
                name=row['name'],
                recruter=(RecruitmentCompany.objects.
                          get(id=int(row['recruter']))),
                salary=int(row['salary']),
                salary_measurement=row['salary_measurement'],
                date=datetime.datetime.strptime(row['date'],
                                                settings.DATE).date(),
                profession=Profession.objects.get(id=int(row['profession'])),
                link_vacancy=row['link_vacancy'],
            ).save()
    print_result(settings.FILE['vacancy'])


def loading_vacancy_skills():
    for row in DictReader(open(settings.FILE['vacancy_skills'], 'r',
                               encoding='utf-8')):
        if VacancySkill.objects.filter(vacancy__id=int(row['vacancy']),
                                       skill__id=int(row['skill'])).exists():
            print_error(row['vacancy'], row['skill'])
        else:
            VacancySkill(
                vacancy=Vacancy.objects.get(id=int(row['vacancy'])),
                skill=Skill.objects.get(id=int(row['skill']))
            ).save()
    print_result(settings.FILE['vacancy_skills'])


def loading_course_user():
    for row in DictReader(open(settings.FILE['course_user'], 'r',
                               encoding='utf-8')):
        if CourseUser.objects.filter(course__id=int(row['course']),
                                     user__id=int(row['user'])).exists():
            print_error(row['course'], row['user'])
        else:
            CourseUser(
                course=Course.objects.get(id=int(row['course'])),
                user=User.objects.get(id=int(row['user'])),
                date=datetime.datetime.strptime(row['date'],
                                                settings.DATE).date()
            ).save()
    print_result(settings.FILE['course_user'])


def loading_lesson_user():
    for row in DictReader(open(settings.FILE['lesson_user'], 'r',
                               encoding='utf-8')):
        if LessonUser.objects.filter(lesson__id=int(row['lesson']),
                                     user__id=int(row['user'])).exists():
            print_error(row['lesson'], row['user'])
        else:
            LessonUser(
                lesson=Lesson.objects.get(id=int(row['lesson'])),
                user=User.objects.get(id=int(row['user'])),
                date=datetime.datetime.strptime(row['date'],
                                                settings.DATE).date()
            ).save()
    print_result(settings.FILE['lesson_user'])


def loading_profession_user():
    for row in DictReader(open(settings.FILE['profession_user'], 'r',
                               encoding='utf-8')):
        if ProfessionUser.objects.filter(
            profession__id=int(row['profession']),
            user__id=int(row['user'])
        ).exists():
            print_error(row['profession'], row['user'])
        else:
            ProfessionUser(
                profession=Profession.objects.get(id=int(row['profession'])),
                user=User.objects.get(id=int(row['user']))
            ).save()
    print_result(settings.FILE['profession_user'])


def loading_data():
    loading_user()
    loading_direction_training()
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
    loading_lesson_user()
    loading_profession_user()
