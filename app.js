const express = require('express');
const mongoose = require('mongoose');
const thing = require('./models/thing');
const Thing = require('./models/thing')
const stuffRoutes = require('./routes/stuff')
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Mrdeck:root@coursescluster.drspg38.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

/*La méthode app.use() vous permet d'attribuer un middleware à une route spécifique de votre application.

Le CORS définit comment les serveurs et les navigateurs interagissent, en spécifiant quelles ressources peuvent être demandées de manière légitime – par défaut, les requêtes AJAX sont interdites.

Pour permettre des requêtes cross-origin (et empêcher des erreurs CORS), des headers spécifiques de contrôle d'accès doivent être précisés pour tous vos objets de réponse.

*/

app.use('/api/stuff', stuffRoutes);

module.exports = app;