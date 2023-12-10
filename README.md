# career_tracker

## Цель проекта: Вывод аналитических данных для карьерного трека Яндекса в рамках проекта Хакатон+
Provides analytical data in the career track.

Проект СAREER_TRACKER позволяет облегчит предоставление пользователю сведений о возможности повышения своих навыков, в стремлении достижения желаемого уровня своего профессионального развития, а также возможные вакансии на рассматриваемые профессии.

## Технологии
Python==3.9,
Django==4.2.7,
PostgreSQL,
RestAPI,
Nginx,
Dosker,
Dosker-Compose

## Как запустить проект

### запуск контейнера Docker для backend:
```
cd backend/trasker
```
```
docker build -t tracker_backend . 
```
```
docker run --name tracker_backend_container --rm -p 8000:8000 tracker_backend
```
```
docker exec tracker_backend_container python manage.py migrate
```
```
docker exec tracker_backend_container python manage.py load_data
```


### Запуск контейнеров Docker через docker-compose:

```
docker-compose up 
```
```
docker compose exec backend python manage.py migrate
```
```
docker compose exec backend python manage.py load_data
```
```
docker compose exec backend python manage.py collectstatic 
```
```
docker compose exec backend cp -r /app/static/. /backend_static/static/
```
```
http://localhost:8000/api/
```

### Необходимые переменные окружения

DB_ENGINE  # используемая база данных
DB_NAME  # имя базы данных
POSTGRES_USER  # логин для подключения к базе данных
POSTGRES_PASSWORD  # пароль для подключения к БД
DB_HOST  # название сервиса
DB_PORT  # порт для подключения к БД
SECRET_KEY  # ключ к защите подписанных данных
DOCKER_USERNAME  # имя пользователя в DockerHub
DOCKER_PASSWORD  # пароль пользователя в DockerHub
HOST  # ip-адрес сервера
USER  # пользователь
SSH_KEY  # приватный ssh-ключ
PASSPHRASE  # пароль для ssh-ключа

## Документация к API и примеры запросов доступны по ссылке в проекте:

```
http://<host>/api/redoc

```
'''
http://<host>/api/docs
'''

## Разработчики проекта

### Product mfnager:
Анна
### Systems_Analytyst:
Руслан
### Команда дизайна:
Павел, 
Екатерина
### Команда Frontend
Валентина,
Ирена
### Команда Backend
Евгений,
Вугар

[ссылка на развернутый проект, актуальна на 11.12.2023](https://tracker.ddnsking.com/)
