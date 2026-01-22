const express = require('express')
const idx = require('idx') // utilitaire pour accéder en toute sécurité à des propriétés imbriquées dans un objet / ci utilisé pour récupérer req.params.id sans générer d’erreur si req ou params n’existent pas

const router = express.Router() // Crée un routeur Express indépendant / Permet de regrouper toutes les routes liées aux utilisateurs / Ensuite, il est utilisé dans server.js avec : app.use(router)

// Importe les fonctions définies dans fichier models.js pour récupérer les données de data.js
const {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance
} = require('./models')

// middleware gère le cas où l’utilisateur n’existe pas (renvoie 404 ou les données).
const {
    handleNoUserData
} = require('./middleware')


router.get('/user/:id', (req, res) => {
    // récupère req.params.id en toute sécurité grâce à idx
    const userId = idx(req, _ => _.params.id)
    // convertit l’id en nombre (car les paramètres d’URL sont des chaînes de caractères).
    const userData = getUserById(Number(userId))
    // si pas de données : 404 + message "can not get user", sinon renvoie les données JSON { data: userData }.
    return handleNoUserData(res, userData)
})


router.get('/user/:id/activity', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserActivityById(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/average-sessions', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserAverageSession(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/performance', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserPerformance(Number(userId))

    return handleNoUserData(res, userData)
})


module.exports = router
