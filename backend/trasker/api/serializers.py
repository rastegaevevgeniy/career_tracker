from datetime import date

from django.conf import settings
from rest_framework import serializers

from api.utils import get_lessons_skills
from professions.models import Course, Lesson, Profession, Vacancy
from users.models import CourseUser, User


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
                  'course_duration', 'remaining_course',
                  'number_lessons', 'lessons_completed', 'skills')

    def get_remaining_course(self, obj):
        return (obj.course_duration * 10 - round(
            (date.today() - CourseUser.objects.
                get(user=self.context['user'][0],
                    course=obj).date).days / 3)) / 10

    def get_number_lessons(self, obj):
        return obj.lessons.count()

    def get_lessons_completed(self, obj):
        return Lesson.objects.filter(leksion_users__user=self.
                                     context['user'][0], course=obj.id).count()

    def get_skills(self, obj):
        course_lessons = (
            dict((item.name,
                  list(item.skill.values_list('name',
                                              flat=True))) for item in obj.
                 lessons.all())
        )
        course_skills = get_lessons_skills(course_lessons)
        user_lessons = (
            dict((item.name,
                  list(item.skill.values_list('name',
                                              flat=True))) for item in Lesson.
                 objects.filter(leksion_users__user=self.context['user'][0],
                                course=obj.id).all()))
        user_skills = get_lessons_skills(user_lessons)
        skills = {'mastered': [], 'not_mastered': []}
        for item in course_skills:
            if (user_skills.
                    get(item) and user_skills[item] >= course_skills[item]):
                skills['mastered'].append(item)
            else:
                skills['not_mastered'].append(item)
        return skills


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
        return Vacancy.objects.filter(profession__users=self.
                                      context['user'][0]).count()


class TrackerSerializer(serializers.ModelSerializer):
    profession = ProfessionSerializer(many=True, read_only=True)
    my_course = MyCourseSerializer(many=True, read_only=True, source='course')

    class Meta:
        fields = ('username', 'first_name', 'last_name', 'profession',
                  'my_course')
        model = User
