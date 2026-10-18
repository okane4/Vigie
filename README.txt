# Vigie V1.1 — prototype utilisable

## Démarrage simple
1. Décompressez `vigie-v1.zip`.
2. Pour tester sur ordinateur, ouvrez `index.html` dans un navigateur récent. Certaines fonctions réseau et l'installation PWA sont plus fiables si le dossier est publié en HTTPS.
3. Pour l'utiliser sur iPhone/Android, publiez gratuitement le dossier sur un hébergeur statique HTTPS (par exemple GitHub Pages ou Cloudflare Pages), puis ouvrez le lien sur le téléphone. Sur iPhone : Partager > Sur l'écran d'accueil. Sur Android : menu du navigateur > Installer l'application / Ajouter à l'écran d'accueil.

## Fonctions présentes
- Carte OpenStreetMap et recherche d'adresse en France via Nominatim.
- Géolocalisation (permission du navigateur).
- Calcul d'un itinéraire piéton via OSRM public de démonstration, si le service répond.
- Questionnaire de sécurité (incivilités, vol, agression, présence policière, période et ressenti 1–10).
- Enregistrement local sur l'appareil, consultation, export JSON et suppression des réponses.
- Aucun score de sécurité inventé : affichage N/D en l'absence de données fiables.

## Limites à connaître
- Ce n'est PAS une application native publiée sur App Store / Google Play.
- Les réponses ne sont pas envoyées à un serveur et ne sont pas visibles par d'autres utilisateurs.
- Aucune donnée policière réelle rue par rue n'est intégrée.
- L'itinéraire calculé n'est PAS pondéré par la sécurité et ne doit pas être présenté comme un trajet sûr.
- Les services publics de géocodage, de carte et de routage peuvent limiter ou interrompre l'accès. Pour un service commercial ou un trafic important, utilisez des fournisseurs adaptés et respectez leurs politiques.
- Le stockage local peut être perdu si le navigateur efface les données du site.
- Le prototype n'est pas un service d'urgence. Danger immédiat en France : 17 ou 112.

## Coûts
Le code et le dossier sont gratuits. Publication statique possible gratuitement. Ne dépensez pas les 100 € avant d'avoir testé cette version. Un domaine personnalisé est facultatif.

## Nouveautés V1.1
- Jusqu'à 3 itinéraires piétons sélectionnables, boutons d'ouverture dans Google Maps / OpenStreetMap.
- Vos retours apparaissent sur la carte (vert/orange/rouge selon le ressenti) et un ressenti moyen local s'affiche sur la fiche de zone.
- Suppression d'un retour individuel.
- Icônes PNG (iPhone/Android), mise à jour automatique du cache hors-ligne, délai maximal sur le routage.
