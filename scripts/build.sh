#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 11-Apr-2021
# PURPOSE     : build
# FILENAME    : build.sh
#
# Build website

yarn pre:build &&
  yarn stylus ./frontend/styles.styl --out docs &&
  tsc --sourceMap false

# END
