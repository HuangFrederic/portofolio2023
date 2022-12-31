function total()
{
// Obtenir les éléments de chaque ligne du tableau
const q1 = document.getElementById("q1");
const pu1 = document.getElementById("pu1");
const t1 = document.getElementById("t1");
const q2 = document.getElementById("q2");
const pu2 = document.getElementById("pu2");
const t2 = document.getElementById("t2");
const q3 = document.getElementById("q3");
const pu3 = document.getElementById("pu3");
const t3 = document.getElementById("t3");
const q4 = document.getElementById("q4");
const pu4 = document.getElementById("pu4");
const t4 = document.getElementById("t4");
const q5 = document.getElementById("q5");
const pu5 = document.getElementById("pu5");
const t5 = document.getElementById("t5");

// Obtenir l'élément pour faire tout les calcules
const soustotal = document.getElementById("st");
const remiseInput = document.querySelector("#r input");
const soustotalremise = document.getElementById("str");
const tauximpositionInput = document.querySelector("#ti input");
const taxetotal = document.querySelector("#tt");
const expeditionInput = document.querySelector("#em input");
const solde = document.getElementById("s");


// Fonction pour mettre à jour le total de chaque ligne de produit et le total général
function updateTotal() 
{
  // Calculer le total de chaque ligne de produit
  t1.innerText = q1.innerText * pu1.innerText;
  t2.innerText = q2.innerText * pu2.innerText;
  t3.innerText = q3.innerText * pu3.innerText;
  t4.innerText = q4.innerText * pu4.innerText;
  t5.innerText = q5.innerText * pu5.innerText;

  // Calculer tout les totales
  soustotal.innerText = Number(t1.innerText) + Number(t2.innerText) + Number(t3.innerText) + Number(t4.innerText) + Number(t5.innerText);
  soustotalremise.innerText = soustotal.innerText - Number(remiseInput.value);
  taxetotal.innerText = soustotal.innerText * Number(tauximpositionInput.value) / 100;
  solde.innerText = Number(soustotalremise.innerText) + Number(taxetotal.innerText) + Number(expeditionInput.value);
}

// Mettre à jour le tout lorsqu'on modifie un champ
q1.addEventListener("input", updateTotal);
pu1.addEventListener("input", updateTotal);
q2.addEventListener("input", updateTotal);
pu2.addEventListener("input", updateTotal);
q3.addEventListener("input", updateTotal);
pu3.addEventListener("input", updateTotal);
q4.addEventListener("input", updateTotal);
pu4.addEventListener("input", updateTotal);
q5.addEventListener("input", updateTotal);
pu5.addEventListener("input", updateTotal);
remiseInput.addEventListener("input", updateTotal);
tauximpositionInput.addEventListener("input", updateTotal);
expeditionInput.addEventListener("input", updateTotal);

// Mettre à jour le tout au chargement de la page
updateTotal();

}



