#!/bin/bash
localisationServeur="/var/www/loic-barthomeuf"

# On efface les sources front précédentes sauf node_modules et package-lock.json :
cd $localisationServeur"/sources"
for file in *; do
   [[ "$file" != 'node_modules' ]] && [[ "$file" != 'package-lock.json' ]] && rm -r "$file"
done
cd ..

# On extrait tout dans le dossier sources :
gunzip $localisationServeur"/sources.tar.gz"
tar -xf $localisationServeur"/sources.tar"
rm $localisationServeur"/sources.tar"

