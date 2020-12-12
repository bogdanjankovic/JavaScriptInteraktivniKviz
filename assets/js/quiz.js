if(/Android [4-6]/.test(navigator.appVersion)) {
    window.addEventListener("resize", function() {
       if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
          window.setTimeout(function() {
             document.activeElement.scrollIntoViewIfNeeded();
          },0);
       }
    })
 }
    var regExLastName=/[a-zA-Z-'`]+[ a-zA-Z-'`]/g;
    var regExFirstName=/[a-z]{1,10}/g;
    var regExEmail=/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    var regExNickname=/[a-zA-Z]{3,32}/gi;
    var regExMoney=/[0-9]{3,8}/gi;
// Implementirati izbor modova!

// Funkcija za ispisivanje pitanja
var brojPitanja=-1;
var brojRundi=0;
var swap=0;
var polapola=0;
var newRound=0;
var zbirTacnih=0;
var moguciOdgovori=0;
var kategorija=[ "Geography ", "History "," Sport ", "Politics ", "Food and drink", "TV ","Music ", "Football ","Celebrity "];

ispisPitanja();
// Funkcija za ispisivanje ponudjenih odgovora 
var nizOdgovora=[["Santiago","San Francisco","Sanchez","Saratoga"],["Mount Chiliad","Mont Blanc","Ben Nevis","Großglockner"],["Serbia","Vatican","San Marino","Andorra"],["Germany","USA","Italy","Canada"],["None","One- United Kingdom","United Kingdom and India","Four- Kenya, Uganda, Tanzania and Somalia"],["A","I","O","E"],["Russia","China","Brazil","USA"],["Paris, France","Rome, Italy","London, UK","Shanghai,China"],["Europe","Africa","Australia","Asia"],["River Nile","River Danube","Missisipi River","Amazon River"],["Caledonia","Scotia","Sirmium","Novae Gaetas"],["Prince Charles","Winston Churchill","Margaret Thatcher","Richard (Dick) Whittington"],["Catherine Parr","Britney Spears","Avril Lavigne","Katty Perry"],["Boris Johnson","William Cavendish","William Pitt the Elder","William Pitt (The Younger)"],["1819","1431","1389","565"],["British","French","Norwegian","Croatian"],["Julia Gillard","Victoria Beckham","Mary-Anne Mathaus","Christina Aguilera"],["William Wallace","Sir Walter Raleigh","Maximilien Robespierre","Walter White"],["Manchester","Yorkshire","Liverpool","Cambridge"],["Polio","Smallpox","Diabetes","Cholera"],["Red,Pink,Orange,White,Blue","Blue, Yellow, Black, Green and Red","Purple, Orange, Pink, Green, Blue","Red, Purple, White, Blue, Green"],["Barcelona","Manchester United","Real Madrid","Red Star Belgrade"],["5","7","13","10"],["Bannered Mare","White Whiskey","Black Beer","Red Rum"],["Camp Nou","Crucible Theatre","Marakana","JNA Stadium"],["Asparagus","Orange","Pineapple","Tomato"],["Serbia","Macedonia","USA","Maroko"],["A turkey","Killing spree","Godlike","Unstoppable"],["5","7","22","16"],["Seattle","Mercedes Benz Arena","Augusta National","Barclays stadium"],["Spencer Perceval","William Shakespeare","Thomas Moore","Arthur Morgan"],["30 minutes","1 hour","2 hours","15 minutes"],["1000","650","300","666"],["Adolf","Eva","Dorothea","Heinrich"],["Grumpy Old Pedestrians","Geezers Organisation of Paedophiles","Grand Old Party","Grandpa's Old Pecker"],["Mike Pence","Joe Biden","Melania Trump","Barrack Obama"],["2016","1973","1856","2005"],["Belgium, France, West Germany, Italy, Luxembourg, Netherlands","Bulgaria, Serbia, Croatia, Macedonia, Bosnia","Romania, Luxembourg, Germany,Italy, Netherlands","Georgia, United Kingdom, Russia, France, Dubai"],["Bullies","Thorns","Whips","Belts"],["Joining the EEC","Assasinating the Queen","Invading India","Scheduling a tea party"],["These nuts","Almonds","Coconuts","Walnuts"],["Hose Miguel","Juan Pablo","Corona","San Miguel"],["Japan","Spain","Cuba","Mexico"],["Rats","Shiba Inu dogs","Rice","Mice"],["Vitamin C","Vitamin D","Vitamin B","Vitamin E"],["NaCl","NaSO4","NH3","H20"],["Intentionally Passive Aligators","Impressively Painted Alpacas","Indian Pale Ale","Irish Pale Ale"],["Beef","Pork","Chicken","None, they are made from cheese"],["Almonds","Lavander","Spinach","Bubblegum"],["Shark","Trout","Swordfish","Anchovy"],["Helm's Deep","Minas Tirith","King's Landing", "Hogwarts"],["Billy Mays","Shamwow Guy","Keanu Reeves","Bob Holness"],["Don Corleone","Don Vito","Don Lewis","Dom Perignon"],["Neville Longbottom","John Snow","Trisha Dingle","Boromir"],["The X files","Sex Education","TMNT","The Witcher"],["Claire Foy","The Queen herself","Betty White","Uma Turman"],["J.R.R Tolkien","J.K Rowling","Dan Brown","Sally Rooney"],["Gunther","Stan Marsh","Eric Cartman","Kyle Broflowski"],["Morgan Freeman","Jim Carry","Iain Stirling","Steven Yeun"],["1980","1960","1930","1990"],["Their fanbase","Matt Cardle","Taylor Swift","Arriana Grande"],["Elvis Presley","John Lennon","Noel Galagher","Michael Jackson"],["Womanizer","Toxic","Baby One More Time","Radar"],["Adelle","John Barry and his orchestra","Jennifer Lopez","Shirley Bassey"],["Oasis, Jessica Barden,The Beattles","Bob Dylan, David Bowie, Britney Spears","Noel Galagher,John Lennon,Rita Ora","The Cure, The Killers and Stormzy"],["Bob Marley","Liam Galagher","Bob Dylan","Dylan Dog"],["I am the Walrus","All you need is love","And I love her","Ask me why"],["Britney Spears","Adelle","Sia","Kate Bush"],["David Evans","Adam Joseph Copeland","Paul Michael Levesque","Dalip Singh Rana"],["Bon Jovi","Davy Jones","David Jones","Davis Jones"],["1992","1972","2002","2012"],["Red Star Belgrade","Porto","Benfica","Arsenal"],["Wayne Rooney","Steven Gerrard","Frank Lampard","Brad Friedel"],["Real Madrid","Barcelona","Aston Villa","Villareal"],["Alex Ferguson","Roberto Cavalli","Roberto Mancini","Andrea Trinchieri"],["Ronaldinho Gaucho","Cristiano Ronaldo","Lionel Messi","Maradona"],["Dirk Kuyt","Rud Van Nisterlooy","Johan Cruyff","Robin Van Persie"],["Eric Cantona","Nemanja Vidic","Wayne Rooney","Thiery Henry"],["Milorad Mazic","Damir Javor","Luigi Lamonika","Howard Webb"],["Arsenal","Real Madrid","AC Milan","Bayern Munich"],["Chris Brown","Elvis Presley","Michael Jackson","Prince"],["Sarkisian","Cherry","Monroe","Kennedy"],["South East","South West","North West","North East"],["Milly Vanilly","Gordon Ramsay","Tony Blackburn","Naomi Campbell"],["Naomi Campbell","Lady Gaga","Adelle","Kim Kardashian"],["David Beckham","Lazar Markovic","Cristiano Ronaldo","Lola Smiljanic"],["Islam","Judaism","Scientology","Mormonism"],["Randy Orton","Connor McGregor","Carl Dean","James Deen"],["Paris Hilton","Sia","Adelle","Lady Gaga"],["Hillbilly Farm","Christmas Tree Farm","Redneck Farm","McDonald Farm"]];
var nizProvere=[0,2,1,3,3,3,0,2,1,0,0,3,0,3,1,2,0,1,3,1,1,2,2,3,1,2,2,0,3,2,0,0,1,2,2,0,1,0,2,0,1,2,2,2,0,0,2,3,2,3,2,3,2,2,1,0,3,0,2,1,1,0,2,3,3,2,0,3,0,2,0,2,3,0,2,1,2,0,3,0,2,0,2,2,0,2,2,2,3,1];


// ---------------------------------------------------------------------------------------------------------------------------------------------

kreiranjeOdgovora();
// funkcija zameniPitanje preskace postojece pitanje, i otvara naredno, moze se upotrebiti jednom po rundi



// Sledeci korak je pisanje funkcije za dinamicko ispisivanje odgovora, prvo treba da se unesu odgovori u neki niz, verovatno moze u dvodimenzioni, s tim sto cu vestacki menjati broj pitanja na neki nacin ako broj pitanja predje 10 if(>10) onda %10!!!! 


//Funkcija za pracenje dosadasnjeg uspeha u HC modu:
var bedzevi=["fa fa-globe","fa fa-history","fa fa-dribbble","fa fa-handshake-o","fa fa-cutlery","fa fa-television","fa fa-music","fa fa-futbol-o","fa fa-star"];
var boja=["success","primary","secondary","warning","info","danger","dark","light","success","warning"];
var beleska=``; 




var score=0;


//Pola pola funkcionalnost


//gameOver funckionalnost (position relative div se otvara koji ima dva dugmeta i mozda neku sliku, jedno dugme je try again, drugo je enter highscore(otvara ispod neki pre toga hidden div sa formom))

// function newGame() da vrati sve sto je gameOver obrisao pre svega


//footer

footer();

  var imeKorisnika='';
  var zapis;
  // HighScore

  // regEx
 
  
// RangLista 
   
  //popover
 

