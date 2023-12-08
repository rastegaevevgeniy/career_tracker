from django.conf import settings
from rest_framework import serializers
from datetime import date
import decimal

from professions.models import (Course, CourseSkill, Lesson,
                                 Profession, ProfessionCourse,
                                ProfessionSkill, RecruitmentCompany,
                                Skill, DirectionTraining,
                                Vacancy, VacancySkill)
from users.models import CourseUser,  LessonUser, ProfessionUser, User

current_date = date.today

class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = ('name', 'description', 'course_cost_full',
                   'course_per_month', 'link_course',)

class MyCourseSerializer(serializers.ModelSerializer):
    direction_training = serializers.StringRelatedField(many=False,
                                                        read_only=True)
    remaining_course = serializers.SerializerMethodField()
    number_lessons = serializers.SerializerMethodField()
    lessons_completed = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = ('name', 'description', 'course_cost_full',
                   'course_per_month', 'link_course', 'direction_training',
                   'course_duration','remaining_course',
                   'number_lessons', 'lessons_completed') 

    
    def get_remaining_course(self, obj):
        return ((obj.course_duration*10 -
                round((date.today() - CourseUser.objects.
                       get(user=self.context['user'][0],
                           course=obj).date).days/3))/10)

    def get_number_lessons(self, obj):
        return obj.lessions.count()

    def get_lessons_completed(self, obj):
        return LessonUser.objects.filter(user=self.context['user'][0]).count()


class VacancySerializer(serializers.ModelSerializer):
    skills = serializers.StringRelatedField(many=True, read_only=True)
  #  date = serializers.DateField
    recruter_name = serializers.ReadOnlyField(source='recruter.name')
    recruter_icon = serializers.ReadOnlyField(source='recruter.link_ikon')

    class Meta:
        fields = ('name', 'recruter_name', 'recruter_icon', 'salary',
                  'salary_measurement', 'date', 'skills', 'link_vacancy')
        model = Vacancy


class ProfessionSerializer(serializers.ModelSerializer):
    skills = serializers.StringRelatedField(many=True, read_only=True)
    recommendation_course = serializers.SerializerMethodField(source='course')
    vacancies = serializers.SerializerMethodField()
    vacancies_count = serializers.SerializerMethodField()

    class Meta:
        fields = ('name', 'level', 'salary', 'skills',
                  'recommendation_course', 'vacancies_count',
                  'vacancies')
        model = Profession

    def get_vacancies(self, obj):
        stores = obj.vacancies.all()[:settings.NUMBER_VACANCIES]
        return VacancySerializer(stores, many=True).data

    def get_recommendation_course(self, obj):
        queryset = obj.course.all().difference(self.context['user'][0].
                                               course.all())
        serializer = CourseSerializer(instance=queryset, many=True)
        return serializer.data

    def get_vacancies_count(self, obj):
        return Vacancy.objects.filter(profession__users=self.context['user'][0]).count()

class TrackerSerializer(serializers.ModelSerializer):
    profession = ProfessionSerializer(many=True, read_only=True)
    my_course = MyCourseSerializer(many=True, read_only=True, source='course')
    
    class Meta:
        fields = ('username', 'first_name', 'last_name', 'profession',
                   'my_course') 
        model = User
