// vérifier si des données utilisateur existent.
const handleNoUserData = (res, userData) => { // fonction utilitaire pour le serveur Express / deux arguments : res → l’objet réponse Express (res.json, res.status) et userData → les données utilisateur récupérées (ou null/undefined si l’utilisateur n’existe pas)
    // Si l’utilisateur n’existe pas
    if (!userData) {
        res.statusCode = 404 // Définit le code HTTP 404 Not Found et signale au front que l’utilisateur n’existe pas.
        return res.json('can not get user') // Envoie une réponse JSON avec un message d’erreur
    }
    // Si l’utilisateur existe on envoi ses données
    return res.json({data: userData})
}
// Permet de réutiliser cette fonction dans plusieurs fichiers de route
module.exports = {
    handleNoUserData
}
