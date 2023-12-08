# career_tracker
provides analytical data in the career track
Вывод аналитических данных для карьерного трека


kdjbn'sdfmkhnd;bns;dgnb


### Запуск Backend
в базовой папке проекта запустить venv (возмоен вариант python3 ... )
```
python -m venv venv
```
Запустить виртуальное окружение:
для windows:
```
source venv/Scripts/activate 
```
для linux:
```
source venv/bin/activate
```
установить зависимости:
```
pip install -r requirements.txt
```
перейти в дирректорию  backend/tracker
и запустить миграции
```
python manage.py makemigrations
```
```
python manage.py migrate
```
загрузить данные:
```
python manage.py load_data
```
Запустить выполнение:
```
python manage.py runserver
```
 

если возникли проблемы с миграцией при повторном разворачивании проекта - удалите db.sqlite3 и повторите выполнение миграций (это из-за того, что меняю модели)
python3 manage.py runserver


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
docker exec tracker_backend_container python manage.py load_data
```
```
docker compose exec backend python manage.py collectstatic 
```
```
docker compose exec backend cp -r /app/static/. /backend_static/static/
```
