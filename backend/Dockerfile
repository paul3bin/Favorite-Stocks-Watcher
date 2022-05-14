FROM python:buster

COPY . /backend

WORKDIR /backend

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

EXPOSE 8000

CMD python manage.py runserver