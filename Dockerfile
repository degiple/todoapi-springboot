FROM openjdk:11-jre-slim

VOLUME /tmp

ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS

COPY build/libs/todoapi-0.0.1-SNAPSHOT.jar todoapi.jar

EXPOSE 8080

ENTRYPOINT exec java $JAVA_OPTS -jar todoapi.jar
# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time.
#ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar todoapi.jar
