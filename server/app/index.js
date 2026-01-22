const express = require('express') // Importe Express, un framework Node.js / Sert à créer une API HTTP (backend) / Gère : routes (/user/12), requêtes (GET), réponses (res.json())
const cors = require('cors') // Autorise ton front React (localhost:3001 par ex.) à appeler ton back (localhost:3000)

const router = require('./routes') // Importe un routeur Express / Contient toutes les routes de mon API

const app = express() // Initialise mon serveur Express / app est l’objet principal (app.use, app.get, app.listen)

app.use(cors()) // Active CORS pour toutes les routes / permet au front React de consommer l’API
const port = 3000 // Définit le port du serveur backend

app.use(router) // Branche mon routeur Express sur l’application / toutes les routes définies dans ./routes deviennent accessibles (exemple : router.get('/user/:id') accessible via : http://localhost:3000/user/12)

app.listen(port, () => console.log(`Magic happens on port ${port}`)) // Lance le serveur Express / Écoute sur le port 3000
