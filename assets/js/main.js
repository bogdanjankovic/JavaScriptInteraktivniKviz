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
function ispisPitanja(){
    
    var nizPitanja=[["What is the capital of Chile? ","What is the highest mountain in Britain? ","What is the smallest country in the world?","Alberta is a province of which country?","How many countries still have the shilling as currency?","Which is the only vowel not used as the first letter in a US State?","What is the largest country in the world?","Where would you find the River Thames?","What is the hottest continent on Earth?","What is the longest river in the world?"],["What did the Romans call Scotland?","Who was made Lord Mayor of London In 1397, 1398, 1406 And 1419?", "Who was Henry VIIIs last wife?","Who was the youngest British Prime Minister?","In which year was Joan of Arc burned at the stake?","Which nationality was the polar explorer Roald Amundsen?","Who was the first female Prime Minister of Australia?","Which English explorer was executed in 1618, fifteen year after being found guilty of conspiracy against King James I of England and VI of Scotland?"," Which English city was once known as Duroliponte?","The first successful vaccine was introduced by Edward Jenner in 1796. Which disease did it guard against?"],["What are the five colours of the Olympic rings?","In football, which team has won the Champions League (formerly the European Cup) the most?","How many players are there in a rugby league team?","Which horse is the only three-time winner of the Grand National?","Since 1977, where has snooker's World Championship taken place?","In tennis, what piece of fruit is found at the top of the men's Wimbledon trophy?","Who won the FIFA Women's World Cup in 2019?","In bowling, what is the term given for three consecutive strikes?","How many world titles has Phil Talyor won in darts?","In golf, where does the Masters take place?"],["Who was the only British Prime Minister to be assassinated?","How long does Prime Minister’s Questions last?","How many Members of Parliament (MPs) are there?","What is the middle name of Angela Merkel?","America's Republican Party is commonly referred to as the GOP - what does the GOP stand for?","Who is Donald Trump's vice president?","In which year did Britain originally join the EEC, now known as the European Union?","How many of the six founding members of the European Union can you name? A point for each.","What is the name given to the group of people who make sure MPs attend important votes?","On what subject was the first referendum in Britain?"],["Which nuts are used in marzipan?","What is the most famous Mexican beer?","Which country is the origin of the cocktail Mojito?","What is Japanese sake made from?","Which vitamin is the only one that you will not find in an egg?","What is the chemical formula for Table Salt?","What does IPA stand for?","Which meat is used in Glamorgan sausages?","What ingredient is included in food in a Florentine style?","Which fish is the main ingredient of Scotch Woodcock?"],["What is the capital of Westeros in Game of Thrones?","Who presented TV quiz Blockbusters between 1983 and 1995?","In Netflix's Tiger King, what is the name of Carole Baskin's second husband who many believe she fed to the tigers?","In Emmerdale, on New Year's Day in 2004, who died when The Woolpack pub's chimney came crashing down in a storm?"," In what Netflix series does actress Gillian Anderson play a sex therapist?","Who played Queen Elizabeth II in the first two seasons of The Crown?","BBC Three series Normal People is based on a book but who is the author?","The six main stars of Friends appeared in all 236 episodes. Who is the next most regular character to appear in the show?","Who does the voiceover on Love Island?","In what year was the first episode of Coronation Street broadcasted on ITV?"],["One Direction is known for being the runners-up in The X Factor in 2010, but who came first?","Which singer has the most UK Number One singles ever?","What was Britney Spears’ first single called?","Who is the only singer to have ever performed more than one James Bond theme song?","Who were the three headliners of Glastonbury 2019?","Who is the only musician ever to have been awarded the Nobel prize for literature?","Which Beatles song was banned from the BBC for its lyrics?","Who was the first female artist to achieve a UK number one with a self-written song?","What is the real name of U2’s guitarist, known as The Edge?","What is David Bowie’s real name?"],["Which year was the Premier League founded?","Real Madrid won the first five European Cups - but which club was the second to win Europe's elite competition?","Who holds the record for most consecutive Premier League appearances (310)?","Which club won the 2017 UEFA Super Cup?","Who was manager of Manchester City when they won their first Premier League title?","Who has scored more career goals - Cristiano Ronaldo or Lionel Messi?","Which Dutch player was voted 'European Player of the Century' in 1999?","Who scored the first Premier League hat-trick?","Which English referee officiated the 2010 World Cup final?","Wayne Rooney scored his Premier League first goal against which team?"],["Which singer was known amongst other things as 'The King of Pop'?","What is Cher's last name?","What is the name of Kim Kardashian's eldest child?","Who was the winner of the first ever UK series of ‘I’m A Celebrity… Get Me Out Of Here!’?","Which English supermodel was born is Streatham in May 1970?","Which footballer has the most Instagram followers in the world - as of 2020?","Tom Cruise is an outspoken member of which religion?","Who is Dolly Parton married to?","American singer Stefani Joanne Angelina Germanotta is best known by which stagename?","Taylor Swift grew up on what type of farm?"]];
    if(brojPitanja<9){brojPitanja++;} else{brojRundi++; brojPitanja=0; novaRunda();}
    var novoPitanje=`<h4> Round ${brojRundi+1} (${kategorija[brojRundi]}) / Question ${brojPitanja+1}:  `
    while(brojRundi<kategorija.length)
    {   
        
        while(brojPitanja<=9){
            console.log("vrednosti i,j redom: "+brojPitanja+" "+brojRundi);
            novoPitanje+=nizPitanja[brojRundi][brojPitanja]+"</h4>"
             return document.getElementById("questions").innerHTML=novoPitanje;
        }
        
        
    }
}
ispisPitanja();
// Funkcija za ispisivanje ponudjenih odgovora 
var nizOdgovora=[["Santiago","San Francisco","Sanchez","Saratoga"],["Mount Chiliad","Mont Blanc","Ben Nevis","Großglockner"],["Serbia","Vatican","San Marino","Andorra"],["Germany","USA","Italy","Canada"],["None","One- United Kingdom","United Kingdom and India","Four- Kenya, Uganda, Tanzania and Somalia"],["A","I","O","E"],["Russia","China","Brazil","USA"],["Paris, France","Rome, Italy","London, UK","Shanghai,China"],["Europe","Africa","Australia","Asia"],["River Nile","River Danube","Missisipi River","Amazon River"],["Caledonia","Scotia","Sirmium","Novae Gaetas"],["Prince Charles","Winston Churchill","Margaret Thatcher","Richard (Dick) Whittington"],["Catherine Parr","Britney Spears","Avril Lavigne","Katty Perry"],["Boris Johnson","William Cavendish","William Pitt the Elder","William Pitt (The Younger)"],["1819","1431","1389","565"],["British","French","Norwegian","Croatian"],["Julia Gillard","Victoria Beckham","Mary-Anne Mathaus","Christina Aguilera"],["William Wallace","Sir Walter Raleigh","Maximilien Robespierre","Walter White"],["Manchester","Yorkshire","Liverpool","Cambridge"],["Polio","Smallpox","Diabetes","Cholera"],["Red,Pink,Orange,White,Blue","Blue, Yellow, Black, Green and Red","Purple, Orange, Pink, Green, Blue","Red, Purple, White, Blue, Green"],["Barcelona","Manchester United","Real Madrid","Red Star Belgrade"],["5","7","13","10"],["Bannered Mare","White Whiskey","Black Beer","Red Rum"],["Camp Nou","Crucible Theatre","Marakana","JNA Stadium"],["Asparagus","Orange","Pineapple","Tomato"],["Serbia","Macedonia","USA","Maroko"],["A turkey","Killing spree","Godlike","Unstoppable"],["5","7","22","16"],["Seattle","Mercedes Benz Arena","Augusta National","Barclays stadium"],["Spencer Perceval","William Shakespeare","Thomas Moore","Arthur Morgan"],["30 minutes","1 hour","2 hours","15 minutes"],["1000","650","300","666"],["Adolf","Eva","Dorothea","Heinrich"],["Grumpy Old Pedestrians","Geezers Organisation of Paedophiles","Grand Old Party","Grandpa's Old Pecker"],["Mike Pence","Joe Biden","Melania Trump","Barrack Obama"],["2016","1973","1856","2005"],["Belgium, France, West Germany, Italy, Luxembourg, Netherlands","Bulgaria, Serbia, Croatia, Macedonia, Bosnia","Romania, Luxembourg, Germany,Italy, Netherlands","Georgia, United Kingdom, Russia, France, Dubai"],["Bullies","Thorns","Whips","Belts"],["Joining the EEC","Assasinating the Queen","Invading India","Scheduling a tea party"],["These nuts","Almonds","Coconuts","Walnuts"],["Hose Miguel","Juan Pablo","Corona","San Miguel"],["Japan","Spain","Cuba","Mexico"],["Rats","Shiba Inu dogs","Rice","Mice"],["Vitamin C","Vitamin D","Vitamin B","Vitamin E"],["NaCl","NaSO4","NH3","H20"],["Intentionally Passive Aligators","Impressively Painted Alpacas","Indian Pale Ale","Irish Pale Ale"],["Beef","Pork","Chicken","None, they are made from cheese"],["Almonds","Lavander","Spinach","Bubblegum"],["Shark","Trout","Swordfish","Anchovy"],["Helm's Deep","Minas Tirith","King's Landing", "Hogwarts"],["Billy Mays","Shamwow Guy","Keanu Reeves","Bob Holness"],["Don Corleone","Don Vito","Don Lewis","Dom Perignon"],["Neville Longbottom","John Snow","Trisha Dingle","Boromir"],["The X files","Sex Education","TMNT","The Witcher"],["Claire Foy","The Queen herself","Betty White","Uma Turman"],["J.R.R Tolkien","J.K Rowling","Dan Brown","Sally Rooney"],["Gunther","Stan Marsh","Eric Cartman","Kyle Broflowski"],["Morgan Freeman","Jim Carry","Iain Stirling","Steven Yeun"],["1980","1960","1930","1990"],["Their fanbase","Matt Cardle","Taylor Swift","Arriana Grande"],["Elvis Presley","John Lennon","Noel Galagher","Michael Jackson"],["Womanizer","Toxic","Baby One More Time","Radar"],["Adelle","John Barry and his orchestra","Jennifer Lopez","Shirley Bassey"],["Oasis, Jessica Barden,The Beattles","Bob Dylan, David Bowie, Britney Spears","Noel Galagher,John Lennon,Rita Ora","The Cure, The Killers and Stormzy"],["Bob Marley","Liam Galagher","Bob Dylan","Dylan Dog"],["I am the Walrus","All you need is love","And I love her","Ask me why"],["Britney Spears","Adelle","Sia","Kate Bush"],["David Evans","Adam Joseph Copeland","Paul Michael Levesque","Dalip Singh Rana"],["Bon Jovi","Davy Jones","David Jones","Davis Jones"],["1992","1972","2002","2012"],["Red Star Belgrade","Porto","Benfica","Arsenal"],["Wayne Rooney","Steven Gerrard","Frank Lampard","Brad Friedel"],["Real Madrid","Barcelona","Aston Villa","Villareal"],["Alex Ferguson","Roberto Cavalli","Roberto Mancini","Andrea Trinchieri"],["Ronaldinho Gaucho","Cristiano Ronaldo","Lionel Messi","Maradona"],["Dirk Kuyt","Rud Van Nisterlooy","Johan Cruyff","Robin Van Persie"],["Eric Cantona","Nemanja Vidic","Wayne Rooney","Thiery Henry"],["Milorad Mazic","Damir Javor","Luigi Lamonika","Howard Webb"],["Arsenal","Real Madrid","AC Milan","Bayern Munich"],["Chris Brown","Elvis Presley","Michael Jackson","Prince"],["Sarkisian","Cherry","Monroe","Kennedy"],["South East","South West","North West","North East"],["Milly Vanilly","Gordon Ramsay","Tony Blackburn","Naomi Campbell"],["Naomi Campbell","Lady Gaga","Adelle","Kim Kardashian"],["David Beckham","Lazar Markovic","Cristiano Ronaldo","Lola Smiljanic"],["Islam","Judaism","Scientology","Mormonism"],["Randy Orton","Connor McGregor","Carl Dean","James Deen"],["Paris Hilton","Sia","Adelle","Lady Gaga"],["Hillbilly Farm","Christmas Tree Farm","Redneck Farm","McDonald Farm"]];
var nizProvere=[0,2,1,3,3,3,0,2,1,0,0,3,0,3,1,2,0,1,3,1,1,2,2,3,1,2,2,0,3,2,0,0,0,1,2,2,0,1,0,2,0,1,2,2,2,0,0,2,3,2,3,2,3,2,2,1,0,3,0,2,1,1,0,2,3,3,2,0,3,0,2,0,2,3,0,2,1,2,0,3,0,2,0,2,2,0,2,2,2,3,1];


