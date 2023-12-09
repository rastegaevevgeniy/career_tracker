import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv(
    'SECRET_KEY',
    'django-insecure-cdg*m%ur9coa+75*%*p9679&x*9wwuop!od104=0e)n9_(kk6x'
)

DEBUG = True

ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'users.apps.UsersConfig',
    'professions.apps.ProfessionsConfig',
    'api.apps.ApiConfig',
    'rest_framework',
    'django_filters',
    'rest_framework.authtoken',
    'djoser',
    'corsheaders',
]

DJOSER = {
    'LOGIN_FIELD': 'email'
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'trasker.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'trasker.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

#DATABASES = {
#    'default': {
#        'ENGINE': os.getenv('DB_ENGINE',
#                            default='django.db.backends.postgresql'),
#        'NAME': os.getenv('DB_NAME', default='postgres'),
#        'USER': os.getenv('POSTGRES_USER', default='postgres'),
#        'PASSWORD': os.getenv('POSTGRES_PASSWORD', default='postgres'),
#        'HOST': os.getenv('DB_HOST', default='db'),
#        'PORT': os.getenv('DB_PORT', default='5432')
#    }
#}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'ru'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],

    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    ),
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.UserRateThrottle',
        'rest_framework.throttling.AnonRateThrottle',
    ],
    'DEFAULT_THROTTLE_RATES': {
        'user': '1000/day',
        'anon': '100/day',
    },
 #   'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
 #   'PAGE_SIZE': 6,
}

AUTH_USER_MODEL = 'users.User'

FILE = {
    'user': os.path.join(BASE_DIR, 'data/users.csv'),
    'direction_training': os.path.join(BASE_DIR, 'data/direction_training.csv'),
    'skill': os.path.join(BASE_DIR, 'data/skill.csv'),
    'course': os.path.join(BASE_DIR, 'data/course.csv'),
 #   'course_skill': os.path.join(BASE_DIR, 'data/course_skill.csv'),
    'lesson': os.path.join(BASE_DIR, 'data/lesson.csv'),
    'lesson_skill': os.path.join(BASE_DIR, 'data/lesson_skill.csv'),
    'profession': os.path.join(BASE_DIR, 'data/profession.csv'),
    'profession_skill': os.path.join(BASE_DIR, 'data/profession_skill.csv'),
    'profession_course': os.path.join(BASE_DIR, 'data/profession_course.csv'),
    'recruitment_company': os.path.join(BASE_DIR, 'data/recruitment_company.csv'),
    'vacancy': os.path.join(BASE_DIR, 'data/vacancy.csv'),
    'vacancy_skills': os.path.join(BASE_DIR, 'data/vacancy_skills.csv'),
    'course_user': os.path.join(BASE_DIR, 'data/course_user.csv'),
    'lesson_user': os.path.join(BASE_DIR, 'data/lesson_user.csv'),
    'profession_user': os.path.join(BASE_DIR, 'data/profession_user.csv'),
}

DATE = '%Y-%m-%d'
#MODEL_STR_LIMIT = 15
#LENGTH7 = 7
LENGTH16 = 30
LENGTH50 = 50
LENGTH150 = 150
LENGTH254 = 254

NUMBER_VACANCIES = 4
CORS_ORIGIN_ALLOW_ALL = True
