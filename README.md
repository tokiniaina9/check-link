Code pour verifier les lien http par rapport aux status code retournés: 404 -> not found , 200 -> ok, ....
puis le resulat vont se trouvé dans un fichier CSV.

Pourquoi c'est interessant, vous avez des milliers de lien à tester, il suffit de les mettre dans un fichier text (.txt) puis lancer le script et finalement le resultat est stocké dans un fichier CSV que vous pouvez lire via Excel.

il suffit de lancer: 
  node .\check-link.js 
