#!/bin/bash
user="barto"
# ipAdress="octopieu.fr"
ipAdress="192.168.0.30"
# ipAdress="192.168.0.30"
adressComputer="$user""@""$ipAdress"
adressScript="$adressComputer"":/home/barto/www/nginx/"
adressServer="$adressScript""/backend"

# copie de la source front
mkdir build
cp -R ../front/build ./
# supression des fichiers map
rm ./build/static/js/*.map
rm ./build/static/css/*.map


# copie des fichiers de config
cp config/ecosystem.config.js ./build/ecosystem.config.js
# cp config/serverfrontnode.js ./build/serverfrontnode.js
# cp config/package.json ./build/package.json

# on rassemble dans une archive
tar -cf build.tar ./build/
rm -R build

# on ajoute les certificats :
cp -R ../cert cert
tar -rf build.tar cert
rm -R cert

# on y ajoute les sources back :
cd ../back && tar -rf ../deploy/build.tar --exclude="node_modules" --exclude="package-lock.json" * && cd ../deploy






gzip build.tar



# copie du dossier compressé
scp build.tar.gz $adressServer

# copie du script à éxécuter
scp config/apideployserver.sh $adressScript

# on le convertit :
ssh $adressComputer dos2unix /home/barto/www/nginx/apideployserver.sh
# on exécute le script
ssh $adressComputer /home/barto/www/nginx/apideployserver.sh
# on le supprime :
ssh $adressComputer rm /home/barto/www/nginx/apideployserver.sh

rm build.tar.gz



# Copie en local si possible :
cd ../back
tar -cf ../deploy/back.tar --exclude="node_modules" --exclude="package-lock.json" *  && cd ../deploy
mkdir back
cd back 
tar -xf ../back.tar && cd ..
rm back.tar

cp -r back/* /Users/barto/localserver/sources/
rm -R back

# On copie la config :
cp config/ecosystem.config.js.mac  /Users/barto/localserver/ecosystem.config.js



