FROM python:3.7

ARG COMMIT_HASH="undefined"
ARG GIT_BRANCH="undefined"
ENV COMMIT_HASH=$COMMIT_HASH
ENV GIT_BRANCH=$GIT_BRANCH

ENV PROJECT_DIR=/opt/djangologinreact
ENV CLIENT_DIR=$PROJECT_DIR/client
ENV SERVER_DIR=$PROJECT_DIR/server
ENV PYTHONPATH=/usr/local/bin:$SERVER_DIR

ENV MANAGE_PY=$SERVER_DIR/manage.py
ENV DJANGO_SETTINGS_MODULE=core.settings

WORKDIR $PROJECT_DIR

COPY ./server/Pipfile ./server/Pipfile.lock $PROJECT_DIR/

RUN apt-get update && apt-get install -y postgresql-client python3-gdal && \
  rm -rf /var/lib/apt/lists/* && \
  pip3 install --upgrade pip && \
  pip3 install --upgrade pipenv && \
  pipenv install --system --dev

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["-w"]

EXPOSE 8888:8888

COPY . .