console.log(nizProvere[42]);
function kreiranjeOdgovora(){
    var pojedinacniOdgovori=0;
    var noviOdgovori=``;
    for(;moguciOdgovori<nizProvere.length;){
       for(;pojedinacniOdgovori<4;pojedinacniOdgovori++){
            noviOdgovori+=`<input type="button" class="col-xl-4 col-sm-6 btn btn-primary  mx-2 my-4" onclick="proveraTacnosti(this.id)" id="${pojedinacniOdgovori}" value="${nizOdgovora[moguciOdgovori][pojedinacniOdgovori]}"/>`
       } 
       
        return document.getElementById("answers").innerHTML=noviOdgovori;
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------

kreiranjeOdgovora();
// funkcija zameniPitanje preskace postojece pitanje, i otvara naredno, moze se upotrebiti jednom po rundi
function zameniPitanje(){
    if(swap){
        console.log("Can't swap more than once per round!");
        alert("Can't replace questions more than once per round!");
    }
    else{
        moguciOdgovori++;
        zbirTacnih+=10;
        progresBar()
        ispisPitanja();
        kreiranjeOdgovora();
        swap++;
        let nevazeceDugme=document.getElementById("zameniPitanje");
        nevazeceDugme.classList.add("btn","btn-warning");
    }
    
}

//test funkcija sledece pitanje dok se ne implementiraju odgovori
function sledecePitanje(){
    moguciOdgovori++;
    ispisPitanja();
    kreiranjeOdgovora();
}
// Sledeci korak je pisanje funkcije za dinamicko ispisivanje odgovora, prvo treba da se unesu odgovori u neki niz, verovatno moze u dvodimenzioni, s tim sto cu vestacki menjati broj pitanja na neki nacin ako broj pitanja predje 10 if(>10) onda %10!!!! 


//Funkcija za pracenje dosadasnjeg uspeha u HC modu:
var bedzevi=["fa fa-globe","fa fa-history","fa fa-dribbble","fa fa-handshake-o","fa fa-cutlery","fa fa-television","fa fa-music","fa fa-futbol-o","fa fa-star"];
var boja=["success","primary","secondary","warning","info","danger","dark","light","success","warning"];
var beleska=``; 
function uspehTreker(){
    var trekerUspeha=document.getElementById("completedRounds");
     //beleska+=`<span class="${bedzevi[brojRundi-1]}">Congratulations! You've earned a master of ${kategorija[brojRundi-1]} badge!</span>`;
     beleska+=`
        <div class="col-md-3 mx-4 media alert alert-${boja[brojRundi-1]}">
            <i class="${bedzevi[brojRundi-1]}" aria-hidden="true"></i>
            <div class="m-2 media-body">
            <h5 class="mt-0 "> ${kategorija[brojRundi-1]}</h5>
            Round ${brojRundi} complete: Congratulations! You've earned a master of ${kategorija[brojRundi-1]} badge!
            </div>
        </div>
        `
        if(brojRundi%3==0) {trekerUspeha.classList.add("row")};
     beleska+="</br>"
     trekerUspeha.innerHTML=beleska; 
}
function novaRunda(){
    if(!brojPitanja){
            console.log("Uslo je u novaRunda funkciju");
            var vazeceDugme = document.getElementsByClassName('btn-warning');
            while (vazeceDugme.length > 0) {
                vazeceDugme[0].classList.remove('btn-warning');
            } 
            zbirTacnih=0;
            swap=0;
            polapola=0;
            progresBar();
            uspehTreker();

        }
}

//Progress bar funkcija
function progresBar(){
    var progressBar=document.getElementById("progress");
    progressBar.setAttribute("style",`width:${zbirTacnih}%`);
    progressBar.setAttribute("aria-valuenow",`${zbirTacnih}`);
}
//Funkcija za proveru tacnosti odgovora proveraTacnosti()
function proveraTacnosti(clicked){
    console.log(clicked);
    console.log(typeof(clicked));
    for( moguciOdgovori;moguciOdgovori<nizProvere.length;moguciOdgovori++){
        console.log("NIZ PROVERE OD I"+nizProvere[moguciOdgovori]);
        if(parseInt(clicked)==nizProvere[moguciOdgovori]){
            console.log("usao u if");
            var tacanOdgovor=document.getElementById(clicked);
            tacanOdgovor.classList.add("btn-success");
            console.log("TACAN ODGOVOR");
            zbirTacnih+=10;
            progresBar();
            let zeleniBar=document.getElementById("progress");
            zeleniBar.classList.add('bg-success');
            return setTimeout(function(){  sledecePitanje(); }, 500);
            //dodati nesto za progress bar odnosno bonus vreme za time trials
            
        }
        else{
            var netacanOdgovor=document.getElementById(clicked);
            netacanOdgovor.classList.add("btn-danger");
            console.log("NETACAN ODGOVOR");
            zbirTacnih-=10;
            progresBar();
            let crveniBar=document.getElementById("progress");
            crveniBar.classList.add('bg-danger');
            return setTimeout(function(){  gameOver(); }, 500);
        }
    }
    
}
// Funkcija random broj
function randomBroj(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
//Pola pola funkcionalnost
function polaPola(){
    if(!polapola){
    var odstrani1=randomBroj(0,3);
    var odstrani2=randomBroj(0,3);
    while(((odstrani1==nizProvere[moguciOdgovori])||(odstrani2==nizProvere[moguciOdgovori]))||(odstrani1==odstrani2)){
        odstrani1=randomBroj(0,3);
        odstrani2=randomBroj(0,3);
    }
    var prviOdstranjen=document.getElementById(odstrani1);
    prviOdstranjen.classList.add("d-none");
    var drugiOdstranjen=document.getElementById(odstrani2);
    drugiOdstranjen.classList.add("d-none");
    let nevazeceDugme=document.getElementById("polaPola");
    nevazeceDugme.classList.add("btn","btn-warning");
    }
    else{
        alert("Can't use 50/50 more than once per round!");
    }
    polapola++;

}

//gameOver funckionalnost (position relative div se otvara koji ima dva dugmeta i mozda neku sliku, jedno dugme je try again, drugo je enter highscore(otvara ispod neki pre toga hidden div sa formom))
function gameOver(){
    var noviProzor=`<div class="gameOver bg-dark">
    <div class='col-md-12'>
                <header><a href="index.html"><img class="rounded mx-auto d-block" src="assets/img/logo.png" alt="logo"></a></header>
                <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Unfortunately, you lost!</h1>
    <p class="lead">Oh well, better luck next time... Your score was: </p>
  </div>
</div>
	</div>
    <div class='drzacDugmica col-sm-12'><input id="pocniPonovo" class="dugmici btn  btn-success m-2 " type="button" value="New Game" onclick="newGame();"> <input id="rangListaUpis" class="dugmici btn btn-warning btn-outline-primary m-2 " type="button" value="High Score" onclick="highScore();"></div>
    <footer><p></p></footer>
    </div>`
    document.getElementById("container").innerHTML=noviProzor;
}
// function newGame() da vrati sve sto je gameOver obrisao pre svega
function newGame(){
    window.location.reload();
}
