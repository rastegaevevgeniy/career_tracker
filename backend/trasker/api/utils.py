def get_lessons_skills(lessons_course):
    lesson_skills = {}
    for lesson in lessons_course:
        for skill in lessons_course[lesson]:
            if lesson_skills.get(skill):
                lesson_skills[skill] += 1
            else:
                lesson_skills[skill] = 1
    return lesson_skills
