function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb = document.getElementById("aq");
    let weAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButton);
}

function generateCV(){
   // console.log("generating cv");
   let nameField = document.getElementById("nameField").value;
   let nameT1 = document .getElementById('nameT1');
   nameT1.innerHTML = nameField;

   //direct
   document.getElementById('nameT2').innerHTML = nameField;
   //contact
   document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
   //ADDRESS
   document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
   //links
   document.getElementById("liT").innerHTML = document.getElementById("linkedField").value;
   document.getElementById("ghT").innerHTML = document.getElementById("githubField").value;
   document.getElementById("twT").innerHTML = document.getElementById("twitterField").value;
   //objective
   document.getElementById("ObT").innerHTML = document.getElementById("obField").value;

   //work experience

   let wes=document.getElementsByClassName("weField");
    
   let str='';

   for(let e of wes) {
    str = str + `<li> ${e.value} </li>`;
   }
   document.getElementById("weT").innerHTML = str;

   //acadamic qualification
   let aqs=document.getElementsByClassName("eqField");
   let str1='';
   
   for(let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
   }
   document.getElementById("aqT").innerHTML = str1;

   //setting image
   let file=document.getElementById('imgField').files[0];
   console.log(file);

   let reader=new FileReader();

   reader.readAsDataURL(file);
   console.log(reader.result);
   reader.onloadend = function(){
    document.getElementById('imgTemplte').src = reader.result;
   }

   document.getElementById('cv-form').style.display='none';
   document .getElementById('cv-template').style.display='block';
}

//print cv
 function printCV(){
    const element = document.getElementById('cv-template');
    html2pdf().from(element).save();
 }

