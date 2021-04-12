#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 10-Apr-2021
# PURPOSE     : prepare build
# FILENAME    : build.sh
#
# Setup up files in build target directory
# delete all reproducable files for a fresh clean start

TARGET="docs"

JS=$TARGET/js
[ -d $JS ] && rm -rf $JS
yarn run js

CSS=$TARGET/css
[ -d $CSS ] && rm -rf $CSS
yarn run css

# while IFS= read -r FILE; do
#   DEST=$(echo $FILE | sed "s/frontend/$TARGET/")
#   [ -f $DEST ] || cp -v $FILE $DEST
# done < <(find . -type f -name "*.html")

# END
