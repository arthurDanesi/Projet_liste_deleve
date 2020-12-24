"use strict"
let eleve={
    HE001:{nom:"Ahbsh", prenom:"Bastien", ang:5, progra:10.5, initPc:2, reseau:16, math:16, elec:10},
    HE002:{nom:"Csgv", prenom:"Denis", ang:10.5, progra:11, initPc:20, reseau:13, math:17, elec:15},
    HE003:{nom:"Eskl", prenom:"Florian", ang:1, progra:13, initPc:14, reseau:8.5, math:14.5, elec:6.5},
    HE004:{nom:"Gsgfeim", prenom:"Hugo", ang:14, progra:17, initPc:4, reseau:10.5, math:20, elec:3},
    HE005:{nom:"Ksjbg", prenom:"Leon", ang:18, progra:9.5, initPc:7.5, reseau:18.5, math:10.5, elec:19},
    HE006:{nom:"Mhqebvf", prenom:"Natalie", ang:15.5, progra:6, initPc:12.5, reseau:10.5, math:9, elec:20},
};

/**
 * Ajoute les données du formulaire dans l'objet élève avec comme cle la valeur de la variable nouv si elles sont correct
 * Sinon renvoie d'un message d'erreur
 *
 * @returns {boolean} pour que les données ne partent pas vers un serveur
 */
function ajouterEleve () {
  let nouv = document.getElementById("matricule").value;
  if(!(nouv in eleve)){
    eleve[nouv]={};
    eleve[nouv].nom = document.getElementById("nom").value;
    eleve[nouv].prenom = document.getElementById("prenom").value;
    eleve[nouv].ang = Number(document.getElementById("ang").value);
    eleve[nouv].progra = Number(document.getElementById("progra").value);
    eleve[nouv].initPc = Number(document.getElementById("initPc").value);
    eleve[nouv].reseau = Number(document.getElementById("reseau").value);
    eleve[nouv].math = Number(document.getElementById("math").value);
    eleve[nouv].elec = Number(document.getElementById("elec").value);
    listeEleve();
    return false;
  }
  else{
    alert("Le matricule est mauvais, veuiller recommencer!");
    return false;
  }
}

/**
 * creation de la moyenne de l'élève
 * création du tableau modifier dynamiquement
 *
 */
function listeEleve() {
  let cree = "";
  let moyenne;
  for (let i in eleve) {
    eleve[i].moyenne = Number(((eleve[i].ang + eleve[i].progra + eleve[i].initPc + eleve[i].reseau + eleve[i].math + eleve[i].elec) / 6).toFixed(2));
    cree += "<tr><td>" + i + "</td><td>" + eleve[i].nom + "</td><td>" + eleve[i].prenom + "</td><td>" + eleve[i].ang + "</td><td>" + eleve[i].progra + "</td><td>" + eleve[i].initPc + "</td><td>" + eleve[i].reseau + "</td><td>" + eleve[i].math + "</td><td>" + eleve[i].elec + "</td><td>" + eleve[i].moyenne + "</td></tr>";
  }
    document.getElementById("creeTableau").innerHTML = cree;
}

/**
 * Selon le choix de la personne dans le select "classement", la fonction fera un trie en fonction de son choix  
 * 
 * @returns {number} pour le nouveau classement en fonction du trie
 */
