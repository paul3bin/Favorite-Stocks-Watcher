FROM python:buster

COPY . /backend

WORKDIR /backend

RUN pip3 install --upgrade pip

RUN pip3 install -r requirements.txt

EXPOSE 8000

CMD python3 manage.py runserver