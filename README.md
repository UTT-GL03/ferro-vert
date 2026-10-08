# **GL03** - Réduction de l’impact écologique d’un service numérique de réservation de billet de train : Ferro-Vert 

## Choix du sujet 

Au quotidien, nous prenons le train environ 2 fois par mois, et plus pendant les vacances. Pour réserver ces trains, nous passons par l’application SNCF Connect sur notre téléphone. 

A l’échelle globale en France, 5 millions de personnes prennent le train par jour*, et la majorité de ces passagers utilisent l’application SNCF Connect pour réserver leur billet, le scanner en gare et rester au courant des retards des trains. 

Avec autant d’utilisateurs, l’application se doit d’être la plus neutre en carbone possible. C’est pourquoi nous avons choisi de travailler sur cette application afin de baisser son impact. 

*Source : la [SNCF](https://www.sncf-voyageurs.com/fr/decouvrez-notre-entreprise/sncf-voyageurs/nous-comprendre/) 

## Utilité sociale 

SNCF Connect est aujourd’hui un service incontournable pour prendre le train en France. Grâce au train, les voyages sont accessibles à ceux qui n’ont pas de voiture. Afin de proposer plus d’options de prix et de moyens de transport, l’application propose aussi des bus et du covoiturage. 

Le train remplace la voiture mais aussi l’avion, par exemple pour des trajets comme Paris - Londres, Paris - Bruxelles, vers les grandes capitales d’Europe reliées en train. 

Les utilisateurs peuvent acheter des billets, souscrire à des cartes de réduction, rechercher des itinéraires, s’informer en direct sur leurs trajets. Elle s’utilise à la fois pour les déplacements du quotidien mais aussi pour les voyages et pour les trajets de courte ou longue distance. L’ensemble des éléments sont ainsi dans notre poche, permettant d’y accéder à tout moment. 

Avec la situation actuelle en France, que ce soit écologique ou politique, il est nécessaire de mettre en avant des moyens de transport plus responsables que la voiture et l’avion, comme le train. Avec la hausse du prix du carburant et le réchauffement climatique, il faut orienter et informer les gens sur l’option du train, et rendre le train accessible à tous. 
En France, 55% du réseau ferré est éléctrifié ([source](https://fr.wikipedia.org/wiki/%C3%89lectrification_du_r%C3%A9seau_ferr%C3%A9_en_France)), et le mix énergétique français est décarboné à plus de 95% ([le réseau de Transport d'Electricité](https://www.rte-france.com/actualites/bilan-electrique-2025-conditions-sont-reunies-permettre-france-accelerer-electrification)). Le train est donc la solution la plus écologique.

## Effets de la numérisation 

La numérisation de la réservation de trains et des billets fait que ces derniers ne plus imprimés automatiquement, bien qu’ils restent imprimés parfois par les générations plus âgées sur du papier d’imprimante classique : étant donné que c’est aujourd’hui une minorité des cas, on négligera ce cas. De plus, les billets prenables en gare sont sous forme de ticket de caisse. 

Le bilan en impact écologique de la substitution des billets papiers / tickets par le numérique est difficile à établir. On estime : 

Un billet papier de type ticket de caisse “émet” environ 2g de gaz à effet de serre et 5cl d’eau, tandis qu’un mail avec un billet dématérialisé c’est 5g de gaz à effet de serre et 3cl d’eau (source : La fin du ticket de caisse en papier est-elle vraiment une bonne idée pour <u>la planète ? — Vert ). A cela il faut ajouter l’impact de consultation d’une page Web, assez</u> faible (environ 1g), c’est donc à peu près équivalent. Cependant, si l’utilisateur parcourt de nombreuses pages avant de réserver son train, le numérique peut davantage polluer. 

Aussi, l’application remplace le fait de devoir aller en gare afin d’acheter ses billets, empêchant la pollution de transports, et facilitant la réservation de train. Les gens prennent donc leur billet de moins en moins à la dernière minute et sont plus sereins. Elle permet aussi de faire des économies de papier pour les billets et les cartes. La numérisation permet de désengorger les gares. 

## Scénarios d'usage et impacts 

Nous faisons l’hypothèse que l’utilisateur ouvre une fois l’application pour consulter les billets possibles, comme nous le faisons souvent, pour consulter les horaires et les prix, et dans le second scénario il réserve une option posée précédemment, il paie, et il télécharge son billet 

## Scénario 1: consulter les horaires 

1. L’utilisateur se rend sur son application de train préférée grâce à un favori (donc sans passer par un moteur de recherche). Si nécessaire, il donne son consentement. 

2. Ensuite il entre sa ville d’arrivée, puis sa ville de départ (il choisit d’y aller mercredi à 10h). Puis il clique sur chercher.

3. Il consulte les horaires disponibles. 

## Scénario 2 : réserver une option posée 

1. L’utilisateur se rend sur la SNCF Connect grâce à un favori (donc sans passer par un moteur de recherche). Si nécessaire, il donne son consentement 

2. Il va dans les options posées 

3. Il choisit le trajet qu’il veut payer 

4. Il procède au paiement 

5. Il télécharge et consulte son billet 

## Impact de l'exécution des scénarios auprès de différents services concurrents 

L'EcoIndex d'une page (de A à G) est calculé (sources : [EcoIndex](https://www.ecoindex.fr/comment-ca-marche/), [Octo](https://blog.octo.com/sous-le-capot-de-la-mesure-ecoindex), [GreenIT](https://github.com/cnumr/GreenIT-Analysis/blob/acc0334c712ba68939466c42af1514b5f448e19f/script/ecoIndex.js#L19-L44)) en fonction du positionnement de cette page parmi les pages mondiales concernant :

- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Nous avons choisi de comparer l'imact du scénario 1 des services de réservation de trains en France : SNCF Connect, 1 2 Train, Trainline, Trenitalia, Renfe, RATP, et Transilien, qui est particulier car on peut seulement consulter les horaires et les dernières informations dessus : on ne peut pas réserver.
Le scénario 2 était plus compliqué à appliquer pour nous dans la mesure où il faut acheter un billet pour le vérifier. Cependant, le scénario 1 était suffisant pour avoir un avant goût des pratiques à adopter ou à éviter.

|Service|Score|Classe|Détails|
|---|---|---|---|
|SNCF Connect|18,59/100|F|…|
|1 2 Train|82/100|A|…|
|Trenitalia|20,2/100|F|…|
|Renfe|18/100|F|…|
|RATP|23,3/100|F|…|
|Trainline|24/100|F|…|
|Transilien|13,03/100|F|…|

Tab 1 : Mesure de l’EcoIndex de la page d’accueil des services de réservation de trains en France.

Les données des sites 12Train, Renfe et Trainline ont été réalisé avec l'outil EcoIndex, tandis que SNCFConnect, Trenitalia, RATP et Transilien ont été réalisé avec le plugin GreenIT Analysis car ces derniers sont protégés (protection antibot).

Dans le détail, les pages d’accueil qui ont les plus mauvais scores sont celles qui incluent : 

- Beaucoup d’images (même optimisées, elles peuvent avoir un impact négatif) 

- Beaucoup de requêtes (pour les traqueurs et les publicités) 

Parmi les services, on remarque “1 2 Train”, qui nous montre qu’il est possible d’améliorer son EcoIndex (A). Même si le site a fait le choix d’être très minime visuellement et dans les fonctionnalités, il reste facile d’utilisation et garde le nécessaire à la réservation de train. Il faut limiter au maximum l'utilisation d'images, et les garder uniquement lorsque c'est vraiment nécessaire : pas seulement mettre des images pour rendre le site visuellement agréable.

## Modèle économique 

Cours du mercredi 7 octobre 

## Maquette de l'interface et échantillon de données 

## Implémentation du scénario prioritaire 

