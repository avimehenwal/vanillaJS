#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 10-Apr-2021
# PURPOSE     : entrypoint script
# FILENAME    : start-development.sh
#
# Start development mode with hot reload

ROOT_DIR=$1
SESSION="vanillaJS"
MAIN="hactavismInProgress"
SLEEP="sleep 25"
CSS="find ./library -type f -newermt '2 seconds ago' -print -exec cp -v .dist"
WATCH_CSS="yarn run css --watch"
WATCH_JS="yarn run js:w"
WEB_SERVER="http-server docs"

kill_tmux() {
  tmux kill-session -t ${SESSION}
}

if_existing_tmux_session=$(tmux list-sessions | grep ^${SESSION})
[ -z "${if_existing_tmux_session}" ] || kill_tmux

tmux new-session -c ${ROOT_DIR} -s ${SESSION} -d
tmux rename-window -t 0 ${MAIN}
tmux send-keys -t ${MAIN} "${WATCH_JS}" C-m

tmux split-window -c ${ROOT_DIR} -h ${WATCH_CSS}
tmux split-window -c ${ROOT_DIR} -v ${WEB_SERVER}

tmux attach -t ${SESSION}

# END
