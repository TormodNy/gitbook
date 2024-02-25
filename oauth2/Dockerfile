FROM bitnami/oauth2-proxy:7.6.0 as oauth2

COPY ./oauth2/run.sh /code/run.sh
ENTRYPOINT [ "/code/run.sh" ]
