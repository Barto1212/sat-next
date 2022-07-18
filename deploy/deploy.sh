!/bin/bash
user="barto"
# ipAdress="octopieu.fr"
ipAdress="82.65.249.94"
# ipAdress="192.168.0.30"
localadressScript="/var/www/loic-barthomeuf"
localadressSources=$localadressScript"/sources"

adressComputer="$user""@""$ipAdress"

adressScript=$adressComputer":"$localadressScript
adressSources=$adressComputer":"$localadressSources

# adressScript="$adressComputer"":/var/www/loic-barthomeuf"
# adressServer="$adressScript""/backend"

# copie de la source front
cd ..
tar --exclude="node_modules" --exclude="package-lock.json" --exclude=".next" -cf sources.tar sources

gzip sources.tar


# copie du dossier compressé
scp sources.tar.gz $adressScript
rm sources.tar.gz

cd ./deploy
# copie du script à éxécuter
scp config/apideployserver.sh $adressScript

# on le convertit :
ssh $adressComputer dos2unix $localadressScript"/"apideployserver.sh
# on exécute le script
ssh $adressComputer $localadressScript"/"apideployserver.sh
# on le supprime :
ssh $adressComputer rm $localadressScript"/"apideployserver.sh
