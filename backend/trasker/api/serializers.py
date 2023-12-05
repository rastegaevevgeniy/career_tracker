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


class ProfessionSerializer(serializers.ModelSerializer):
    skills = serializers.StringRelatedField(many=True, read_only=True)
    course = CourseSerializer(many=True, read_only=True)

    class Meta:
        fields = ('name', 'level', 'salary', 'skills', 'course')
        model = Profession


#class LessonSerializer(serializers.ModelSerializer):
#
#    class Meta:
#        fields = ('name', 'duration_training', 'course')
#        model = Lesson

class VacancySerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('name')
        model = Vacancy


class TrackerSerializer(serializers.ModelSerializer):
    profession = ProfessionSerializer(many=True, read_only=True)
    course = CourseSerializer(many=True, read_only=True)
    vacancy = VacancySerializer(many=True, read_only=True)
  #  vacancy = VacancySerializer(source='get_vacancy', many=True)
 #   lesson = LessonSerializer(many=True, read_only=True)

    class Meta:
        fields = ('username', 'first_name', 'last_name', 'profession',
                  'course', 'vacancy')
        model = User

 #   def get_vacancy(self, obj):
 #       vacancy = [5, 6] #
 #       vacancy = Vacancy.objects.all()#filter(profession__id=6)
 #       print ('_______________')
 #       return vacancy