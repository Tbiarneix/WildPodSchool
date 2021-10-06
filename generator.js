const quotesList = [
    {
      quote: "« Un Jedi utilise la force pour la connaissance et la défense, jamais pour l'attaque. »",
      author: '– Yoda'
    },
    {
      quote:'« Quand 900 ans comme moi tu auras, moins en forme tu seras. »',
      author:'– Yoda'
    },
    {
      quote:'« A vos intuitions vous fier, il faut. »',
      author:'– Yoda'
    },
    {
      quote:'« Un  grand guerrier ? Personne par la guerre ne devient grand. »',
      author:'– Yoda'
    },
    {
      quote:'« Que la force soit avec toi. »',
      author:'– Littéralement tout le monde dans cette franchise'
    },
    {
      quote:"« C'est donc ainsi que s'achève la liberté, sous un tonnerre d'applaudissements. »",
      author:'– Padmé Amidala'
    },
    {
      quote: `« Mais du coup, il y a des planètes différentes dans Star Wars ? »`,
      author:`– Cristi, padawan`
    },
    {
      quote:`« Rrashrakrrykap karaaa arrarakkyysh »`,
      author:'– Chewie'
    }
  ]
  
  let randomQuoteAndAuthor = quotesList[Math.floor(Math.random()*quotesList.length)];
  
  const quotesGenerator = document.querySelector('.generator');
  quotesGenerator.innerHTML = `${randomQuoteAndAuthor.quote}  ${randomQuoteAndAuthor.author}`;
  