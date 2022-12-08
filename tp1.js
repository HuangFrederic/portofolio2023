function calcul_moyenne()
{
    var note1=prompt("Donner une premiere note");
    var note2=prompt("Donner une deuxieme note");
    var note3=prompt("Donner une troisieme note");
    var note4=prompt("Donner une quatrieme note");

    
    
    var somme = Number(note1*2) + Number(note2*2) + Number(note3*2) +Number(note4*3) ;

    var moyenne= somme / 3;

    document.write("Voici la somme:" +somme +"                      "); 

    document.write("Voici la moyenne:" +moyenne +"                      ");

    if (moyenne<10)
        document.write("Vous etes redoublant");
        else
        document.write("Vous etes admis");
}

function age_test()
{

    var note1=prompt("Donner votre age");

    var age = note1

    document.write("Votre age:" +age +".                      "); 

    if (age<18)
        document.write("Vous etes mineur");
        else
        document.write("Vous etes majeur");
}

function simple_affichage()
{
    var nom=prompt("Votre nom");
    var prenom=prompt("Votre prenom");

    document.write("<div style='background-color:grey; border:2px solid blue; border-radius:26px; text-align:center; margin:auto; height:30px;'>");
    document.write("<p1 style='color:violet';> Bonjour "+prenom+"  "+ nom+ "</p1>");
    document.write("</div>")
}

function test_color()
{
    var couleur= prompt("donner une couleur");
        if (couleur== "rouge" || couleur=='ROUGE' || couleur=='R')
            document.body.style.background="red";
        else if (couleur == 'bleu' || couleur=='BLEU' || couleur=='B')
            document.body.style.background="blue";
        else if (couleur == 'vert' || couleur=='VERT' || couleur=='V')
            document.body.style.background="green";
        else if (couleur == 'jaune' || couleur=='JAUNE' || couleur=='J')
            document.body.style.background="yellow";    
        else
        alert("couleur inconnu")
}











function somme()
{
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;

    var s=Number(a) + Number(b);

    t3.value=s;
}

function soustraction()
{
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;

    var s=Number(a) - Number(b);

    t3.value=s;
}

function multiplication()
{
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;

    var s=Number(a) * Number(b);

    t3.value=s;
}

function division()
{
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;

    var s=Number(a) / Number(b);

    t3.value=s;
}

function parite()
{
    var d = Number(document.getElementById("t3").value);
   
    if (d%2==0)
        {
        alert("Pair");
        t3.value = "Pair"
        }
    else
        {
        alert("Impair")
        t3.value = "Impair"
        }   
}

function swap()
{
    var v3= "";
    a= document.getElementById("t1").value;
    b= document.getElementById("t2").value;
    v3=a;
    a=b;
    b=v3;

    t1.value=a;
    t2.value=b;
}












function affichetab()
{
    document.write('<table border=8px width=40%');
    for(let i=0 ; i <= 12; i++)
    {document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');}
    document.write('</table>');
}

function tab2()
{
    var t1=prompt('Nombre de ligne')

    document.write('<table border=3px width=40%');
    for(let i=1 ; i <= t1; i++)
    {document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>");}
    document.write('</table>');
}

function connecter()
{
    var c1=prompt('Nom utilisateur');
    var c2=prompt('Mot de passe');



    if (c1=='Admin' && c2=='Admin')
    document.write('Bienvenue:' +login);
    else
    alert('Acces refuse');

}

function connecter2()
{
  
    var i = 0;
    
    do 
    {
    var c1=prompt("Nom utilisateur");
    var c2=prompt("Mot de passe");

    if (c1=="admin" && c2=="admin")
    {
        document.write("Bienvenue" +c1);
        break;
    }
    else
    alert('Acces refuse');
    i+=1;
    }
    while 
    (i<3);
    if (i==3);
    alert("Delai depasse");
    
}

function chaine()
{
    var chaine=prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient      " + chaine.length+ "   caracteres  " + "<br>");
    document.write("La premiere lettre est " + chaine.substr(0,1)+ "<br>" );
}

function color()
{
    var couleur= prompt("donner une couleur");
    switch(couleur)
    {
        case"rouge" : document.body.style.background = "red";
        break;
        case"ROUGE" : document.body.style.background = "red";
        break;
        case"bleu" : document.body.style.background = "blue";
        break;
        case"BLEU" : document.body.style.background = "blue";
        break;
        case"vert" : document.body.style.background = "green";
        break;
        case"jaune" : document.body.style.background = "yellow";
        break;

        default:alert("couleur inconnu");
    }

}

function bonus()
{

var totalf=0

do 
{

var article=prompt("Votre article");
var prix=prompt("Le prix");
var quantite=prompt(" La quantite");
var total= Number(prix) * Number(quantite);
alert("Vos articles couteront:" +" " +total +"" +"$")
totalf += total
alert("Le tout coutera:" +" " +totalf +"" +"$")
var suite=prompt("Continuer?" +"O/N");



document.write("Article:" +article +"       "+"<br>")
document.write("Prix:" +prix +"        "+"<br>") 
document.write("Quantite:" +quantite +"       "+"<br>") 
document.write("Total:" +total +"          "+"<br>"+"<br>" )

document.write("Total final:" +totalf +"         ")
}

while
(suite=="O")



}