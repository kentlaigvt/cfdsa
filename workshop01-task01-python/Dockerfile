FROM python:3.10.0-slim

COPY requirements.txt /

RUN pip3 install -r /requirements.txt
COPY public /app/public
COPY templates /app/templates
COPY main.py /app/main.py
COPY utils.py /app/utils.py
COPY run.sh /app/run.sh

ENV PORT=3000
EXPOSE $PORT

WORKDIR /app
ENTRYPOINT ["./run.sh"]
