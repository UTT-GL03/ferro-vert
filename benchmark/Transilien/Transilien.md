# Déclaration environnementale du site Transilien

Mesure effectuée le 8 octobre 2026 avec le plugin GreenIT Analysis.

## Niveau d’écoconception de la page web

![Note F](https://raw.githubusercontent.com/cnumr/lighthouse-plugin-ecoindex/598d9d1bf10a90448d815fd0bf50ebdc712c3b0d/assets/Note-F.webp)

* Note EcoIndex : **13,03/100 (F)**
* Consommation d’eau moyenne rapportée à 1 000 visites : **41,1 litres**, soit environ **4 packs d’eau minérale**.
* Émission de gaz à effet de serre (GES) moyenne rapportée à 1 000 visites : **2,74 kgCO₂e**, soit environ **14 km parcourus en voiture thermique**.

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

URL analysée : <https://www.transilien.com/fr>

| Grade | EcoIndex | Eau par visite | GES par visite | Nombre de requêtes | Poids de la page | Taille du DOM |
|---|---:|---:|---:|---:|---:|---:|
| F | 13,03/100 | 4,11 cl | 2,74 gCO₂e | 218 | 6 987 Ko | 1 342 éléments |

Pour 1 000 visites, l’empreinte estimée de cette page représente :

* **41,1 litres d’eau bleue** ;
* **2,74 kgCO₂e**.

### Page de résultats

URL analysée : <https://www.transilien.com/fr/itinerary/search?departure=A%C3%A9roport+d%E2%80%99Orly+%28Terminaux+1-2-3%29%2C+Paray-Vieille-Poste+%2891550-94390%29&departureId=stop_area%3AIDFM%3A63284&arrival=A%C3%A9roport+CDG+%28Terminal+2%29+-+TGV%2C+Le+Mesnil-Amelot+%2877990%29&arrivalId=stop_area%3AIDFM%3A73699&dateType=DEPARTURE&date=14%2F10%2F2026&time=10%3A00>

| Grade | EcoIndex | Eau par visite | GES par visite | Nombre de requêtes | Poids de la page | Taille du DOM |
|---|---:|---:|---:|---:|---:|---:|
| E | 31,52/100 | 3,55 cl | 2,37 gCO₂e | 249 | 1 665 Ko | 699 éléments |

Pour 1 000 visites, l’empreinte estimée de cette page représente :

* **35,5 litres d’eau bleue** ;
* **2,37 kgCO₂e**.

## Évaluation des bonnes pratiques

Le plugin a contrôlé **18 bonnes pratiques**. Les icônes indiquant leur statut ne figurent pas dans les données transmises ; la répartition ci-dessous est donc établie à partir des seuils et des résultats textuels fournis.

### Réseau et chargement des ressources

#### Points à améliorer

* **Mise en cache** : 110 ressources sur 123 possèdent des en-têtes de cache. Les 13 ressources restantes devraient également définir des en-têtes `Expires` ou `Cache-Control` adaptés.
* **Compression des ressources** : 92,2 % des ressources sont compressées, soit un résultat inférieur au seuil de 95 % indiqué par le plugin.
* **Nombre de domaines** : les ressources sont servies depuis 28 domaines, alors que la bonne pratique recommande d’en utiliser moins de six. Ce nombre élevé multiplie les connexions et peut révéler de nombreuses dépendances tierces.
* **Code intégré au HTML** : 12 feuilles de styles ou scripts sont intégrés directement dans la page. Leur externalisation peut faciliter leur mise en cache et leur réutilisation.
* **Nombre de requêtes HTTP** : 198 requêtes sont nécessaires au chargement de la page, pour un seuil recommandé de 40 au maximum.
* **Minification** : 3 fichiers CSS ou JavaScript sur 91 ne sont pas minifiés.
* **Cookies sur les ressources statiques** : 87 ressources statiques transmettent un cookie, pour un volume total de 287,1 Ko. Ces cookies augmentent inutilement le volume des requêtes.
* **Protocole HTTP** : une ressource sur 198 utilise encore HTTP/1. La quasi-totalité des échanges utilise donc un protocole plus récent, mais la dernière ressource pourrait être migrée vers HTTP/2 ou une version ultérieure.

#### Points conformes

* aucune réponse HTTP en erreur n’a été détectée ;
* aucune redirection HTTP n’a été détectée ;
* la page charge au plus sept fichiers CSS, ce qui respecte le seuil maximal de dix ;
* aucune police de caractères spécifique n’est téléchargée.

### Images et contenus

#### Points à améliorer

* **Redimensionnement dans le navigateur** : sept images sont redimensionnées côté client. Elles devraient être produites directement aux dimensions nécessaires afin d’éviter le transfert de pixels inutiles.
* **Images inutilisées** : une image est téléchargée sans être affichée dans la page.
* **Images bitmap** : dix images pourraient être optimisées, pour un gain minimal estimé à 200 Ko.

#### Point conforme

* aucun fichier SVG nécessitant une optimisation n’a été détecté.

### Appareil utilisateur

* **Point à améliorer** : aucune feuille de styles dédiée à l’impression n’a été détectée. Une feuille CSS d’impression permettrait de masquer les éléments inutiles et de réduire la consommation de papier et d’encre.
* **Point conforme** : aucun bouton standard de réseau social n’a été détecté.

## Recommandations prioritaires

Pour améliorer en priorité l’EcoIndex de la page d’accueil de Transilien, les actions suivantes peuvent être envisagées :

1. **Réduire le nombre de requêtes HTTP et de domaines sollicités**, en supprimant les ressources et dépendances tierces non indispensables, puis en regroupant les ressources lorsque cela est pertinent.
2. **Optimiser les images**, en redimensionnant les sept images concernées avant leur transfert, en supprimant l’image non affichée et en compressant les dix images bitmap signalées. Le plugin estime un gain minimal de 200 Ko pour ces dernières.
3. **Réduire le poids et la complexité de la page**, en limitant les contenus chargés par défaut, les composants imbriqués et les fonctionnalités secondaires.
4. **Compléter la stratégie de cache** pour les 13 ressources qui ne disposent pas encore d’en-têtes adaptés.
5. **Supprimer les cookies associés aux 87 ressources statiques** afin d’éviter 287,1 Ko de données inutiles dans les échanges.
6. **Atteindre au moins 95 % de ressources compressées** et minifier les trois fichiers CSS ou JavaScript restants.
7. **Externaliser les 12 blocs CSS et JavaScript intégrés** lorsque leur mutualisation et leur mise en cache sont pertinentes.
8. **Servir toutes les ressources avec HTTP/2 ou une version ultérieure**.
9. **Ajouter une feuille de styles d’impression** qui masque la navigation, les éléments décoratifs et les contenus inutiles sur papier.

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
