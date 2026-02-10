# Hackistan

## Description

Hackistan est un projet réalisé durant le Hackathon organisé par l'AFEC du 9 février au 13 février 2026 par Doriane, David, Maxime (et Pyerre parce qu'il sait pas écrire son prénom).

Le projet consiste en un forum où les utilisateurs peuvent discuter de sujets construit sur une API REST.

## Technologies utilisées

- REACT/VITE
- Express/Nodejs
- SQL/mySQL

## Conventions

- Convention de nommage : camelCase
- Tabulation : 4 spaces

## Architecture

- 2 fichiers séparés : Back-end et Front-end

L'architecture est la suivante :

![alt text](architecture.png)

## EndPoint

v.1

- GET localhost://3000/discussions
- GET localhost://3000/discussion/:id/posts
- GET localhost://3000/tags
- GET localhost://3000/discussion/:id/tags
- GET localhost://3000/users //isAdmin
- GET localhost://3000/userProfile //isUser
- GET localhost://3000/verify
- POST localhost://3000/login
- POST localhost://3000/register
- POST localhost://3000/post //isUser
- POST localhost://3000/discussion //isUser

## Librairies/Dependencies

### Dépendances back-end

- dotenv
- argon2
- express
- mysql2
- jsonwebtoken
- nodemailler

### Dépendances front-end

- axios
- react-icon
