FROM python:3.10.0-slim

COPY requirements.txt /

RUN pip3 install -r /requirements.txt

ARG APP_DIR=/app

WORKDIR ${APP_DIR}

ADD public public
ADD templates templates
ADD main.py main.py
ADD utils.py utils.py
ADD run.sh run.sh

ENV PORT=3000
ENV INSTANCE_NAME=""
ENV INSTANCE_HASH=""
EXPOSE $PORT


WORKDIR ${APP_DIR}
ENTRYPOINT ["./run.sh"]
