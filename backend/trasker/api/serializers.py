from django.conf import settings
from rest_framework import serializers
from datetime import date
import decimal

from professions.models import (Course, LessonSkill, Lesson, #CourseSkill
                                 Profession, ProfessionCourse,
                                ProfessionSkill, RecruitmentCompany,
                                Skill, DirectionTraining,
                                Vacancy, VacancySkill)
from users.models import CourseUser,  LessonUser, ProfessionUser, User

current_date = date.today

def get_course_skills(lessons_course):
    lesson_skills = {}
    for lesson in lessons_course:
        skills = Skill.objects.filter(lessons=lesson).all()
        for skill in skills:
            if lesson_skills.get(skill.name):
                lesson_skills[skill.name] += 1
            else:
                lesson_skills[skill.name] = 1
    return lesson_skills


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
    skills = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = ('name', 'description', 'course_cost_full',
                   'course_per_month', 'link_course', 'direction_training',
                   'course_duration','remaining_course',
                   'number_lessons', 'lessons_completed', 'skills')

    
    def get_remaining_course(self, obj):
        return ((obj.course_duration*10 -
                round((date.today() - CourseUser.objects.
                       get(user=self.context['user'][0],
                           course=obj).date).days/3))/10)

    def get_number_lessons(self, obj):
        return obj.lessons.count()

    def get_lessons_completed(self, obj):
        return Lesson.objects.filter(leksion_users__user=self.context['user'][0], course=obj.id).count()

    def get_skills(self, obj):
        lessons_course =  obj.lessons.all()
        course_skills = get_course_skills(lessons_course)
        lesson_user = Lesson.objects.filter(leksion_users__user=self.context['user'][0], course=obj.id).all()
        user_skills = get_course_skills(lesson_user)
        for skill in course_skills:
            if user_skills.get(skill):
                course_skills[skill] = round(user_skills[skill] / course_skills[skill] * 10) / 10
            else:
                course_skills[skill] = 0
        return course_skills


class VacancySerializer(serializers.ModelSerializer):
    skills = serializers.StringRelatedField(many=True, read_only=True)
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
