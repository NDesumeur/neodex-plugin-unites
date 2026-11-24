# Unités

Un convertisseur d'unités : tape une valeur, choisis l'unité de départ, et lis le résultat dans l'unité voulue et dans toutes les autres unités de la catégorie à la fois. 19 catégories, des longueurs aux monnaies.

*English version: [README.en.md](README.en.md)*

## Champ unique et favoris (nouveau en 1.4.0)

Écris « 5 pieds en cm » ou « 100 € en $ » ; l'étoile garde tes conversions favorites.

## Utilisation

- Choisis une **catégorie** dans les onglets du haut.
- Tape une **valeur** (la virgule ou le point marchent, les espaces sont ignorés), puis l'unité **De** et l'unité **Vers** : le résultat s'affiche en grand.
- **Inverser** échange les deux unités.
- En dessous, la même valeur **dans toutes les unités** de la catégorie ; un clic sur une ligne la choisit comme unité d'arrivée.
- Les très grands et très petits nombres s'écrivent en notation scientifique.

## Champ unique et favoris (1.4.0)

En haut, écris ta conversion comme une phrase : `5 pieds en cm`, `100 € en # Unités

Un convertisseur d'unités : tape une valeur, choisis l'unité de départ, et lis le résultat dans l'unité voulue et dans toutes les autres unités de la catégorie à la fois. 19 catégories, des longueurs aux monnaies.

*English version: [README.en.md](README.en.md)*

## Utilisation

- Choisis une **catégorie** dans les onglets du haut.
- Tape une **valeur** (la virgule ou le point marchent, les espaces sont ignorés), puis l'unité **De** et l'unité **Vers** : le résultat s'affiche en grand.
- **Inverser** échange les deux unités.
- En dessous, la même valeur **dans toutes les unités** de la catégorie ; un clic sur une ligne la choisit comme unité d'arrivée.
- Les très grands et très petits nombres s'écrivent en notation scientifique.

, `30 °C en °F`, `2 Go en Mo`, `1 000 km en miles`. Les unités se reconnaissent à leur nom (avec ou sans accents, au pluriel) ou à leur symbole (ft, cm, Go, °F). La catégorie, les unités et la valeur se règlent toutes seules.

L’étoile **☆** à droite des unités garde la conversion dans tes **favoris**, affichés en haut : un clic la rouvre, un clic droit la retire.

## Les catégories

- **Longueur** : du nanomètre à l'année-lumière, avec pouces, pieds, miles et unité astronomique.
- **Masse**, **Volume** (dont cuillères, tasses et baril de pétrole), **Surface**, **Temps** (jusqu'au siècle).
- **Vitesse** : m/s, km/h, mph, nœuds, Mach, vitesse de la lumière.
- **Température** : Celsius, Fahrenheit, Kelvin, Rankine.
- **Pression**, **Énergie** (joules, calories, kWh, électronvolts, BTU…), **Puissance**, **Force**, **Angle**, **Fréquence** (dont tours par minute).
- **Données** : octets en puissances de 1000 (Mo, Go, To) et de 1024 (Mio, Gio, Tio), et bits.
- **Débit internet** : de bit/s à Gbit/s, et en octets par seconde.
- **Consommation** : L/100 km, km/L, mpg US et UK (la conversion inverse est bien gérée).
- **Cuisine** : grammes de farine, de sucre, de beurre ou de riz, tasses, cuillères et millilitres.
- **Pointure** : EU, US homme et femme, UK et longueur du pied (équivalences approximatives, elles varient selon les marques).
- **Monnaies** : 31 devises, aux taux de la Banque centrale européenne du jour ouvré le plus récent (la date est indiquée).

## Données et synchronisation

Rien n'est enregistré ni synchronisé. Les taux de change sont demandés à Frankfurter (api.frankfurter.dev, gratuit et sans compte) à l'ouverture du plugin.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Unités → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
