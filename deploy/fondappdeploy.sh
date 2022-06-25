#!/bin/bash
user="barto"
# ipAdress="82.65.249.94"
ipAdress="192.168.0.30"
adressComputer="$user""@""$ipAdress"
adressScript="$adressComputer"":~/www"
adressServer="$adressScript""/nginx"

# copie de la source front
mkdir build
cp -R ../fondapp ./build/fondapp
rm ./build/fondapp/.DS_Store


# on rassemble dans une archive
tar -cf build.tar ./build/
rm -R build

# on compresse l'archive
gzip build.tar



# copie du dossier compressé
scp build.tar.gz $adressServer

# copie du script à éxécuter
scp config/fondappdeployserver.sh $adressScript

# compatibilité depuis windows
ssh $adressComputer dos2unix /home/barto/www/fondappdeployserver.sh
# on exécute le script sur la machine distante :
ssh $adressComputer /home/barto/www/fondappdeployserver.sh
# on supprime le script sur la machine distante :
ssh $adressComputer rm /home/barto/www/fondappdeployserver.sh

rm build.tar.gz



