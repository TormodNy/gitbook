#!/bin/sh

COOKIE_SECRET=$(openssl rand -base64 32 | tr -- '+/' '-_')

oauth2-proxy --config /oauth2-proxy.cfg --cookie-secret $COOKIE_SECRET
