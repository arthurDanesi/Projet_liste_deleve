"use strict"
let eleve={
    HE001:{nom:"a", prenom:"b", ang:5, progra:10.5, initiPc:2, reseau:5, math:5, elec:5},
    HE002:{nom:"c", prenom:"d", ang:15, progra:11, initiPc:20, reseau:5, math:5, elec:5},
    HE003:{nom:"e", prenom:"f", ang:1, progra:13, initiPc:12, reseau:15.75, math:5, elec:5},
    HE004:{nom:"g", prenom:"h", ang:14, progra:17, initiPc:2, reseau:15.5, math:5, elec:5},
    HE005:{nom:"j", prenom:"k", ang:18, progra:9.5, initiPc:2.5, reseau:5.25, math:5, elec:5},
    HE006:{nom:"l", prenom:"m", ang:15.5, progra:6, initiPc:12.75, reseau:15, math:5, elec:5},
};


function ajouterEleve (){
  let nouv = document.getElementById("matricule").value;
  eleve.nouv={};
  eleve.nouv.nom = document.getElementById("nom").value;
  eleve.nouv.prenom = document.getElementById("prenom").value;
  eleve.nouv.ang = Number(document.getElementById("ang").value);
  eleve.nouv.progra = Number(document.getElementById("progra").value);
  eleve.nouv.initPc = Number(document.getElementById("initiPc").value);
  eleve.nouv.reseau = Number(document.getElementById("reseau").value);
  eleve.nouv.math = Number(document.getElementById("math").value);
  eleve.nouv.elec = Number(document.getElementById("elec").value);
  listeEleve();
  return false;
}
function listeEleve() {
  let cree = "";
  let moyenne;
  let cle = Object.keys(eleve);
  for (let i in cle) {
    for (let i in eleve)
    moyenne = 0;
    moyenne = ((eleve[i].ang + eleve[i].progra + eleve[i].initiPc + eleve[i].reseau + eleve[i].math + eleve[i].elec) / 6).toFixed(2);

      cree += "<tr><td>" + eleve.keys.i + "</td><td>" + eleve[i].nom + "</td><td>" + eleve[i].prenom + "</td><td>" + eleve[i].ang + "</td><td>" + eleve[i].progra + "</td><td>" + eleve[i].initiPc + "</td><td>" + eleve[i].reseau + "</td><td>" + eleve[i].math + "</td><td>" + eleve[i].elec + "</td><td>" + moyenne + "</td></tr>";
    }
  }
    document.getElementById("creeTableau").innerHTML = cree;
}
function trie(){
  if(document.getElementById("trie").value==="moyenne"){
    console.log("a");
  }
  else if(document.getElementById("trie").value==="anglais"){
    console.log("b");
  }
  else if(document.getElementById("trie").value==="progra"){
    console.log("c");
  }
  else if(document.getElementById("trie").value==="initPc"){
    console.log("d");
  }
  else if(document.getElementById("trie").value==="reseau"){
    console.log("e");
  }
  else if(document.getElementById("trie").value==="math"){
    console.log("f");
  }
  else if(document.getElementById("trie").value==="elec"){
    console.log("g");
  }
}
