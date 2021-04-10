#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 10-Apr-2021
# PURPOSE     : prepare build
# FILENAME    : prepare-docs.sh
#
# Setup up files in build target directory

TARGET="docs"
[ -d $TARGET ] || mkdir -v $TARGET

cp -v ./scripts/index.html ./$TARGET/index.html

# while IFS= read -r FILE; do
#   DEST=$(echo $FILE | sed "s/frontend/$TARGET/")
#   [ -f $DEST ] || cp -v $FILE $DEST
# done < <(find . -type f -name "*.html")

# END
