FROM maven:3.3.9-jdk-8

ADD . $MAVEN_HOME

RUN cd $MAVEN_HOME \
 && mvn -B clean package -Pdist -Dgit.shallow=true \
 && mv $MAVEN_HOME/target/dc17-norgeProfil-server /oxalis \
 && rm -r $MAVEN_HOME \
 && mkdir /dc17-norgeProfil/ext /dc17-norgeProfil/conf /dc17-norgeProfil/inbound /dc17-norgeProfil/plugin

WORKDIR /dc17-norgeProfil

ENTRYPOINT ["sh", "bin/run.sh"]