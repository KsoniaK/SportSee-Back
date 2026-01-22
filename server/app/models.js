// Importe les données mockées depuis data.js
const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('./data')


const getUserById = id => USER_MAIN_DATA
    .filter(user => user.id === id) // récupère tous les utilisateurs dont l’ID correspond
    // prend le premier élément du tableau filtré (ou undefined si aucun utilisateur n’est trouvé). On écupère un UNIQUE utilisateur à partir d’un tableau.
    .shift()


const getUserActivityById = id => USER_ACTIVITY
    .filter(userActivity => userActivity.userId === id)
    .shift()


const getUserAverageSession = id => USER_AVERAGE_SESSIONS
    .filter(userActivity => userActivity.userId === id)
    .shift()


const getUserPerformance = id => USER_PERFORMANCE
    .filter(userPerformance => userPerformance.userId === id)
    .shift()

// Rend toutes ces fonctions disponibles dans d’autres fichiers pour pouvoir les utiliser comme un mini service de récupération de données.
module.exports = {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance
}
