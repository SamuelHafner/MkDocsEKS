function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");


  /* Insert magnifier glass: */
try{
  img.parentElement.insertBefore(glass, img);


  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
}

catch(e){

}
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";

 }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}



document.addEventListener("DOMContentLoaded", function(){

let language = ['de','en','sp','ch'];

let currentLan = getCookie("language");


// set Englisch as default Language
if(currentLan == null){
setCookie("language","en",true);
currentLan = getCookie("language");
}
// [1] = dir [2] = Version [3] = lang [4] = html datei
let pathArray = window.location.pathname.split('/');


changeLanguageContent(currentLan);


let url = window.location.href.split('/');
//--- Check if Offline
if(url[0].trim() !== "http:" &&  url[0].trim() !== "https:"){
  hideNoneUsedNav(pathArray,language);
  let lanIndex = getLanIndex(pathArray,language);
  let lan = pathArray[lanIndex];
  changeLanguageContent(lan);

}
// ONLINE
else{

  if(pathArray.length <= 2){
    window.location.href = "/"+currentLan+"/index.html";
    }
       
    
    let navTab = document.getElementById('navTab');
    navTab.style.display = "block";

    let tab_itemsInactive = document.getElementsByName('inactiveTab');

    for(let u = 0; u < tab_itemsInactive.length; u++){
    tab_itemsInactive[u].addEventListener('click',function(){
    clickTabMenu(tab_itemsInactive[u].innerHTML,getCookie("language"));
    },false);
    
    }

    initTabDropDownMenu();


    let langbtns = document.getElementsByClassName('lan_icon');
    

    for(let k = 0; k < langbtns.length; k++ ){
      langbtns[k].style.display = "block";
    }

  document.getElementById('de').addEventListener("click",function(){
    clickLangBtn("de");
    },false);
    
    document.getElementById('en').addEventListener("click",function(){
    clickLangBtn("en");
    },false);
    
    document.getElementById('sp').addEventListener("click",function(){
    clickLangBtn("sp");
    },false);
    let logo = document.getElementById('logo').addEventListener ("click",function(){
      window.location.href="/"+currentLan+"/index.html";
      },false);
  // [1] = dir [2] = Version [3] = lang [4] = html datei
//Wenn Startseite, dann keine versions.txt auslesen
if(pathArray.length > 3){
  // read versions
let versions = loadFile("/"+pathArray[1]+"/versions.txt");
if(versions != null){

buildVersionButton(pathArray,versions);
hideNoneUsedNav(pathArray,language);
} // if
} // if
} //else

document.getElementById('searchInput').addEventListener('input',function(){changeSearchResult(language)});

}); // Function end

function getLanIndex(pathArray ,language){
  let lanIndex;

  for(let i = 0; i <language.length; i++ ){
    if(pathArray.indexOf(language[i]) != -1 ){
      lanIndex = pathArray.indexOf(language[i]);
    }
  }

  return lanIndex;

} // Function End

/* Initialisiere TabMenü */
function initTabDropDownMenu (){
  try{
  let button = document.getElementById('ConnectToolsBtn');
  let rect = button.getBoundingClientRect();
  let ul = document.getElementById('tabDropDown');

  ul.style.minWidth = rect.width + "px";

  let as = ul.getElementsByTagName('a');

  for(let i = 0; i<as.length; i++){
    as[i].href = "http://127.0.0.1:8000/RFSUITE/20.1.08/de/index.html";
  }
  let tabDropdownItem = document.getElementById('ConnectToolsBtn');
  tabDropdownItem.addEventListener("mouseover", function(){
    let ctDropDown = document.getElementById('tabDropDown');
    ctDropDown.style.display = "block";
  });
}
catch(e){
  console.log("Es gab ein Fehler bei der Erstellung des DropdownMenus Function initTabDropDownMenu()" +
  "Wahrscheinlich ist es ein Fehler in der tab-items.html, dass der nicht in die IF Anweisung geht" + e);
}
}


function changeSearchResult(language){

  // [1] = dir [2] = Version [3] = lang [4] = html datei (if Online)
  let pathArray = window.location.pathname.split('/');
  let ol = document.getElementById('result');
  let lis = ol.getElementsByTagName('li');
  let link = [];
   
  let lanIndex = getLanIndex(pathArray,language);
  let lan = pathArray[lanIndex];
  let topic = pathArray[(lanIndex-2)];
  let version = pathArray[(lanIndex-1)];
  
// Timeout, weil dadurch die LIs laden können
setTimeout(function(){
  for(let t = 0; t<lis.length; t++){
     link = lis[t].querySelector('a').getAttribute('href').split('/');
    if(link.indexOf(topic) != -1 && link.indexOf(version) != -1 && link.indexOf(lan) != -1 )  lis[t].style.display = "block" ;
    }
 }, 200); 
}

function changeLanguageContent(currentLan){

let search = document.getElementById('searchInput');

switch (currentLan){
	case "en":
		search.placeholder = 'Search';
		break;
	case "de":
		search.placeholder = 'Suche';
		break;
	case "sp":
		search.placeholder = 'Búsqueda';
		break;
}
}

/* Build Version Button  */
function buildVersionButton(pathArray, versions){

let btn = document.getElementById('versionbtnId');
let div = document.getElementById('versionDropdownContent');


for(let i = 0; i < versions.length -1 ; i++){
if(versions[i].trim() !== ""){
if(pathArray[2] === versions[i].trim()){
  btn.innerHTML = versions[i];
  btn.style.display = "block";
} //if
else{
div.innerHTML += '<button onClick= "dropdownBtn(\''+versions[i].trim()+'\')">'+versions[i]+'</button>'
} //else
} //if
} // for
} // functionend


