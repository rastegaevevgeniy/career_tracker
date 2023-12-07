from django.conf import settings
from rest_framework import serializers


from professions.models import (Course, CourseSkill, Lesson,
                                 Profession, ProfessionCourse,
                                ProfessionSkill, RecruitmentCompany,
                                Skill, DirectionTraining,
                                Vacancy, VacancySkill)
from users.models import CourseUser,  LessonUser, ProfessionUser, User



class CourseSerializer(serializers.ModelSerializer):
    direction_training = serializers.StringRelatedField(many=False,
                                                        read_only=True)

    class Meta:
        model = Course
        fields = ('name', 'description', 'course_cost_full',
                   'course_per_month', 'link_course', 'direction_training') 


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
    course = CourseSerializer(many=True, read_only=True)
    vacancies = serializers.SerializerMethodField()#VacancySerializer(many=True, read_only=True)

    class Meta:
        fields = ('name', 'level', 'salary', 'skills', 'course', 'vacancies')
        model = Profession

    def get_vacancies(self, obj):
        stores = obj.vacancies.all()[:settings.NUMBER_VACANCIES]
        return VacancySerializer(stores, many=True).data

#class LessonSerializer(serializers.ModelSerializer):
#
#    class Meta:
#        fields = ('name', 'duration_training', 'course')
#        model = Lesson



class TrackerSerializer(serializers.ModelSerializer):
    profession = ProfessionSerializer(many=True, read_only=True)
    course = CourseSerializer(many=True, read_only=True)
  #  vacancy = VacancySerializer(many=True, read_only=True)

    class Meta:
        fields = ('username', 'first_name', 'last_name', 'profession',
                  'course')
        model = User

 #   def get_vacancy(self, obj):
 #       vacancy = [5, 6] #
 #       vacancy = Vacancy.objects.all()#filter(profession__id=6)
 #       print ('_______________')
 #       return vacancy