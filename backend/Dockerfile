FROM python:buster

ENV PYTHONUNBUFFERED 1

COPY . /backend

WORKDIR /backend

RUN pip3 install --upgrade pip

RUN pip3 install -r requirements.txt
