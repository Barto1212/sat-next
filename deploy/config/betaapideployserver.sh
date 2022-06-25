#!/bin/bash
localisationServeurBack=~/www/nginx/betabackend
localisationServeurFront=~/www/nginx/betareact

# On efface les sources front précédentes :
rm -R $localisationServeurFront"/sources"
mkdir $localisationServeurFront"/sources"
# On extrait tout dans le dossier backend :
cd $localisationServeurBack"/sources"
gunzip $localisationServeurBack"/build.tar.gz"
tar -xf $localisationServeurBack"/build.tar"
# On déplace le fichier de config pm2
# mv $localisationServeurBack"/sources/build/ecosystem.config.js" $localisationServeurBack"/ecosystem.config.js"
# On déplace le front à sa place
mv $localisationServeurBack"/sources/build/"* $localisationServeurFront"/sources"
rm $localisationServeurBack"/build.tar"


# On supprime le dossier qu'on vient de créer
# rm $localisationServeurFront"/build.tar"