function trie(){
  if(document.getElementById("trie").value==="moyenne"){
    //console.log("a");
    let moyen = "";
    let mot = "";

    moyen = Object.keys(eleve).sort(function  (x,y){
      if (eleve[x].moyenne < eleve[y].moyenne ) return 1;
      if (eleve[x].moyenne > eleve[y].moyenne ) return -1;
    
      if (eleve[x].nom < eleve[y].nom ) return 1 ;
      if (eleve[x].nom > eleve[y].nom ) return -1;
      return 0;
    })

    for(let i in moyen){
      mot += "<li>"+moyen[i]+" "+eleve[moyen[i]].nom+" "+eleve[moyen[i]].prenom+" "+eleve[moyen[i]].moyenne+"</li>";
    }

    document.getElementById("trier").innerHTML = mot;
  }
  else if(document.getElementById("trie").value==="anglais"){
    let angl = "";
    let mot = "";

    angl = Object.keys(eleve).sort(function (x,y){
      if (eleve[x].ang < eleve[y].ang ) return 1;
      if (eleve[x].ang > eleve[y].ang ) return -1;
    
      if (eleve[x].moyenne < eleve[y].moyenne ) return 1;
      if (eleve[x].moyenne > eleve[y].moyenne ) return -1;
    
      if (eleve[x].nom < eleve[y].nom ) return 1;
      if (eleve[x].nom > eleve[y].nom ) return -1;
      return 0;
    })

    for(let i in angl){
      mot += "<li>"+angl[i]+" "+eleve[angl[i]].nom+" "+eleve[angl[i]].prenom+" "+eleve[angl[i]].ang+"</li>";
    }

    document.getElementById("trier").innerHTML=mot;
  }
  else if(document.getElementById("trie").value==="progra"){
    let prog = "";
    let mot = "";

    prog = Object.keys(eleve).sort(function (x,y){
      if (eleve[x].progra < eleve[y].progra ) return 1;
      if (eleve[x].progra > eleve[y].progra ) return -1;
    
      if (eleve[x].moyenne < eleve[y].moyenne ) return 1;
      if (eleve[x].moyenne > eleve[y].moyenne ) return -1;
    
      if (eleve[x].nom < eleve[y].nom ) return 1;
      if (eleve[x].nom > eleve[y].nom ) return -1;
      return 0;
      })

    for(let i in prog){
      mot += "<li>"+prog[i]+" "+eleve[prog[i]].nom+" "+eleve[prog[i]].prenom+" "+eleve[prog[i]].progra+"</li>";
    }

    document.getElementById("trier").innerHTML=mot;
  }
  else if(document.getElementById("trie").value==="initPc"){
    let iniPc = "";
    let mot = "";

    iniPc = Object.keys(eleve).sort(function (x,y){
      if (eleve[x].initPc < eleve[y].initPc ) return 1;
      if (eleve[x].initPc > eleve[y].initPc ) return -1;
    
      if (eleve[x].moyenne < eleve[y].moyenne ) return 1;
      if (eleve[x].moyenne > eleve[y].moyenne ) return -1;
    
      if (eleve[x].nom < eleve[y].nom ) return 1;
      if (eleve[x].nom > eleve[y].nom ) return -1;
      return 0;
    })

    for(let i in iniPc){
      mot += "<li>"+iniPc[i]+" "+eleve[iniPc[i]].nom+" "+eleve[iniPc[i]].prenom+" "+eleve[iniPc[i]].initPc+"</li>";
    }

    document.getElementById("trier").innerHTML=mot;
  }
  else if(document.getElementById("trie").value==="reseau"){
    let res = "";
    let mot = "";

    res = Object.keys(eleve).sort(function (x,y){
      if (eleve[x].reseau < eleve[y].reseau ) return 1;
      if (eleve[x].reseau > eleve[y].reseau ) return -1;
    
      if (eleve[x].moyenne < eleve[y].moyenne ) return 1;
      if (eleve[x].moyenne > eleve[y].moyenne ) return -1;
    
      if (eleve[x].nom < eleve[y].nom ) return 1;
      if (eleve[x].nom > eleve[y].nom ) return -1;
      return 0;
    })

    for(let i in res){
      mot += "<li>"+res[i]+" "+eleve[res[i]].nom+" "+eleve[res[i]].prenom+" "+eleve[res[i]].reseau+"</li>";
    }

    document.getElementById("trier").innerHTML = mot;
  }
  else if(document.getElementById("trie").value==="math"){
    let ma = "";
    let mot = "";

    ma = Object.keys(eleve).sort(function (x,y){
      if (eleve[x].math < eleve[y].math ) return 1;
      if (eleve[x].math > eleve[y].math ) return -1;
    
      if (eleve[x].moyenne < eleve[y].moyenne ) return 1;
      if (eleve[x].moyenne > eleve[y].moyenne ) return -1;
    
      if (eleve[x].nom < eleve[y].nom ) return 1;
      if (eleve[x].nom > eleve[y].nom ) return -1;
      return 0;
    })

    for(let i in ma){
      mot += "<li>"+ma[i]+" "+eleve[ma[i]].nom+" "+eleve[ma[i]].prenom+" "+eleve[ma[i]].math+"</li>";
    }

    document.getElementById("trier").innerHTML = mot;
  }
  else if(document.getElementById("trie").value==="elec"){
    let ele = "";
    let mot = "";

    ele = Object.keys(eleve).sort(function (x,y){
      if (eleve[x].elec < eleve[y].elec ) return 1;
      if (eleve[x].elec > eleve[y].elec ) return -1;
    
      if (eleve[x].moyenne < eleve[y].moyenne ) return 1;
      if (eleve[x].moyenne > eleve[y].moyenne ) return -1;
    
      if (eleve[x].nom < eleve[y].nom ) return 1;
      if (eleve[x].nom > eleve[y].nom ) return -1;
      return 0;
    })

    for(let i in ele){
      mot += "<li>"+ele[i]+" "+eleve[ele[i]].nom+" "+eleve[ele[i]].prenom+" "+eleve[ele[i]].elec+"</li>";
    }

    document.getElementById("trier").innerHTML=mot;
  }
}