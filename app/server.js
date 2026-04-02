// Importe Express, un framework Node.js / Sert à créer une API HTTP (backend) / Gère : routes (/user/12), requêtes (GET), réponses (res.json())
const express = require('express')

// Autorise le front React (localhost:3001 par ex.) à appeler le back (localhost:3000)
const cors = require('cors') 

// Importe un routeur Express / Contient toutes les routes de mon API
const router = require('./routes') 

// Initialise mon serveur Express / app est l’objet principal (app.use, app.get, app.listen)
const app = express() 

// Active CORS pour toutes les routes / permet au front React de consommer l’API
// app.use(cors({
//   origin: 'https://ksoniak.github.io'
// }))
app.use(cors());

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://ksoniak.github.io/SportSee-Front/'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

// Définit le port du serveur backend
const port = process.env.PORT || 3000

// Branche mon routeur Express sur l’application / toutes les routes définies dans ./routes deviennent accessibles (exemple : router.get('/user/:id') accessible via : http://localhost:3000/user/12)
app.use(router)

// Lance le serveur Express / Écoute sur le port 3000
app.listen(port, () => console.log(`Magic happens on port ${port}`)) 