#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-prepush && yarn test --bail --passWithNoTests