

});

app.post('/search', (req, res) => {
    const userInput = req.body.input5;
    const sql = `SELECT * FROM texteislam WHERE sujet_du_verset LIKE '%${userInput}%'`;
  
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.render('index', { data: rows });
    });
  });
  





  app.get('/', (req, res) => {
    res.render('index', { data: [] }); 
});


app.listen(PORT, () => {
    console.log(`Serveur sur le port ${PORT}`);
});





