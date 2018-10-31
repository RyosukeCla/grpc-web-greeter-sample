FROM protobuf/toolchain

RUN useradd --user-group --create-home admin

ENV HOME=/home/admin

WORKDIR $HOME/app

RUN npm config set save-prefix=''

RUN chown -R admin:admin $HOME

USER admin

COPY ./package.json $HOME/app/package.json
COPY ./package-lock.json $HOME/app/package-lock.json

RUN npm i
