# Al Amir — Site restaurant bilingue (EN / AR)

Site inspiré de la structure d'adachirestaurant.com, reconstruit avec **Next.js 14** (App Router).

## Lancer
```bash
npm install
npm run dev      # http://localhost:3000  → redirige vers /en ou /ar selon la langue du navigateur
npm run build && npm start   # production
```

## Structure
| Fichier | Rôle |
|---|---|
| `lib/config.js` | **Nom, adresse, téléphone, horaires, réseaux sociaux, lien de commande** — un seul fichier pour rebrander |
| `lib/i18n.js` | Tous les textes du site en anglais et en arabe |
| `lib/menu.js` | Plats, prix, catégories de menus + images de la galerie (bilingue) |
| `app/[locale]/…` | Pages : accueil, `about`, `menus`, `gallery`, `catering`, `gift-cards`, `contact`, `admin` |
| `app/api/reservations/` | API réservations : `POST` (public), `GET` + `PATCH /:id` (admin) |
| `app/api/gift-cards/` | API cartes-cadeaux : `POST` (public), `GET` (admin) |
| `lib/store.js` | Stockage JSON (`data/*.json`) + clé admin — à remplacer par une BDD en production |
| `components/` | Header (menu tiroir, sélecteur de langue), Footer, Splash, formulaire |
| `public/images/` | Visuels (à remplacer par les vraies photos du client) |
| `middleware.js` | Détection de langue + redirection `/` → `/en` ou `/ar` |

## Design (fidèle au site de référence)
- Palette : vert pétrole texturé (`--teal #0c1a1a`, header `#091b1e`) + crème (`--cream #ebdfd4`, `#e4d1bf`), interludes **blancs**
- Typo : titres serif haut contraste (Bodoni Moda ≈ Freight Big Pro), corps Lato, logo script (Kaushan Script) ; en arabe Amiri / Tajawal / Aref Ruqaa
- Animations : hero en zoom‑out (`scale 1.2 → 1`), titres **lettre par lettre** (`rotateY 90° → 0`), assiettes détourées en rotation lente (90–140 s), cartes menus qui **oscillent** (`UpDown` 7/20/10 s), menu plein écran qui glisse avec apparition en cascade, soulignement animé sur « View our menu »
- Tokens dans `:root` en haut de `app/globals.css` — changer la couleur/police du site se fait là

## Langues
- `/en/...` → anglais (LTR) — `/ar/...` → arabe (RTL automatique, police Tajawal)
- Le bouton en haut à droite bascule la page courante dans l'autre langue.

## Espace admin
- URL : `/en/admin` ou `/ar/admin`
- Clé par défaut : `amir2026` — à changer via `ADMIN_KEY` dans `.env.local` (voir `.env.example`)
- Fonctions : liste des demandes de réservation, filtres, **Confirmer / Annuler**, liste des commandes de cartes-cadeaux

## Crédit agence (badge Nukhba)
Le bas du pied de page affiche la [شارة « Website by Nukhba »](https://nokhba.net.ly/badge) : lien visible vers `https://nokhba.net.ly/badge`, image officielle (variante *light*, adaptée au fond sombre du footer), `rel="sponsored nofollow noopener"`, texte alternatif et libellé bilingues. L'URL et l'image sont dans `lib/config.js` (`restaurant.credit`) ; le balisage est dans `components/Footer.jsx` et le style dans `app/globals.css` (`.footer .credit`). Le badge est facultatif : pour le retirer, supprimer simplement le bloc `.credit` du Footer.

## Aller en production
- Remplacer les images dans `public/images/`
- Mettre le vrai lien de commande (`orderUrl`) et les réseaux dans `lib/config.js`
- Brancher `app/api/reservations/route.js` sur une base de données ou un envoi d'e-mail (Resend, SendGrid…)
- Changer `ADMIN_KEY` et, idéalement, passer à une vraie authentification (NextAuth, Clerk…)
- Brancher le paiement des cartes-cadeaux (Stripe, ou paiement local : Sadad, Moamalat…)
- Déployer sur Vercel / Netlify / n'importe quel hébergeur Node
