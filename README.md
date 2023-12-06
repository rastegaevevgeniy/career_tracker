# career_tracker
provides analytical data in the career track
Вывод аналитических данных для карьерного трека


kdjbn'sdfmkhnd;bns;dgnb
=======
pip install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate

### Загрузить данные:
```
python3 manage.py load_data
```
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