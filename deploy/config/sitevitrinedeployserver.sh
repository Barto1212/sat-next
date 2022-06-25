#!/bin/bash

# On efface les fichiers précédents :
rm -R ~/www/nginx/sitevitrine/sources


# On extrait tout dans le dossier www :
cd ~/www/nginx
gunzip ~/www/nginx/build.tar.gz
tar -xf ~/www/nginx/build.tar

# Je ne sais pas pourquoi ces fichiers apparaissent :
rm ~/www/nginx/build/sitevitrine/._*

# On remonte d'un étage
mv ~/www/nginx/build/sitevitrine/ ~/www/nginx/sitevitrine/sources

# On efface ce qui ne sert plus à rien :
rm build.tar
rm -R build