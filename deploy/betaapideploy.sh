#!/bin/bash
user="barto"
# ipAdress="82.65.249.94"
ipAdress="192.168.0.30"
adressComputer="$user""@""$ipAdress"
adressScript="$adressComputer"":/home/barto/www/nginx/"
adressServer="$adressScript""/betabackend"

# copie de la source front
mkdir build
cp -R ../front/build ./
# ajout directives robots
cp ./config/robotsBeta.txt ./build/robots.txt
# supression des fichiers map
rm ./build/static/js/*.map
rm ./build/static/css/*.map


# copie des fichiers de config
#cp config/ecosystem.config.js ./build/ecosystem.config.js
# cp config/serverfrontnode.js ./build/serverfrontnode.js
# cp config/package.json ./build/package.json

# on rassemble dans une archive
tar -cf build.tar ./build/
rm -R build

# on ajoute les certificats :
#cp -R ../cert cert
#tar -rf build.tar cert
#rm -R cert

# on y ajoute les sources back :
cd ../back && tar -rf ../deploy/build.tar --exclude="node_modules" --exclude="package-lock.json" * && cd ../deploy
ls

gzip build.tar



# copie du dossier compressé
scp build.tar.gz $adressServer

# copie du script à éxécuter
scp config/betaapideployserver.sh $adressScript

# on le convertit :
ssh $adressComputer dos2unix /home/barto/www/nginx/betaapideployserver.sh
# on exécute le script
ssh $adressComputer /home/barto/www/nginx/betaapideployserver.sh
# on le supprime :
ssh $adressComputer rm /home/barto/www/nginx/betaapideployserver.sh

rm build.tar.gz



