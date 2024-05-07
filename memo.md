
  _____________________
  /                 `   \
  |  .-----------.  |   |-----.
  |  |           |  |   |-=---|
  |  | Helpdesk  |  |   |-----|
  |  |           |  |   |-----|
  |  |           |  |   |-----|
  |  `-----------'  |   |-----'/\
   \________________/___'     /  \
      /                      / / /
     / //               //  / / /
    /                      / / /
   / _/_/_/_/_/_/_/_/_/_/ /   /
  / _/_/_/_/_/_/_/_/_/_/ /   /
 / _/_/_/_______/_/_/_/ / __/
/______________________/ /    
\______________________\/



comment fonctionne sqlite3 sur l'invite de commande:

on tape d'abord sqlite3 pour lancer le truc
student@teleporter:~$ sqlite3



SQLite version 3.31.1 2020-01-27 19:55:54
Enter ".help" for usage hints.
Connected to a transient in-memory database.



Use ".open FILENAME" to reopen on a persistent database.


pour ouvrir un fichier avec le chemin de la bdd crée.
sqlite> .open /home/student/testDB.db


pour acceder aux bases de données
sqlite> .databases
main: /home/student/testDB.db

POUR ACCeder aux tables
sqlite> .tables

texteislam  ====> ca fait apparaitre les ou la table

POur faire apparaitre toute les tables
sqlite> SELECT * FROM texteislam;
|coran|45|AMOUR|CHEIKH ZOUZOU


================================================================


sql cheat sheet

affiche toutes les colonnes
SELECT * FROM texteislam;