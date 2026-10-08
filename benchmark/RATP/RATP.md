# Déclaration environnementale du site RATP

Mesures effectuées les 8 2026 avec le plugin GreenIT Analysis.

## Niveau d’écoconception de la page web

![Note F](https://raw.githubusercontent.com/cnumr/lighthouse-plugin-ecoindex/598d9d1bf10a90448d815fd0bf50ebdc712c3b0d/assets/Note-F.webp)

* Note EcoIndex : **23,30/100 (F)**
* Consommation d’eau moyenne rapportée à 1 000 visites : **38 litres**, soit environ **4 packs d’eau minérale**.
* Émission de gaz à effet de serre (GES) moyenne rapportée à 1 000 visites : **2,53 kgCO₂e**, soit environ **13 km parcourus en voiture thermique**.

## Méthode d’évaluation

Comme toute production numérique, ce site web a un impact environnemental. Celui-ci est présenté à l’aide d’indicateurs standardisés issus du référentiel [EcoIndex](https://www.ecoindex.fr/), proposé par le [collectif GreenIT.fr](https://www.greenit.fr/).

La performance environnementale d’une page est évaluée à partir de trois indicateurs techniques :

1. le poids des données transférées lors du chargement de la page ;
2. la complexité de la page, mesurée par le nombre d’éléments du DOM ;
3. le nombre de requêtes HTTP nécessaires à son affichage.

Ces indicateurs permettent d’établir un score de 0 à 100 et une note de A à G. La note A correspond à la meilleure performance et la note G à la moins bonne.

EcoIndex estime également la consommation d’eau bleue et les émissions de gaz à effet de serre associées à l’affichage de la page. Ces valeurs sont des ordres de grandeur calculés à partir de l’EcoIndex de la page ; elles ne constituent pas une mesure physique directe.

L’analyse présentée ici repose sur des mesures réalisées les 8 octobre 2026. Les résultats sont susceptibles d’évoluer selon les contenus affichés et les modifications apportées au site.

## Évaluation des pages analysées

### Page d’accueil

URL analysée : <https://www.ratp.fr/>

| Grade | EcoIndex | Eau par visite | GES par visite | Nombre de requêtes | Poids de la page | Taille du DOM |
|---|---:|---:|---:|---:|---:|---:|
| F | 23,30/100 | 3,80 cl | 2,53 gCO₂e | 128 | 2 601 Ko (5 876 Ko) | 1 238 éléments |

Pour 1 000 visites, l’empreinte estimée de cette page représente :

* **38 litres d’eau bleue** ;
* **2,53 kgCO₂e**.

Le plugin fournit deux valeurs pour le poids de la page, **2 601 Ko** et **5 876 Ko entre parenthèses**, sans que les données transmises précisent la signification de cette seconde valeur. Elle est donc conservée telle quelle dans ce rapport, sans interprétation supplémentaire.

### Page de résultats

URL analysée : <https://www.ratp.fr/itineraires/Gare%20de%20Saint-Cloud_%2092210%20Saint-Cloud%26Tour%20Eiffel_%2075007%20Paris>

| Grade | EcoIndex | Eau par visite | GES par visite | Nombre de requêtes | Poids de la page | Taille du DOM |
|---|---:|---:|---:|---:|---:|---:|
| F | 10,47/100 | 4,19 cl | 2,79 gCO₂e | 198 | 2 796 Ko | 4 125 éléments |

Pour 1 000 visites, l’empreinte estimée de cette page représente :

* **41,9 litres d’eau bleue** ;
* **2,79 kgCO₂e**.

## Évaluation des bonnes pratiques

Le plugin a contrôlé **18 bonnes pratiques**. Les icônes indiquant leur statut ne figurent pas dans les données transmises ; la répartition ci-dessous est donc établie à partir des seuils et des résultats textuels fournis.

### Réseau et chargement des ressources

#### Points à améliorer

* **Compression des ressources** : 84 % des ressources sont compressées, soit un résultat inférieur au seuil de 95 % indiqué par le plugin.
* **Nombre de domaines** : les ressources sont servies depuis 13 domaines, alors que la bonne pratique recommande d’en utiliser moins de six. Ce nombre élevé multiplie les connexions et peut révéler de nombreuses dépendances tierces.
* **Code intégré au HTML** : 14 feuilles de styles ou scripts sont intégrés directement dans la page. Leur externalisation peut faciliter leur mise en cache et leur réutilisation.
* **Nombre de requêtes HTTP** : 128 requêtes sont nécessaires au chargement de la page, pour un seuil recommandé de 40 au maximum.
* **Minification** : 1 fichier CSS ou JavaScript sur 29 n’est pas minifié.
* **Cookies sur les ressources statiques** : 98 ressources statiques transmettent un cookie, pour un volume total de 239,8 Ko. Ces cookies augmentent inutilement le volume des requêtes.
* **Redirections** : deux redirections HTTP ont été détectées. Les URL ciblées devraient être appelées directement lorsque cela est possible.
* **Polices de caractères** : quatre polices spécifiques sont téléchargées. Réduire leur nombre, limiter les variantes ou privilégier des polices système diminuerait les transferts.

#### Points conformes

* les 112 ressources statiques contrôlées possèdent toutes des en-têtes de cache ;
* aucune réponse HTTP en erreur n’a été détectée ;
* les 128 ressources utilisent toutes HTTP/2 ou une version ultérieure ;
* la page charge huit fichiers CSS, ce qui respecte le seuil maximal de dix.

### Images et contenus

#### Points à améliorer

* **Redimensionnement dans le navigateur** : huit images sont redimensionnées côté client. Elles devraient être produites directement aux dimensions nécessaires afin d’éviter le transfert de pixels inutiles.
* **Images inutilisées** : six images sont téléchargées sans être affichées dans la page.
* **Images bitmap** : une image pourrait être optimisée, pour un gain minimal estimé à 3 Ko.

#### Point conforme

* aucun fichier SVG nécessitant une optimisation n’a été détecté.

### Appareil utilisateur

* **Point à améliorer** : un bouton standard de réseau social a été détecté. Il devrait être remplacé par un lien de partage léger afin d’éviter le chargement d’un script tiers.
* **Point conforme** : deux feuilles de styles dédiées à l’impression sont disponibles.

## Recommandations prioritaires

Pour améliorer en priorité l’EcoIndex de la page d’accueil de la RATP, les actions suivantes peuvent être envisagées :

1. **Réduire le nombre de requêtes HTTP et de domaines sollicités**, en supprimant les ressources et dépendances tierces non indispensables, puis en regroupant les ressources lorsque cela est pertinent.
2. **Optimiser les images**, en redimensionnant les huit images concernées avant leur transfert, en supprimant les six images non affichées et en compressant l’image bitmap signalée. Le plugin estime un gain minimal de 3 Ko pour cette dernière.
3. **Réduire le poids et la complexité de la page**, en limitant les contenus chargés par défaut, les composants imbriqués et les fonctionnalités secondaires.
4. **Porter le taux de ressources compressées de 84 % à au moins 95 %** et minifier le dernier fichier CSS ou JavaScript concerné.
5. **Supprimer les cookies associés aux 98 ressources statiques** afin d’éviter 239,8 Ko de données inutiles dans les échanges.
6. **Externaliser les 14 blocs CSS et JavaScript intégrés** lorsque leur mutualisation et leur mise en cache sont pertinentes.
7. **Supprimer les deux redirections HTTP** en appelant directement les URL de destination lorsque cela est possible.
8. **Réduire le nombre de polices spécifiques** et ne conserver que les variantes réellement utilisées.
9. **Remplacer le bouton standard de réseau social** par un lien de partage léger dépourvu de script tiers.

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