/* Hide and Show Elements  */
function hideNoneUsedNav(pathArray,language){

let nav = document.body.querySelectorAll('.md-nav')

let res = document.body.querySelectorAll('.md-nav__item--active');

// res[1] = Version
let lis = res[1].getElementsByTagName('li');
// TODO : Search Index of Lis to get right label (filter by Language)
let labels = res[1].getElementsByTagName('label');


// Set Title
setTitle (res);

// show Navbar left.
nav[0].style.display = "block";


// res[0]= Section, Show because  Burgermenu.
res[0].style.display="block";
res[1].style.display = "inline-block";

// Zeige alle aktiven  lis
for(let i = 0; i < lis.length; i++){
lis[i].style.display = "block";
} // for

for(let j = 0; j < labels.length; j++){
// verstecken der Version
if(pathArray[2].trim() === labels[j].textContent.trim()){
   labels[j].textContent = "";
} // if

// Verstecke alle Ordner die eine Sprache als namen haben.
for(let lan = 0; lan < language.length; lan++){
if(labels[j].textContent.trim().toLowerCase() === language[lan].trim().toLowerCase()){
  labels[j].textContent = "";
} //if
} //for
} // for


let tocBar = document.querySelectorAll('[aria-label="Table of contents"]');

try{
tocBar[1].style.display = "block";

let tabItems = tocBar[1].getElementsByTagName('nav');

for(let i = 0; i<tabItems.length;i++){

tabItems[i].style.display = "block";

}
} catch(e){}


// Tocbar on the right side
let resNav = document.body.querySelectorAll('.md-sidebar__inner');
let liNav = resNav[1].getElementsByTagName('li');

for( let k = 0; k < liNav.length; k++){

liNav[k].style.display = "block";

} //for
} // function Ende

// Set Navbar Title
function setTitle(res){
  let titleLabel = res[0].getElementsByTagName('label');

  if(titleLabel[1].textContent.trim() === "RFSCOUT"){
    titleLabel[1].textContent = "RF::SCOUT";
  }

  if(titleLabel[1].textContent.trim() === "RFYAMS"){
    titleLabel[1].textContent = "RF::YAMS";
  }

  if(titleLabel[1].textContent.trim() === "RFSUITE"){
    titleLabel[1].textContent = "RF::SUITE®";
  }

} // function Ende


/* -- Laden einer Datei (version.txt) und aufteilen in Array durch split*/
function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }  

  result = result.split("\n");

  return result;
}

/* Click Version Button to open Dropdown */
function clickVersionBtn(){
 document.getElementById("versionDropdownContent").classList.toggle("show");
}


// Close VersionButton if on Window clicked
window.onclick = function(event) {
  try{
  let test = document.getElementById('tabDropDown');
  if(!event.target.matches('.tabDropdown')){
    test.style.display = "none";
  }}
  catch(e){
    console.log("Es gab ein Fehler, bei der Erstellung des DropdownMenüs Function window.onclick " +
    "Wahrscheinlich ist es ein Fehler in der tab-items.html, dass der nicht in die IF Anweisung geht" + e );
  }
  if (!event.target.matches('.versionbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Click on DropdownButton */
function dropdownBtn(version){
  let pathArray = window.location.pathname.split('/');
  window.location.href = "/"+pathArray[1]+"/"+version.trim()+"/"+pathArray[3]+"/index.html";
  }

/*Change Language */
function clickLangBtn(lan){
let pathArray = window.location.pathname.split('/');
let url = "";

switch(lan){
  case "en":
	setCookie("language","en",true);
	if(pathArray.length <= 3){
  window.location.href = "/en/index.html";
  return;
	}
	else{        
        pathArray[3] = "en";
	}
 	break;
  case "de":
        setCookie("language","de",true);
  if(pathArray.length <= 3){
        window.location.href = "/de/index.html";
        return;
	}else{
    pathArray[3] = "de";
	}
	 break;
  case "sp":
        setCookie("language","sp",true);
	if(pathArray.length <=3){
        window.location.href =  "/sp/index.html";
        return;
	}else{
    pathArray[3] = "sp";
        }
  break;
}

for(let i = 1; i<pathArray.length; i++){
   url = url +  "/" + pathArray[i];
}

window.location.href = url;
} // Funtion Ende



/* Change Menu if tab is cklicked.  */
function clickTabMenu(tabItem){

let url ="";
let version = [];
let lan = getCookie("language");

switch (tabItem.trim()){

     case "RF::SUITE®":
      version =  loadFile("/RFSUITE/versions.txt");     
       url = "/RFSUITE/"+version[0]+"/"+lan+"/index.html";
       window.location.href = url;
      break;

     case "RF::SCOUT":
      version =  loadFile("/RFSCOUT/versions.txt");
      url = "/RFSCOUT/"+version[0]+"/"+lan+"/index.html";
      window.location.href = url;
	    break;

     case "RF::YAMS":
	    version =  loadFile("/RFYAMS/versions.txt");
      url = "/RFYAMS/"+version[0]+"/"+lan+"/index.html";
      window.location.href = url;
      break;

     case "ConnectTools":
         version =  loadFile("/ConnectTools/versions.txt");
	       url = "/ConnectTools/"+version[0]+"/"+lan+"/index.html";
         window.location.href = url;
         break;

     case "Extensions":
        version =  loadFile("/Extensions/versions.txt");
        url = "/Extensions/"+version[0]+"/"+lan+"/index.html";
        window.location.href = url;
        break;
  }
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


magnify("myimage", 4);

