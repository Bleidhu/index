// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}
var colorek = "#0f0";
var jastrzebie = ["ARŁ", "ALW", "OLM", "M", "ADG", "MAJ"];
var puchacze = ["PIK", "JĘS", "FRK", "KRD", "LEB"];
var wiewiorki = ["JEW", "NIS", "MIC", "FRG", "ADK", "MIJ"];
let licznik = 5;
function authorize()
{
  let inicjaly = prompt("wprowadź dwie pierwsze litery swojego imienia oraz pierwszą literę nazwiska. (Jan Kowalski => JAK)").toUpperCase();
  inicjaly = inicjaly.replace(/\s/g, '') 
  if(jastrzebie.includes(inicjaly) || puchacze.includes(inicjaly) || wiewiorki.includes(inicjaly))
  {
    document.getElementById('btn').style.color = "blue";
    document.getElementById('edit').innerHTML = "Odblokowano";
    colorek = '#0000FF'
    if(jastrzebie.includes(inicjaly))
    {
      alert("Idź na północ od twojej lokalizacji. Tam stosując się do przepisów dotrzesz do kilku drzew, jedno z nich jest mocno związane z naszą organizacją. Jeżeli nie jesteś pewny przypomnij sobie maila.");
    } else if(puchacze.includes(inicjaly))
    {
      alert("W zasięgu twojego wzroku znajduje się agent, który Cię obserwuje, znajdź go a on poda Ci kolejne wskazówki.");
    } else if(wiewiorki.includes(inicjaly))
    {
      alert("Na południe od twojej lokalizacji znajduje się budynek, za którym musisz skręcić w alejkę po lewej stronie tam czeka na Ciebie agent. Pamiętaj, że jest niebezpiecznie i nie możesz zostać zdemaskowany. Dosiądź się do niego, a on da Ci kolejne wskazówki.");
    }
  } else 
  {
    if(licznik==0)
    {
      alert("przekroczono limit prób skontaktuj się z") ;
      document.getElementById('edit').innerHTML = "Przekroczono limit prób skontaktuj się z przełożonym.";
    }else
    {
    licznik--;
    alert("nieprawidłowe inicjały")
    document.getElementById('edit').innerHTML = "Naruszenie bezpieczeństwa. Pozostało: " + licznik + " prób";
    }
    document.getElementById('btn').style.color = "red";
    colorek = '#ff0000'
  }
}
// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = colorek;
    //ctx.fillStyle = '#ff0000';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);
