FROM python:buster

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r /requirements.txt


RUN mkdir /backend
WORKDIR /backend

COPY . /backend

EXPOSE 8000