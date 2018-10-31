FROM protobuf/toolchain

RUN useradd --user-group --create-home admin

ENV HOME=/home/admin

WORKDIR $HOME/app

RUN npm config set save-prefix=''

RUN chown -R admin:admin $HOME

USER admin

RUN npm i
