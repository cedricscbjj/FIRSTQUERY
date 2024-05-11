
const express = require('express');
const app = express();
const PORT = 2111;

const sqlite3 = require('sqlite3').verbose();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const db = new sqlite3.Database('/home/student/islamDB.db');

app.post('/submit', (req, res) => {
    const { input1, input2, input3, input4 } = req.body;
    //  ca c'est pour Insérer les données dans la base de données
    
    db.run(`INSERT INTO islamDB (type_de_livre, numero_du_verset, sujet_du_verset, auteur) VALUES (?, ?, ?, ?)`, [input1, input2, input3, input4], function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Une ligne a été insérée avec l'ID ${this.lastID}`);
      
        // pour eviter de faire tourner la page pour rien redirection
        res.redirect('/');
    });
});

app.post('/search', (req, res) => {
    const userInput = req.body.input5;
    const sql = `SELECT * FROM islamDB WHERE sujet_du_verset LIKE '%${userInput}%'`;
  
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.render('index', { data: rows });
    });
  });
  


  app.post('/delete', (req, res) => {
    const id = req.body.input6; // Récupérer l'ID depuis le formulaire
    const sql = 'DELETE FROM islamDB WHERE islam_id = ?';

    db.run(sql, id, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Ligne avec l'ID ${id} supprimée de la base de données.`);
        res.redirect('/');
    });
});


  app.get('/', (req, res) => {
    res.render('index', { data: [] }); 
});


app.listen(PORT, () => {
    console.log(`Serveur sur le port ${PORT}`);
});
