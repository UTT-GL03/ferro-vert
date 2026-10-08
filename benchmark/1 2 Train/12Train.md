# Déclaration environnementale du site 1 2 Train

Mesure effectuée le 8 octobre 2026 avec le logiciel EcoIndex.

## Niveau d’écoconception de la page web

![Note A](https://raw.githubusercontent.com/cnumr/lighthouse-plugin-ecoindex/598d9d1bf10a90448d815fd0bf50ebdc712c3b0d/assets/Note-A.webp)

* Note EcoIndex : **81,73/100 (A)**
* Consommation d’eau moyenne rapportée à 1 000 visites : **20,5 litres**, soit environ **2 packs d’eau minérale**.
* Émission de gaz à effet de serre (GES) moyenne rapportée à 1 000 visites : **1,37 kgCO₂e**, soit environ **7 km parcourus en voiture thermique**.

## Méthode d’évaluation

Comme toute production numérique, ce site web a un impact environnemental. Celui-ci est présenté à l’aide d’indicateurs standardisés issus du référentiel [EcoIndex](https://www.ecoindex.fr/), proposé par le [collectif GreenIT.fr](https://www.greenit.fr/).

La performance environnementale d’une page est évaluée à partir de trois indicateurs techniques :

1. le poids des données transférées lors du chargement de la page ;
2. la complexité de la page, mesurée par le nombre d’éléments du DOM ;
3. le nombre de requêtes HTTP nécessaires à son affichage.

Ces indicateurs permettent d’établir un score de 0 à 100 et une note de A à G. La note A correspond à la meilleure performance et la note G à la moins bonne.

EcoIndex estime également la consommation d’eau bleue et les émissions de gaz à effet de serre associées à l’affichage de la page. Ces valeurs sont des ordres de grandeur calculés à partir de l’EcoIndex de la page ; elles ne constituent pas une mesure physique directe.

L’analyse présentée ici est une photographie réalisée le 8 octobre 2026. Les résultats sont susceptibles d’évoluer selon les contenus affichés et les modifications apportées au site.

## Évaluation des pages analysées

### Page d’accueil

URL analysée : <https://www.12train.com/>

| Grade | EcoIndex | Eau par visite | GES par visite | Nombre de requêtes | Poids de la page | Taille du DOM |
|---|---:|---:|---:|---:|---:|---:|
| A | 81,73/100 | 2,05 cl | 1,37 gCO₂e | 13 | 202 Ko | 316 éléments |

Pour 1 000 visites, l’empreinte estimée de cette page représente :

* **20,5 litres d’eau bleue** ;
* **1,37 kgCO₂e**.

### Page de résultats

URL analysée : <https://www.12train.com/>

| Grade | EcoIndex | Eau par visite | GES par visite | Nombre de requêtes | Poids de la page | Taille du DOM |
|---|---:|---:|---:|---:|---:|---:|
| D | 47,41/100 | 3,08 cl | 2,05 gCO₂e | 28 | 261 Ko | 1 776 éléments |

Pour 1 000 visites, l’empreinte estimée de cette page représente :

* **30,8 litres d’eau bleue** ;
* **2,05 kgCO₂e**.

## Évaluation des bonnes pratiques

Le contrôle complémentaire comporte **14 règles**. Selon la synthèse produite par EcoIndex, **9 sont validées et 5 sont en échec**.

### Réseau

Sur les dix règles liées au réseau, six sont validées et quatre sont en échec.

#### Points à améliorer

* **Mise en cache** : aucune des 11 ressources statiques contrôlées ne possède d’en-tête de cache. Des en-têtes `Expires` ou `Cache-Control` adaptés permettraient d’éviter leur téléchargement à chaque visite.
* **Compression des fichiers texte** : six ressources compressibles sont transférées sans compression. Les fichiers HTML, CSS, JavaScript et SVG concernés devraient être servis avec Brotli ou gzip.
* **Externalisation du code** : la page contient trois blocs CSS ou JavaScript intégrés au HTML, dont un bloc CSS et deux blocs JavaScript. Leur transfert dans des fichiers externes faciliterait leur mise en cache et leur réutilisation.
* **Polices de caractères** : quatre polices sont téléchargées. Réduire leur nombre, limiter les variantes ou privilégier des polices système diminuerait encore le poids de la page.

#### Points conformes

* aucune réponse HTTP en erreur n’a été détectée ;
* aucune redirection HTTP n’a été détectée ;
* une seule feuille de styles est chargée ;
* les ressources proviennent d’un seul domaine ;
* le chargement de la page ne nécessite que 12 requêtes HTTP ;
* aucune des 12 requêtes n’utilise HTTP/1 : elles bénéficient toutes d’un protocole plus récent.

### Appareil utilisateur

Sur les trois règles relatives à l’appareil de l’utilisateur, deux sont validées et une est en échec.

* **Point à améliorer** : aucune feuille de styles dédiée à l’impression n’a été détectée. Une feuille CSS d’impression permettrait de masquer les éléments inutiles et de réduire la consommation de papier et d’encre.
* **Points conformes** : aucun GIF animé ni bouton officiel de partage vers un réseau social n’a été détecté.

### Centre de données

EcoIndex classe comme validée la règle relative à l’hébergement des ressources statiques sur un domaine sans cookie. Le détail du même rapport indique toutefois qu’un domaine sert des ressources statiques avec des cookies, avec une valeur mesurée de 1 pour un seuil d’échec fixé à 1. Cette contradiction dans le rapport source doit être vérifiée avant de considérer cette règle comme effectivement respectée.

## Recommandations prioritaires

La page possède déjà de bons indicateurs de poids, de complexité et de requêtes. Pour consolider cette performance et corriger les contrôles en échec, les actions suivantes peuvent être envisagées :

1. **Définir une stratégie de cache** pour les 11 ressources statiques au moyen d’en-têtes `Cache-Control` ou `Expires`.
2. **Compresser les six ressources textuelles concernées** avec Brotli ou gzip.
3. **Externaliser les trois blocs CSS et JavaScript intégrés** lorsque leur mutualisation et leur mise en cache sont pertinentes.
4. **Réduire le nombre de polices téléchargées** et limiter les variantes aux graisses réellement utilisées.
5. **Ajouter une feuille de styles d’impression** qui masque la navigation, les éléments décoratifs et les contenus inutiles sur papier.
6. **Vérifier l’envoi de cookies avec les ressources statiques**, compte tenu de l’incohérence relevée dans le rapport EcoIndex.
7. **Préserver la sobriété actuelle de la page** lors des évolutions futures en surveillant son poids, son DOM et le nombre de requêtes.

## L'écoconception

L’écoconception s’appuie sur une méthodologie et un ensemble de bonnes pratiques pour réduire l’impact de ce site web sur son environnement. Concrètement, il va s’agir de limiter les ressources techniques nécessaires à l’affichage d’une page ou à l’exécution d’une fonctionnalité, tout en étant au plus proche du besoin de l’utilisateur.

Vous êtes un professionnel du numérique et vous souhaitez réduire l’impact environnemental de vos sites ? Voici quelques bonnes pratiques à mettre en oeuvre :

### Quelques bonnes pratiques en matière d'ergonomie et de design
* Limiter le nombre de fonctionnalités dès la conception
* Supprimer les fonctionnalités non utilisées
* Limiter le nombre de carrousels
* Choisir des typographies au poids réduit
* Favoriser les designs simples et épurés
* Adopter quand cela est possible une approche "mobile-first"
* Préférer la pagination au défilement infini
* Éviter la lecture et le chargement automatique des vidéos et des sons
* Optimiser les parcours utilisateurs
* ...

### Quelques bonnes pratiques en matière de gestion des contenus
* Préférer les images aux vidéos
* Limiter le nombre d'images sur chaque page
* Optimiser la taille des images au format cible
* Compresser les images via un outil de type [TinyPNG](https://tinypng.com/)
* Compresser les pdfs via un outil de type [iLovePDF](https://www.ilovepdf.com/fr/compresser_pdf)
* Limiter l'utilisation des GIFs animés
* Préférer les glyphs aux images
* ...

### Quelques bonnes pratiques en matière de développement
* Proposer un traitement asynchrone lorsque c'est possible
* N'utilisez que les portions indispensables des bibliothèques JS et CSS
* Mettre en cache les données calculées souvent utilisées
* Limiter le nombre d'appels aux API HTTP
* Réduire le volume de données stockées au strict nécessaire
* Utiliser la version la plus récente du langage
* Fournir une alternative textuelle aux contenus multimédias
* Découper les CSS
* Ne pas faire de modification du DOM lorsqu’on le traverse
* Utiliser le chargement paresseux (lazyload)
* Valider les pages auprès du W3C
* Ajouter des entêtes Expires ou Cache-Control
* Compresser les fichiers texte : CSS, JS, HTML et SVG
* Mettre en place un sitemap efficient
* ...

### Quelques bonnes pratiques en matière d'hébergement
* Choisir un hébergeur écoresponsable
* Installer le minimum requis sur le serveur
* S’appuyer sur les services managés
* Optimiser l'efficacité énergétique des serveurs
* Réduire au nécessaire les logs des serveurs
* Apache Vhost : désactiver le AllowOverride
* Utiliser des serveurs virtualisés
* Utiliser un serveur asynchrone
* Stocker les données dans le cloud
* ...

### Pour mettre en place votre déclaration environnementale :

* [Accéder à la documentation](https://declaration.greenit.fr/)

### Pour consulter la liste complète de bonnes pratiques de l'écoconception web :

* [Accéder au site web GreenIT](https://www.greenit.fr/)
* [Accéder au dépôt GreenIt (GitHub)](https://github.com/cnumr/best-practices)

### Pour en savoir plus sur EcoIndex :

* [En savoir plus sur le référentiel EcoIndex](https://www.ecoindex.fr/comment-ca-marche/)
* [Accéder au site web EcoIndex](https://www.ecoindex.fr/)
