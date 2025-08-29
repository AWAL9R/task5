
const LANG_EN={
title:"Emergency Service Directory",
subtitle:"Government Emergency Services at Your Fingertip – A Project by  Government of the People’s Republic of Bangladesh",
cards:[
        {  "icon": "emergency.png" ,
        "title": "National Emergency Number" ,
        "subtitle": "National Emergency",
        "number": "999",
        "type": "All", },
        {  "icon": "police.png" ,
        "title": "Police Helpline Number" ,
        "subtitle": "Police",
        "number": "999",
        "type": "Police", },
        {  "icon": "fire-service.png" ,
        "title": "Fire Service Number" ,
        "subtitle": "Fire Service",
        "number": "999",
        "type": "Fire", },
        {  "icon": "ambulance.png" ,
        "title": "Ambulance Service" ,
        "subtitle": "Ambulance",
        "number": "1994-999999",
        "type": "Health", },
        {  "icon": "emergency.png" ,
        "title": "Women & Child Helpline" ,
        "subtitle": "Women & Child Helpline",
        "number": "109",
        "type": "Help", },
        {  "icon": "emergency.png" ,
        "title": "Anti-Corruption Helpline" ,
        "subtitle": "Anti-Corruption",
        "number": "106",
        "type": "Govt.", },
        {  "icon": "emergency.png" ,
        "title": "Electricity Helpline",
        "subtitle": "Electricity Outage",
        "number": "16216",
        "type": "Electricity", },
        {  "icon": "emergency.png" ,
        "title": "Brac Helpline" ,
        "subtitle": "Brac",
        "number": "16445",
        "type": "NGO", },
        {  "icon": "emergency.png" ,
        "title": "Bangladesh Railway Helpline" ,
        "subtitle": "Bangladesh Railway",
        "number": "163",
        "type": "Travel", },
    ]
};

const LANG=LANG_EN;

let balance=100;
let favorites=[];
let copy=0;

function setText2Id(id, text){
    document.getElementById(id).innerText=text;
}

setText2Id("title", LANG.title);
setText2Id("subtitle", LANG.subtitle);

function updateDashbaord(){
setText2Id("heart_count", favorites.length);
setText2Id("coin_count", balance);
setText2Id("copy_count", copy);
}


function addHistory(id){
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true});
    let temp=historyTemplate.replace("%title%", LANG.cards[id].title);
    temp=temp.replace("%number%", LANG.cards[id].number);
    temp=temp.replace("%time%",  timeString);
    document.getElementById("call_history_list").innerHTML+=temp;
}
function clearHistory(){
    if(confirm("Are you sure to clear history?")){
    document.getElementById("call_history_list").innerHTML="";
    }
}

function setOnclicks(){
let favs=document.getElementsByName("fav_icon");
let copys=document.getElementsByClassName("copy_btn");
let calls=document.getElementsByClassName("call_btn");


for(let i=0; i<favs.length;i++){
favs[i].addEventListener("click", function(e) {
let id=e.target.getAttribute("data");
if(favorites.includes(id)){
  favorites=favorites.filter(function(item) { return item !== id; });
  e.target.classList.remove("fa-solid");
  e.target.classList.add("fa-regular");
}else{
    favorites.push(id);
  e.target.classList.remove("fa-regular");
  e.target.classList.add("fa-solid");
}
updateDashbaord();
});
}


for(let i=0; i<copys.length;i++){
copys[i].addEventListener("click", function(e) {
  navigator.clipboard.writeText(e.target.getAttribute("data"));
  copy++;
  updateDashbaord();
});
}



for(let i=0; i<calls.length;i++){
calls[i].addEventListener("click", function(e) {
let id=e.target.getAttribute("data");
id=parseInt(id);

if(balance>0){
    if(confirm("Are you sure to call "+LANG.cards[id].title+"("+LANG.cards[id].number+")? It will cost 20 credits.")){
     addHistory(id);
     balance-=20;
    //  console.log(balance)
    }
}else{
    alert("Not enough balance to call. Please recharge by reloading this page.😂")
}

  updateDashbaord();
});
}


}

let historyTemplate=document.getElementById("history_template").innerHTML;


let card_list=document.getElementById("card_list");
let cardTemplate=document.getElementById("card_template").innerHTML;
for(var i=0;i<LANG.cards.length;i++){
    let card=LANG.cards[i];
    let cardHT=cardTemplate.replace("%icon%", card.icon); 
    cardHT=cardHT.replace(/\%title\%/g, card.title);
    cardHT=cardHT.replace(/\%subtitle\%/g, card.subtitle);
    cardHT=cardHT.replace(/\%number\%/g, card.number);
    cardHT=cardHT.replace(/\%type\%/g, card.type);
    cardHT=cardHT.replace(/\%id\%/g, i.toString());
    // cardHT=cardHT.replace("%title%", card.title);
    card_list.innerHTML+=cardHT;
}

setOnclicks();
updateDashbaord();