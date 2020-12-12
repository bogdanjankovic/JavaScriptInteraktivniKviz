//Dinamicki ispisuje pitanja ucitavanjem iz dvodimenzionog niza
function ispisPitanja(){
    
    var nizPitanja=[["What is the capital of Chile? ","What is the highest mountain in Britain? ","What is the smallest country in the world?","Alberta is a province of which country?","How many countries still have the shilling as currency?","Which is the only vowel not used as the first letter in a US State?","What is the largest country in the world?","Where would you find the River Thames?","What is the hottest continent on Earth?","What is the longest river in the world?"],["What did the Romans call Scotland?","Who was made Lord Mayor of London In 1397, 1398, 1406 And 1419?", "Who was Henry VIIIs last wife?","Who was the youngest British Prime Minister?","In which year was Joan of Arc burned at the stake?","Which nationality was the polar explorer Roald Amundsen?","Who was the first female Prime Minister of Australia?","Which English explorer was executed in 1618, fifteen year after being found guilty of conspiracy against King James I of England and VI of Scotland?"," Which English city was once known as Duroliponte?","The first successful vaccine was introduced by Edward Jenner in 1796. Which disease did it guard against?"],["What are the five colours of the Olympic rings?","In football, which team has won the Champions League (formerly the European Cup) the most?","How many players are there in a rugby league team?","Which horse is the only three-time winner of the Grand National?","Since 1977, where has snooker's World Championship taken place?","In tennis, what piece of fruit is found at the top of the men's Wimbledon trophy?","Who won the FIFA Women's World Cup in 2019?","In bowling, what is the term given for three consecutive strikes?","How many world titles has Phil Talyor won in darts?","In golf, where does the Masters take place?"],["Who was the only British Prime Minister to be assassinated?","How long does Prime Minister’s Questions last?","How many Members of Parliament (MPs) are there?","What is the middle name of Angela Merkel?","America's Republican Party is commonly referred to as the GOP - what does the GOP stand for?","Who is Donald Trump's vice president?","In which year did Britain originally join the EEC, now known as the European Union?","How many of the six founding members of the European Union can you name? A point for each.","What is the name given to the group of people who make sure MPs attend important votes?","On what subject was the first referendum in Britain?"],["Which nuts are used in marzipan?","What is the most famous Mexican beer?","Which country is the origin of the cocktail Mojito?","What is Japanese sake made from?","Which vitamin is the only one that you will not find in an egg?","What is the chemical formula for Table Salt?","What does IPA stand for?","Which meat is used in Glamorgan sausages?","What ingredient is included in food in a Florentine style?","Which fish is the main ingredient of Scotch Woodcock?"],["What is the capital of Westeros in Game of Thrones?","Who presented TV quiz Blockbusters between 1983 and 1995?","In Netflix's Tiger King, what is the name of Carole Baskin's second husband who many believe she fed to the tigers?","In Emmerdale, on New Year's Day in 2004, who died when The Woolpack pub's chimney came crashing down in a storm?"," In what Netflix series does actress Gillian Anderson play a sex therapist?","Who played Queen Elizabeth II in the first two seasons of The Crown?","BBC Three series Normal People is based on a book but who is the author?","The six main stars of Friends appeared in all 236 episodes. Who is the next most regular character to appear in the show?","Who does the voiceover on Love Island?","In what year was the first episode of Coronation Street broadcasted on ITV?"],["One Direction is known for being the runners-up in The X Factor in 2010, but who came first?","Which singer has the most UK Number One singles ever?","What was Britney Spears’ first single called?","Who is the only singer to have ever performed more than one James Bond theme song?","Who were the three headliners of Glastonbury 2019?","Who is the only musician ever to have been awarded the Nobel prize for literature?","Which Beatles song was banned from the BBC for its lyrics?","Who was the first female artist to achieve a UK number one with a self-written song?","What is the real name of U2’s guitarist, known as The Edge?","What is David Bowie’s real name?"],["Which year was the Premier League founded?","Real Madrid won the first five European Cups - but which club was the second to win Europe's elite competition?","Who holds the record for most consecutive Premier League appearances (310)?","Which club won the 2017 UEFA Super Cup?","Who was manager of Manchester City when they won their first Premier League title?","Who has scored more career goals - Cristiano Ronaldo or Lionel Messi?","Which Dutch player was voted 'European Player of the Century' in 1999?","Who scored the first Premier League hat-trick?","Which English referee officiated the 2010 World Cup final?","Wayne Rooney scored his Premier League first goal against which team?"],["Which singer was known amongst other things as 'The King of Pop'?","What is Cher's last name?","What is the name of Kim Kardashian's eldest child?","Who was the winner of the first ever UK series of ‘I’m A Celebrity… Get Me Out Of Here!’?","Which English supermodel was born is Streatham in May 1970?","Which footballer has the most Instagram followers in the world - as of 2020?","Tom Cruise is an outspoken member of which religion?","Who is Dolly Parton married to?","American singer Stefani Joanne Angelina Germanotta is best known by which stagename?","Taylor Swift grew up on what type of farm?"]];
    if(brojPitanja<9){brojPitanja++;} else{brojRundi++; brojPitanja=0; novaRunda();}
    var novoPitanje=`<h4 class="text-responsive"> Round ${brojRundi+1} (${kategorija[brojRundi]}) / Question ${brojPitanja+1}:  `
    while(brojRundi<kategorija.length)
    {   
        
        while(brojPitanja<=9){
            console.log("vrednosti i,j redom: "+brojPitanja+" "+brojRundi);
            novoPitanje+=nizPitanja[brojRundi][brojPitanja]+"</h4>"
             return document.getElementById("questions").innerHTML=novoPitanje;
        }
        
        
    }
}
//Dinamicki ispisuje odgovore ucitavanjem iz dvodimenzionog niza
function kreiranjeOdgovora(){
    var pojedinacniOdgovori=0;
    var noviOdgovori=``;
    for(;moguciOdgovori<nizProvere.length;){
       for(;pojedinacniOdgovori<4;pojedinacniOdgovori++){
            noviOdgovori+=`<input type="button" class="text-responsive col-xl-4 col-sm-6 btn btn-primary  mx-2 my-4" onclick="proveraTacnosti(this.id)" id="${pojedinacniOdgovori}" value="${nizOdgovora[moguciOdgovori][pojedinacniOdgovori]}"/>`
       } 
       
        return document.getElementById("answers").innerHTML=noviOdgovori;
    }
}
//Preskace postojece pitanje i otvara naredno, racuna se kao da ste odgovorili tacno
function zameniPitanje(){
    if(!swap){
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
//Belezi broj kompletiranih rundi, i na osnovu toga izbacuje redom adekvatne toast-ove
function uspehTreker(){
    var trekerUspeha=document.getElementById("completedRounds");
     //beleska+=`<span class="${bedzevi[brojRundi-1]}">Congratulations! You've earned a master of ${kategorija[brojRundi-1]} badge!</span>`;
     beleska+=`<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header alert alert-${boja[brojRundi-1]}">
                         <i class="${bedzevi[brojRundi-1]}" aria-hidden="true"></i>
                        <strong class="mr-auto">${kategorija[brojRundi-1]}</strong>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                            Round ${brojRundi} complete: Congratulations! You've earned a master of ${kategorija[brojRundi-1]} badge!
                    </div>
                </div>
        `
        //Omogucava prikaz toast elemenata
        $(document).ready(function(){
            $('.toast').toast({delay: 5000});
            $('.toast').toast('show');
          });
     trekerUspeha.innerHTML=beleska; 
}
//Pokrece novu rundu, i sve sto se uz nju podrazumeva
function novaRunda(){
    if(!brojPitanja){
            if(brojRundi==kategorija.length){
                pobeda();
            }
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
//Progress bar funkcija koja se apdejtuje za svaki tacan odgovor
function progresBar(){
    var progressBar=document.getElementById("progress");
    progressBar.setAttribute("style",`width:${zbirTacnih}%`);
    progressBar.setAttribute("aria-valuenow",`${zbirTacnih}`);
}
//Funkcija za proveru tacnosti odgovora koriscenjem pomocnog niza u kome se skladiste tacni odgovori. 
function proveraTacnosti(clicked){
    console.log(clicked);
    console.log(typeof(clicked));
    for( moguciOdgovori;moguciOdgovori<nizProvere.length;moguciOdgovori++){
        if(parseInt(clicked)==nizProvere[moguciOdgovori]){
            console.log("usao u if");
            var tacanOdgovor=document.getElementById(clicked);
            tacanOdgovor.classList.add("btn-success");
            console.log("TACAN ODGOVOR");
            var zbir=(parseInt(nizProvere[moguciOdgovori]+1))*10;
            score+=zbir;
            console.log(score);
            zbirTacnih+=10;
            
            progresBar();
            let zeleniBar=document.getElementById("progress");
            zeleniBar.classList.add('bg-success');
            document.getElementById("answers").innerHTML=(`Difficulty modifier: X${nizProvere[moguciOdgovori]+1}    +`+zbir);
            return setTimeout(function(){  sledecePitanje(); }, 500);
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
// Funkcija random broj (kljucna za funkcionalnost naredne funkcije)
function randomBroj(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
//Nasumicno odstranjuje dva ponudjena odgovora tako da ostane jedan tacan i jedan sigurno netacan
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
    polapola++;
}
//Niz izmena na stranici koji prikazuje Game Over ekran
function gameOver(){
    footer();
    var noviProzor=`<div class="gameOver bg-dark">
    <div class='col-md-12'>
                <header><a href="index.html"><img class="rounded mx-auto d-block" src="assets/img/logo.png" alt="logo"></a></header>
                <div class="jumbotron ">
  <div class="container">
    <h1>Unfortunately, you lost!</h1>
    <p class="lead">Oh well, better luck next time... Your score was: ${score} </p>
    </div>
</div>
	</div>
    <div class='drzacDugmica col-sm-12'><input id="pocniPonovo" class="dugmici btn  btn-success m-2 " type="button" value="Try again" onclick="newGame();"> <input id="rangListaUpis" class="dugmici btn btn-warning btn-outline-primary m-2 " type="button" value="Apply for High Score" onclick="highScore();"></div>
    </div>
    <div id="ispisHS" class="row"></div>
    `
    document.getElementById("container").innerHTML=noviProzor;
}
//Ponovo pokrece kviz, to jest stranicu
function newGame(){
    window.location.reload();
}
//Dinamicki ispisuje footer
function footer(){
    var footer=document.getElementById("footer");
var ispisFooter=`<ul class="nav">`;
var nizIkona=["fa fa-linkedin","fa fa-github","fa fa-sitemap","fa fa-book"];
var nizLinkova=["https://www.linkedin.com/in/bogdan-jankovi%C4%87-53175b115/","https://github.com/bogdanjankovic","sitemap.xml","QuizWizz.pdf"]
var i=0;
while (i<nizIkona.length){
    ispisFooter+=
    `
        <li class="nav-item">
        <a class="nav-link active" target="_blank" href="${nizLinkova[i]}"><i class="${nizIkona[i]}" aria-hidden="true"></i></a>
        </li>`
        i++;
    
    }
    ispisFooter+=`</ul><p>Bogdan Jankovic 83/19</p>`
    footer.innerHTML=ispisFooter;
}
//Otvara mini-formu za unos nadimka, koji se kasnije unosi u tabelu
function highScore(){
    let ispis=``;
      ispis+=`<form onsubmit="leaderBoard()">
      <div class="form-group">
        <label for="">Your Nickname: </label>
        <input type="text" class="form-control" onBlur='regEx(this.value,this.id)' id="Nickname"><p></p>
        <input type="submit"  onClick="zapis=document.querySelector('#Nickname');" class="form-control btn btn-primary" id="submit">
      </div>
  </form>`
      var ispisKrajnji=document.getElementById("ispisHS");
      ispisKrajnji.innerHTML=ispis;
}
// Funkcija za proveru korektnosti regularnih izraza
function regEx(vrednost,id){
    var getEl=id;
    console.log(getEl);
    let polje=document.getElementById(getEl);
        if(id=="Email"){
            let regex=regExEmail;
            console.log("usao u EMAIL");
            if(regex.test(vrednost)){
               polje.nextElementSibling.innerHTML='';
               document.getElementById('submit').disabled = false; 
                polje.classList.remove("alert","alert-danger")
               polje.classList.add("alert","alert-success")
            }
            else{
               polje.nextElementSibling.innerHTML="<span class='text text-warning'>Email format is: text@mail.domain!</span>";
               var disableSelection =document.getElementById("submit")
               disableSelection.setAttribute("disabled","true");
               polje.classList.add("alert","alert-danger")
            }
        }
        else if(id=="FirstName"){
           let regex=regExFirstName;
           console.log("usao u FIRSTNAME");
           if(regex.test(vrednost)){
               polje.nextElementSibling.innerHTML='';
              document.getElementById('submit').disabled = false; 
               polje.classList.remove("alert","alert-danger")
              polje.classList.add("alert","alert-success")
           }
           else{
              polje.nextElementSibling.innerHTML="<span class='text text-warning'>Unless you're an alien, write characters only.</span>";
              var disableSelection =document.getElementById("submit")
              disableSelection.setAttribute("disabled","true");
              polje.classList.add("alert","alert-danger")
           }
       }
       else if(id=="LastName"){
           let regex=regExLastName;
           console.log("usao u LASTNAME");
           if(regex.test(vrednost)){
               polje.nextElementSibling.innerHTML='';
              document.getElementById('submit').disabled = false; 
               polje.classList.remove("alert","alert-danger")
              polje.classList.add("alert","alert-success")
           }
           else{
              polje.nextElementSibling.innerHTML="<span class='text text-warning'>Unless you're an alien, write characters only.</span>";
              var disableSelection =document.getElementById("submit")
              disableSelection.setAttribute("disabled","true");
              polje.classList.add("alert","alert-danger")
           }
       }
       else if(id=="Nickname"){
           console.log("usao u NICKNAME");
           let regex=regExNickname;
           if(regex.test(vrednost)){
               polje.nextElementSibling.innerHTML='';
              document.getElementById('submit').disabled = false; 
               polje.classList.remove("alert","alert-danger")
              polje.classList.add("alert","alert-success")
           }
           else{
              polje.nextElementSibling.innerHTML="<span class='text text-warning'>Write atleast 3 characters, no digits allowed!</span>";
              var disableSelection =document.getElementById("submit")
              disableSelection.setAttribute("disabled","true");
              polje.classList.add("alert","alert-danger")
           }
       }
       else if(id=="Money"){
           console.log("usao u Money");
           let regex=regExMoney;
           if(regex.test(vrednost)){
               polje.nextElementSibling.innerHTML='';
              document.getElementById('submit').disabled = false; 
               polje.classList.remove("alert","alert-danger")
              polje.classList.add("alert","alert-success")
           }
           else{
              polje.nextElementSibling.innerHTML="<span class='text text-warning'>Please insert a value of atleast 100 $</span>";
              var disableSelection =document.getElementById("submit")
              disableSelection.setAttribute("disabled","true");
              polje.classList.add("alert","alert-danger")
           }
       }
       
    }
    //Otvara rang listu i upisuje ime korisnika u tabelu u zavisnosti od broja bodova
    function leaderBoard(){
        console.log(zapis.value);
        imeKorisnika=zapis.value;
        var ispisNovi=document.getElementById("container");
      var nizImena=["Bogdan","Dragana","Jelena","Goran","Tara","Stefan","Mila"];
      var nizPoena=["450","220","210","150","140","110","90"];
      var x=0;
      var brojac=0;
      var z=nizImena.length;
        for( ;x<nizImena.length;x++){
              if(score<parseInt(nizPoena[x])){
                  console.log(x);
                  console.log(score);
                  continue;
              }
              else{
                  nizImena.splice(x,0,imeKorisnika);
                  nizPoena.splice(x,0,score);
                  brojac++;
                  break;
              }
              
            }
          if(!brojac){
              nizImena.push(imeKorisnika);
              nizPoena.push(score);
          }
          var leaderBoard=`<div class="gameOver bg-dark">
          <div class='col-md-12'>
                      <header id="highScoreLogo"><a href="index.html"><img class="rounded mx-auto d-block" src="assets/img/logo.png" alt="logo"></a></header>
        </div>
          </div>
          <table class="table col-md-6 bg-primary"><tbody>
          `;
          for( var y=0;y<nizImena.length;y++){
              
           leaderBoard+=`
           
           <tr><td>${y+1}</td><td>${nizImena[y]}</td><td>${nizPoena[y]}</td></tr>
           `
          }
          leaderBoard+=`</tbody></table>
          <div id="gameOverDugmad" class=' col-sm-12'><input id="pocniPonovo" class=" btn  btn-success m-2 " type="button" value="New Game" onclick="newGame();"> <input id="rangListaUpis" class="btn btn-warning btn-outline-primary m-2 " type="button" value="Go Back" onclick='pobeda();';"></div>
          </div>`
          ispisNovi.innerHTML=leaderBoard;
          //primena jQuery-a za bojenje parnih i neparnih elemenata redova tabela
          $(document).ready(function(){
            $("tr:odd").css("background-color", "indigo");
          });
          $(document).ready(function(){
          $("tr:even").css("background-color", "primary");
          });
      }
//Aktivira sve popovere na stranici
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'bottom',
        trigger : 'hover'
    });
});
//Niz izmena na stranici koji prikazuje Win ekran
function pobeda(){
    footer();
    let noviProzor=`<div class="youWin bg-dark">
    <div class='col-md-12 bg-'>
                <header><a href="index.html"><img class="rounded mx-auto d-block" src="assets/img/logo.png" alt="logo"></a></header>
                <div class="jumbotron alert alert-secondary ">
  <div class="container alert alert-secondary">
    <h1>The game is over!</h1>
    <p class="lead"> Your score was: ${score} </br>
    Stay put! There will be more updates in the future, with additional features. You obviously liked this quiz if you wound up on this  screen! If you'd like to help the author cover his basic expenses and fund his future projects, you can leave a donation below. Many thanks! </p>
    </div>
</div>
	</div>
    <div class='drzacDugmica col-sm-12'><input id="pocniPonovo" class="dugmici btn  btn-success m-2 " type="button" value="Check Leaderboard" onclick="highScore();"> <input id="pocniPonovo" class="dugmici btn  btn-warning m-2 " type="button" value="Leave a Donation" onclick="forma();"></div>
    </div>
    <div id="ispisHS"></div>
    `
    document.getElementById("container").innerHTML=noviProzor;
}
//Ispisuje elemente forme za donaciju
function forma(){
    var formular=`
    <header><div><a href="index.html"><img class="rounded mx-auto d-block" src="assets/img/logo.png" alt="logo"></a></div></header>
    <form onsubmit="setTimeout(function(){  receipt();}, 2000);return false;">
    <div class="my-4">
    <h1>Make a donation via Paypal</h1>
    <form>
    <div class="row my-4">
      <div class="col">
        <input type="text" class="form-control" onBlur="regEx(this.value,this.id);" placeholder="First name" id="FirstName" required><p></p>
      </div>
      <div class="col">
        <input type="text" class="form-control" onBlur="regEx(this.value,this.id);" placeholder="Last name" id="LastName" required><p></p>
      </div>
    </div>
    <div class="row my-4">
        <div class="col-sm-6">
          <input type="email" class="form-control" onBlur="regEx(this.value,this.id);" placeholder="firstname@mail.com" id="Email" required><p></p>
        </div>
    </div>
        <div class="row my-4">
            <div class="col-sm-5">
              <input type="number" class="form-control" onBlur="regEx(this.value,this.id);" placeholder="Choose amount in $" id="Money" required><p></p>
            </div>
            <div class="col-sm-6">
                <input class="btn btn-success"type="submit"  value="Donate" id="submit"><p></p>
            </div>
        </div>
        <div class="row my-4">
            <div class="p-4">
              <textarea class="w-80" placeholder="Say something to the author" id="Text" cols="25" rows="10"></textarea>
            </div>
        </div>

  </form>
</div>`
var ispisForme=document.getElementById("container");
    ispisForme.innerHTML=formular;
}
//Vraca tekstualni podatak nakon izvrsenja forme, i kreira dugme za dalju navigaciju po stranici
function receipt(){
    var rezultatForme=document.getElementById("submit");
    rezultatForme.nextElementSibling.innerHTML="A receipt has been sent to your Paypal account, please confirm it. Thank you!</br> <input type='button'class='btn btn-success' value='Go Back' onClick='newGame();'/>";
    
}
