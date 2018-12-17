# Lancez votre propre site d'avis de restaurants

Vous avez choisi de vous lancer dans le business des avis de restaurants. Votre objectif : créer un service simple et utile qui permet d'avoir des avis sur des restaurants autour de soi.

Pour ce projet, vous allez devoir apprendre à utiliser des API externes, telles que celles de Google Maps et de Google Places (votre plus gros concurrent ;) ). Et ce n'est pas tout : vous allez devoir orchestrer toutes ces informations de manière cohérente dans votre application !

## Etape 1 : la carte des restaurants

Commencez par les fondations de votre application. Il y aura 2 sections principales :

* Une carte Google Maps, chargée avec l'[API de Google Maps](https://developers.google.com/maps/?hl=fr)

* Une liste de restaurants correspondant à la zone affichée sur la carte Google Maps

Vous placerez ces éléments côte à côte.

La carte Google Maps sera centrée immédiatement sur la position de l'utilisateur. Vous utiliserez l'API de géolocalisation de JavaScript. Un marqueur de couleur spécifique sera placé à l'emplacement de l'utilisateur.

Une liste de restaurants est fournie sous forme de données JSON présentées dans un fichier à part. En temps normal, ces données vous seraient renvoyés par un backend via une API, mais pour cet exercice il sera pour le moment suffisant de charger en mémoire tous les restaurants en mémoire directement.

Voici un exemple de fichier JSON avec déjà 2 restaurants pré-remplis (vous devriez en ajouter un peu plus) :

```json
[
   {
      "restaurantName":"Bronco",
      "address":"39 Rue des Petites Écuries, 75010 Paris",
      "lat":48.8737815,
      "long":2.3501649,
      "ratings":[
         {
            "stars":4,
            "comment":"Un excellent restaurant, j'y reviendrai ! Par contre il vaut mieux aimer la viande."
         },
         {
            "stars":5,
            "comment":"Tout simplement mon restaurant préféré !"
         }
      ]
   },
   {
      "restaurantName":"Babalou",
      "address":"4 Rue Lamarck, 75018 Paris",
      "lat":48.8865035,
      "long":2.3442197,
      "ratings":[
         {
            "stars":5,
            "comment":"Une minuscule pizzeria délicieuse cachée juste à côté du Sacré choeur !"
         },
         {
            "stars":3,
            "comment":"J'ai trouvé ça correct, sans plus"
         }
      ]
   }
]
```

Affichez ces restaurants grâce à leurs coordonnées GPS sur la carte. Les restaurants qui sont actuellement visibles sur la carte doivent être affichés sous forme de liste sur le côté de la carte. Vous afficherez la moyenne des commentaires de chaque restaurant (qui va de 1 à 5 étoiles).

Lorsqu'on clique sur un restaurant, la liste des avis enregistrés s'affiche avec les commentaires. Affichez aussi [la photo Google Street View grâce à l'API correspondante.](https://developers.google.com/maps/documentation/streetview/?hl=fr)

Un outil de filtre permet d'afficher uniquement les restaurants ayant entre X et Y étoiles. La mise à jour de la carte s'effectue en temps réel.

Fichiers à fournir :

* Code HTML / CSS / JS du projet

## Etape 2 : ajoutez des restaurants et des avis !

Vos visiteurs aimeraient eux aussi donner leur avis sur des restaurants !Proposez-leur :

* D'ajouter un avis sur un restaurant existant

* D'ajouter un restaurant, en cliquant sur un lieu spécifique de la carte

Une fois un avis ou un restaurant ajouté, il apparaît immédiatement sur la carte. Un nouveau marqueur apparaît pour indiquer la position du nouveau restaurant.

Les informations ne seront pas sauvegardées si on quitte la page (elles restent juste en mémoire le temps de la visite).

Fichiers à fournir :

* Code HTML / CSS / JS du projet

## Etape 3 : intégration avec l'API de Google Places

Pour l'instant, il n'y a pas beaucoup de restaurants et pas beaucoup d'avis. Heureusement, Google Places propose une API pour récupérer des restaurants et des avis. Servez-vous en pour afficher des restaurants et avis supplémentaires sur votre carte ! Ici la documentation : [https://developers.google.com/places/](https://developers.google.com/places/)

(https://user.oc-static.com/upload/2017/09/11/15051445963709_Screen%20Shot%202017-09-11%20at%205.34.49%20PM.png)

Vous utiliserez la search api pour trouver des restaurants dans la zone affichée.

Lisez bien la documentation pour savoir comment accéder aux données de Google Places et n'hésitez pas à faire autant de recherches Google que nécessaire quand vous butez sur un problème. ;)

## Compétences évaluées

* Développer une application JavaScript complète en respectant un cahier des charges
* Utiliser une API externe en JavaScript
