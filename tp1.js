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

