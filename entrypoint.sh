#!/bin/bash

export ATATUS_LICENSE_KEY=lic_apm_6e49699e38c8498f9a29a05b1adc0182
export ATATUS_APP_NAME=custom-cron-test
export ATATUS_TRACING=true
export ATATUS_ANALYTICS=true
export ATATUS_LOG_BODY=all
export ATATUS_ANALYTICS_CAPTURE_OUTGOING=true

# build typescript app
npx tsc

# run node app
node -r atatus-nodejs/start dist/index.js
