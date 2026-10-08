# Déclaration environnementale du site Trainline

Mesure effectuée le 8 octobre 2026 avec le logiciel EcoIndex.

## Niveau d’écoconception de la page web

![Note F](https://raw.githubusercontent.com/cnumr/lighthouse-plugin-ecoindex/598d9d1bf10a90448d815fd0bf50ebdc712c3b0d/assets/Note-F.webp)

* Note EcoIndex : **24/100 (F)**
* Consommation d’eau moyenne rapportée à 1 000 visites : **37,8 litres**, soit environ **4 packs d’eau minérale**.
* Émission de gaz à effet de serre (GES) moyenne rapportée à 1 000 visites : **2,52 kgCO₂e**, soit environ **13 km parcourus en voiture thermique**.

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

URL analysée : <https://www.thetrainline.com/fr>

| Grade | EcoIndex | Eau par visite | GES par visite | Nombre de requêtes | Poids de la page | Taille du DOM |
|---|---:|---:|---:|---:|---:|---:|
| F | 24/100 | 3,78 cl | 2,52 gCO₂e | 85 | 2,879 Mo | 1 985 éléments |

Pour 1 000 visites, l’empreinte estimée de cette page représente :

* **37,8 litres d’eau bleue** ;
* **2,52 kgCO₂e**.

### Page de résultats

URL analysée : <https://www.thetrainline.com/book/results?journeySearchType=single&origin=urn%3Atrainline%3Ageneric%3Aloc%3A4718&destination=urn%3Atrainline%3Ageneric%3Aloc%3A4916&outwardDate=2026-10-14T23%3A30%3A35&outwardDateType=departAfter&selectedTab=train&splitSave=true&lang=fr&transportModes%5B%5D=mixed&dpiCookieId=T0UYM62GJ1PKUOLRC1MOBUBFL&partnershipType=accommodation&partnershipSelection=true&selectedOutward=8NWUNtUfRrw%3D%3AtRUucsbQZu4%3D%3AStandard>

| Grade | EcoIndex | Eau par visite | GES par visite | Nombre de requêtes | Poids de la page | Taille du DOM |
|---|---:|---:|---:|---:|---:|---:|
| F | 18,68/100 | 3,94 cl | 2,63 gCO₂e | 228 | 476 Ko | 2 719 éléments |

Pour 1 000 visites, l’empreinte estimée de cette page représente :

* **39,4 litres d’eau bleue** ;
* **2,63 kgCO₂e**.

## Évaluation des bonnes pratiques

Le contrôle complémentaire comporte **14 règles** : **7 sont validées et 7 sont en échec**.

### Réseau

Sur les dix règles liées au réseau, trois sont validées et sept sont en échec.

#### Points à améliorer

* **Mise en cache** : 55 ressources statiques sur 56 possèdent des en-têtes de cache. La ressource restante devrait également définir un en-tête `Expires` ou `Cache-Control` adapté.
* **Erreurs HTTP** : une réponse HTTP en erreur a été détectée. La ressource concernée devrait être corrigée ou supprimée.
* **Compression des fichiers texte** : 13 ressources compressibles sont transférées sans compression. Les fichiers HTML, CSS, JavaScript et SVG concernés devraient être servis avec Brotli ou gzip.
* **Externalisation du code** : la page contient 30 blocs CSS ou JavaScript intégrés au HTML, dont 10 blocs CSS et 20 blocs JavaScript. Leur mutualisation dans des fichiers externes faciliterait la mise en cache et réduirait les duplications.
* **Nombre de domaines** : les ressources proviennent de 15 domaines distincts. Réduire les dépendances à des domaines tiers limiterait les connexions nécessaires.
* **Nombre de requêtes HTTP** : 85 requêtes sont nécessaires au chargement de la page, alors que la valeur cible du rapport est de 40.
* **Protocole HTTP** : quatre requêtes sur 85 utilisent encore HTTP/1. Elles devraient être migrées vers HTTP/2 ou une version ultérieure.

#### Points conformes

* aucune redirection HTTP n’a été détectée ;
* six feuilles de styles sont chargées, ce qui respecte le seuil du contrôle ;
* une seule police de caractères est téléchargée.

### Appareil utilisateur

Les trois règles relatives à l’appareil de l’utilisateur sont validées :

* aucun GIF animé n’a été détecté ;
* une feuille de styles dédiée à l’impression est disponible ;
* aucun bouton officiel de partage vers un réseau social n’a été détecté.

### Centre de données

EcoIndex classe comme validée la règle relative à l’hébergement des ressources statiques sur un domaine sans cookie. Le détail du même rapport indique toutefois qu’un domaine sert des ressources statiques avec des cookies. Cette contradiction dans le rapport source doit être vérifiée avant de considérer cette règle comme effectivement respectée.

## Recommandations prioritaires

Pour améliorer en priorité l’EcoIndex de la page d’accueil de Trainline, les actions suivantes peuvent être envisagées :

1. **Simplifier le DOM**, en limitant les composants imbriqués, les contenus masqués chargés par défaut et les fonctionnalités secondaires.
2. **Réduire le poids de la page**, notamment en optimisant les médias et en supprimant les ressources non indispensables.
3. **Diminuer le nombre de requêtes HTTP et de domaines sollicités**, en supprimant les dépendances tierces inutilisées et en regroupant les ressources lorsque cela est pertinent.
4. **Compresser les 13 ressources textuelles concernées** avec Brotli ou gzip.
5. **Externaliser les 30 blocs CSS et JavaScript intégrés** lorsque leur mutualisation et leur mise en cache sont pertinentes.
6. **Compléter la stratégie de cache** pour la ressource statique qui ne dispose pas encore d’en-tête adapté.
7. **Corriger ou supprimer la ressource en erreur HTTP**.
8. **Migrer les quatre requêtes HTTP/1** vers HTTP/2 ou une version ultérieure.
9. **Vérifier l’envoi de cookies avec les ressources statiques**, compte tenu de l’incohérence relevée dans le rapport EcoIndex.

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
