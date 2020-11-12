---
title: Dokumentation
---

# Dokumetation für Developer

Dokumentation von der EKS InTec Dokumentation.
Hier steht alles, was beachtet werden muss, bitte erst komplett durchlesen, bevor gestartet werden kann, Dokumentationen hochzuladen!
Es funktioniert nicht im Inernet Explorer. Bitte jedem Bescheid geben, der es nutzen möchte oder dem es weitergegeben wird.

## Get Started
Für diese Dokumentation wird der statische HTML - Seitengenerator [**MkDocs**](https://www.mkdocs.org/) genutzt.
Als Theme wird das [**Mkdocs Material**](https://squidfunk.github.io/mkdocs-material/) genutzt.

### Installation
Hilfreiche Links: <br/>
[Mkdocs,Python](https://www.mkdocs.org/#installation) <br/>
[Mkdocs-Material](https://squidfunk.github.io/mkdocs-material/getting-started/)<br/>
[Mkdocs-Material Plugins](https://squidfunk.github.io/mkdocs-material/reference/variables/)<br/>
[Mkdocs-Material Localsearch](https://github.com/wilhelmer/mkdocs-localsearch/)<br/>
####  Linux 
1. Python 3
```bash
sudo apt install python3-pip
```
2. Installieren Mkdocs 
```bash
sudo apt install mkdocs
```
3. Installieren von MkDocs-Material
```bash
pip3 install mkdocs-material
```
4. Plugins installieren
```bash
pip3 install mkdocs-macros-plugin
```
5. Local Search Plugin installieren
```bash
pip3 install mkdocs-localsearch
```
<sub> Falls pip3 nicht funktioniert, kann es sein, dass nur pip installiert wurde, deshalb jeweils pip3 mit pip ersetzen</sub>

#### Windows
Folge dieser [Installation](http://learn.openwaterfoundation.org/owf-learn-mkdocs/install/#install-on-windows)

### HTML - Seiten bauen und Server starten
Die mkDocs - Befehle funktionieren nur in dem Ordnern, indem die **mkdocs.yml** Datei vorhanden ist. 
#### HTML - Seiten bauen
Durch 
```bash
mkdocs build 
```
unter Windows
```bash
python -m mkdocs build 
```
wird aus den ganzen .md Dateien, die in **/docs** vorhanden sind, als HTML Seite gebuat und in der Ordner **/site** reingelegt.

#### Server starten
Durch 
```bash
mkdocs serve
```
unter Windows
```bash
python -m mkdocs serve 
```
wird ein Liveserver gestartet, der standardmäßig unter **127.0.0.1:8000** läuft, damit kann getestet werden wie es im Browser aussieht.

##### Mkdocs in der VM
Falls der Server in einer VM läuft, es aber im Browser unter Windows angezeigt werden soll, folgenden Befehl eingeben: 
```
mkdocs serve -a 0.0.0.0:8000
```
Im Browser die VM - IP Adresse eingeben und Port 8000
```
http://IP-AdresseVM:8000
```
### Strukturierung
Die Strukturierung in MkDocs ist wie folgt: 
#### /docs
In den /docs Ordner werden alle **.md** Datein eingefügt und geschrieben, bzw. gespeichert.
Dort gibt es 2 spezielle Ordner namen: **javascripts** und **stylesheets**, in diesen befinden sich die Javascript- Datei **extra.js** und die CSS - Datei **extra.css**. 

#### /site
Dieser Ordner wird automatisch erstellen, sobald man einem die HTML-Seiten gebaut hat ( Siehe Abschnitt `HTML - Seiten bauen`).
Dort werden alle Dateien von **/docs** in **.html** Dateien gebaut und diese kann man dann für den Browser nutzen. 
#### mkdocs.yml
Dort werden jegleiche Regeln/Plugins usw. definiert, die benötigt werden. 

#### overrides
Im Ordner overrides befinden sich die HTML - Seiten die überschrieben werden können. 
Mkdocs - Material besitzt standardisierte HTML - Seiten, diese können hier überschrieben bzw, geändert werden. Mehr dazu unter: [MkDocs Customization](https://squidfunk.github.io/mkdocs-material/customization/#extending-the-theme)

#### Detailierter Aufbau von /docs
In /docs sind jeweils die Ordner angezeigt, die als Oberes Thema gelten z.B. RF::SCOUT usw.
In den Ordnern stehen danach jeweils die Versionen der Dokumentation darin und eine versions.txt (**Mehr dazu unter:**[`Versionierung`](#versionierung))
Unter jeder Version gibt es einen Ordner für jede einzelne Sprache und darin sind die **.md**- Dateien enhalten.
**WICHTIG:** In jedem Ordner muss eine **index.md** - Datei vorhanden sein.

Beispiel: 
```
$ ls
docs site mkdosc.yml overrides  // Root Ordner

$cd docs
$ls 
ConnectTools  Extensions  RF::SCOUT  RF::SUITE®  RF::YAMS  assets  de  en  javascripts  sp  stylesheets // docs Ordner

$cd RF::SCOUT
$ls
20.13.19  20.13.20  20.13.21  versions.txt // RF::SCOUT Ordner

$cd 20.13.21
$ls
de  en  sp // Versions Ordner 
$cd de
$ls
index.md  + Jegliche .md Dateien 
```
**Es werden nur .md Dateien angezeigt und gebaut, das heißt in den Ordnern können jegliche andere Dateien und Ordnern erstellen werden. Z.B: Bilder usw.**

## Oberes Menü erstellen

Die Erstellung des Menüs funktioniert wie folgt:

1. Nennen der Dateien in Docs (/docs) Ordner, wie sie für das Menü heißen sollen z.b. RF::SCOUT , RF::YAMS etc.
2. In der mkdocs.yml unter extra -> menu: ein Array erstellen, dass die **Reihenfolge**  des Menüs bestimmen soll
**Achtung:**  Die Namen in dem Array sollen genau wie die der Ordner heißen.

z.b.
```
extra:
  menu: ["Home", "RF::SUITE®", "RF::SCOUT", "RF::YAMS" , "Connect Tools", "Extensions"]
```

### Für Developer
#### Anzeigen des Menüs
In der Datei **overrides/main.html** unter dem block **tabs** steht folgender Code:
```html
  <div  class="md-tabs__inner md-grid">
   <ul  class="md-tabs__list"> 
   {% raw %}
    {% for item in config.extra.menu %}
     {% for nav_item in nav %}
      {% set navItem = nav_item.title %}
      {% if navItem == "RF%3A%3ASCOUT" %}
        {% set navItem = navItem | replace ("%3A%3A" , "::") %}
      {% endif %}
      {% if navItem == "RF%3A%3AYAMS" %}
        {% set navItem = navItem | replace ("%3A%3A" , "::") %}
      {% endif %}
      {% if navItem == "RF%3A%3ASUITE®" %}
        {% set navItem = navItem | replace ("%3A%3A" , "::") %}
      {% endif %}
      {% if item == navItem %}
       {% include "partials/tabs-item.html" %}
      {% endif %}
    {% endfor %}
  {% endfor %}
 {% endraw %}
 </ul>
</div>
```
Hier wird das erstellte Menü in der mkdocs.yml mit den einzelnen Ordnern, die in **/docs** definiert sind verglichen und dann erst angezeigt, wenn der gewünschte Menüpunkt mit dem in **/docs** übereinstimmt und somit kann die Reihenfolge bestimmt werden.

#####  Vorsicht bei der Nutzung unter Windows
Windows lässt keine : (Doppelpunkte) in Ordnernamen zu und wandelt diese dementsprechend in Hexadezimal um, hier: %3A. Dieses wird hier abgefangen (s.o.) und mit einem : (Doppelpunkt) ersetzt, damit die Menüerstellung funktioniert.
Zustäzlich muss es im HTML - Content auch nochmal geändert werden: 
Das macht man in der **extra.js** - Datei in der Funktion setTitle():
```js
function  setTitle(res){
let  titleLabel = res[0].getElementsByTagName('label');
if(titleLabel[1].textContent.trim() === "RF%3A%3ASCOUT"){
titleLabel[1].textContent = "RF::SCOUT";
}
if(titleLabel[1].textContent.trim() === "RF%3A%3AYAMS"){
titleLabel[1].textContent = "RF::YAMS";
}
if(titleLabel[1].textContent.trim() === "RF%3A%3ASUITE®"){
titleLabel[1].textContent = "RF::SUITE®";
}
}
```
Dort wird abgefangen, welcher Text mit geändert werden soll und wird dann dementsprechend geändert

#### Wenn auf ein Menütab gecklickt wird
Falls das Menü erfolgreich erstellt wurde, muss man noch einen Eventlistener hinzufügen, mit dem man zwischen den Menüs hin und her wechseln kann:
Dies funktioniert folgendermaßen: 
1. Wird jedem inactive Tab einem Eventlistener hinzugefügt
```js
let  tab_itemsInactive = document.getElementsByName('inactiveTab');
for(let  u = 0; u < tab_itemsInactive.length; u++){
tab_itemsInactive[u].addEventListener('click',function(){
clickTabMenu(tab_itemsInactive[u].innerHTML,getCookie("language"));
},false);
}
```
2. In der Funktion **clickTabMenu()** jeweils die Fälle in einem Switch Case abfangen und dann weiterleiten: 
```js
case  "RF::SUITE®":
version = loadFile("/RF::SUITE®/versions.txt");
if(version[version.length -1] === true){
// Windows
url = "/RF%253A%253ASUITE®/"+version[0]+"/"+lan+"/index.html";
}
else{
url = "/RF::SUITE®/"+version[0]+"/"+lan+"/index.html";
}
window.location.href = url;
break;
```
##### Unter Windows
Aufgrund von Windows, kann evtl die URL die man weiterleiten muss, anders heißen (z.b. lässt Windows keine Doppelpunkte im Ordnernamen zu) . Deshalb gibt es in jedem Case, bei dem die URL auf Windows anders heißen könnte, z.b. ein Doppelpunkt im Ordnernamen eine weitere IF-Anweisung, die das abfängt und überprüft:
```js
if(version[version.length -1] === true){
// Windows
url = "/RF%253A%253ASUITE®/"+version[0]+"/"+lan+"/index.html";
}
```
Falls es jedoch keine andere URL auf Windows geben sollte benötigt man die IF-Anweisung nicht
```js
case  "ConnectTools":
version = loadFile("/ConnectTools/versions.txt");
url = "/ConnectTools/"+version[0]+"/"+lan+"/index.html";
window.location.href = url;
break;
```


## Dropdownmenü erstellen 

Will man ein Dropdownmenü zusätzlich zu der Menüleiste oben erstellen, geht man wie folgt vor:

In diesem Beispiel wurde ein DropdownMenü für ConnectTools erstellt: 

1. In dem Ordner **overrides/partials** in der Datei tabs-item.html, jeweils das gewünsche Menü abfragen und dort dann die DropdownListe hinzufügen, hier wird auch jeweils Unterschieden, ob das Menüitem momentan aktiv ist, oder nicht!
Gewünsches Menüitem wird mit if abgefragt und dann jeweils, das Dropdown menü hinzugefügt mit dem ul Tag.
Es wird dabei ebenfalls unterschieden, ob das Item Aktiv ist oder nicht! 

```html
{% raw %}
<li  class="md-tabs__item">
{% if nav_item.active %}
{% if item == "ConnectTools" %}  // item = Das was man in der mkdocs-yml unter menu hinzugefügt hat [`menü`](#oberes-menu-erstellen)
<button
type="button"
class="md-tabs__link md-tabs__link--active"
id = "ConnectToolsBtn"
style="color: #ffffff">
{{ title }}
</button>
<ul  class="tabDropdown"  id="tabDropDown">
<li>  <a  href="">Test</a></li>
<li>  <a  href=""> Test2</a></li>
<li>  <a  href="">Test3</a></li>
</ul>
{% else %}
<button
type="button"
class="md-tabs__link md-tabs__link--active"
id="activeTab"
style="color: #ffffff"
>
{{ title }}
</button>
{% endif %}
{% else %}
{% if item == "ConnectTools" %}
<button
type="button"
class="md-tabs__link"
name="inactiveTab"
id = "ConnectToolsBtn"
style="color: #ffffff"
>
{{ title }}
</button>
<ul  class="tabDropdown"  id="tabDropDown">
  <li>  <a  href="">Test</a></li>
<li>  <a  href=""> Test2</a></li>
<li>  <a  href="">Test3</a></li>
</ul>
{%else%}
<button
type="button"
class="md-tabs__link"
name="inactiveTab"
style="color: #ffffff"
>
{{ title }}
</button>
{% endif %}
{% endif %}
</li>
{% endif %}
{% endraw %} 

```

  2. In der Datei **docs/extra.js** in der Funktion **initTabDropDownMenu()** 
  wird der EventListener hinzugefügt, um es bei dem Mouseover des Menüitems das DropdownMenü anzeigen   zu lassen und bei der Funktion **window.onclick()**, wird es wieder ausgeblendet, wenn man auf den Bildschirm klickt.
  3. Es kann frei Entschieden werden, ob man über HTML in **tabs-item.html** die Verlinkung aktivieren möchte, oder über JavaScript in **extra.js**! In diesem Beispiel war es in JavaScript. 



## Bennenen der Seiten und des Navigationsmenüs (links).

Um die Seiten und **dadruch** das Menü links richtig zu benennen, gibt es verschiedene Möglichkeiten:

1. Die beste Möglichkeit ist es, jeder .md Datei einen Titel zu geben. Dies funktioniert mit sogenannten Meta Tags am Anfang einer .md Datei:
```
___
title: Home
___
```
2. Es besteht eine weitere Möglichkeit:
Sollte kein Titel angegeben sein, nimmt er automatisch den ersten Titel mit dem # Tag bzw. den ## Tag
z.b.
```
# Home
```
3. Sollte weder ein Titel noch eine # / ## Überschrift in der Datei vorhanden sein, nimmt er den Dateinamen als Titel.
z.B. (nicht zum empfehlen)

```
index.md ⇒ index
```
### Verstecken von .md Dateien
Mkdocs zeigt automatisiert jede Datei an (Links im Navigationsmenü), die eine Markdown-Datei ist. Das passiert auch, wenn man diese in einen extra Ordner plaziert (Dann wird der Ordner angezeigt mit der md-Datei.
Falls es nun Markdown Dateien gibt, die man nur in andere md-Dateien importieren will, aber nicht extra im Menü angezeigt werden soll, benutzt man dafür den versteckten Ordner **.imports** in dem Ordner **/docs**, 
dieser Ordner ist in diesem Fall wie folgt aufgebaut:
```
$ls
connecttools  extensions  rfscout  rfsuite  rfyams. 
``` 
Deutlich zu sehen, dass es genau dieselbe Namen sind, wie in dem **/docs** Ordner die einzelne Ordner heißen. Das heißt, dass es im import genauso aufgebaut ist!
Beispiel: 
rfscout -> 20.13.19 / 20.13.20 / 20.13.21 -> de /en/sp -> md Dateien (die nur importiert werden sollen, in andere MD Dateien).

Dort kann man nun md-Dateien speichern, die nicht direkt angezeigt werden sollen, sondern in eine andere MD-Datei importiert werden soll.
Importieren der Datei durch Ohne "" an Anfang: 

"--8<-- "docs/rfscout/20.13.21/de/processanalysis/activitydiagram.md"  "
 
Falls in dem **/docs** Ordner ein neuer Ordner dazukommen sollte, demensprechend hier den Ordnernamen ebenfalls ergänzen.
**Achtung:** Damit dies Plattformübergreifend funktioniert, bitte keine Sonderzeichen in den Ordner hinzufügen

### Für Developer

Um den **title** Tag zu nutzen  muss in der mkdocs.yml Datei
```
markdown_extensions:
  - meta
```
aktiviert sein .

## Sortierung des Navigationsmenüs (links)
Um das linke Menü richtig zu sortieren, wird der automatische Sortieralgorithmus von Mkdocs genutzt, dieser hat folgenende Aufbau: 
Der Sortieralgorithmus ist Case-sensitiv, als erstes werden die Dateien beachtet, die mit einem kleinen Buchstaben anfangen und dann die, die mit einen großen Buchstaben Anfangen. D.h. **A** kommt nach **z**
Es werden erst alle Dateien beachtet und danach die Ordner, die weitere .md Dateien beinhalten

Zu allererst wird die index.md Datei gezeigt (mit kleinem i) und dann geht es mit weiter mit a-z, A-Z.


## Sprache hinzufügen

Sollte man eine neues Sprache hinzufügen wollen, muss erst mit dem Admin gesprochen werden, damit dieser ein paar Voreinstellungen tätigen kann.
Der generelle Aufbau ist aber:
In jedem Ordner: z.b. /docs/RF::SCOUT, unter jeder Version darin, wird zwischen den Sprachen getrennt, d.h. jeder bekommt einen extra Ordner.
Das kann dann z.b. so aussehen:
```
$/docs/Rf::SCOUT/20.13.21/de
```
In diesem Ordern sind dann die ganzem .md Dateien die auf Deutsch sind.
Nun kann ein Ordern hinzugefügt werden, wie z.b. **en** dort kommen dann z.b. Englische .md Dateien rein.

### Für Developer
#### Icon für die Sprache  hinzufügen
1. Suche einen passenden Icon aus, dass die Sprache repräsentieren soll und speichere sie als .svg Datei
2. Füge das Icon in den Ordner  **overrides/.icons/eksicons** ein
3. Nun erstelle in der main.html im Ordner **/overrides** unter dem Block **announce** ein Button mit dem Icon  und gebe ihm eine sinnvolle  Id ( **Um Verwirrungen und Fehler zu vermeiden, bitte den Kürzel der Sprache verwenden**) 
z.b 
```html
<button class="lan_icon" onclick="clickLangBtn()"  id="de" > {% raw %} {%include ".icons/eksicons/deutschland.svg"%} {% endraw %} </button> 
```
Nun müsste das Icon oben rechts sichbar sein.
Jetzt muss noch der Button aktiviert werden.

#### Konfiguration des Buttons
dazu gehen wir in die extra.js Datei unter  **/docs/javascript/extra.js** 

1. Einfügen des Sprachkürzels in das Array language 
```js
let language = ['de','en','sp','ch'];
```
2. Eventlistener für die Sprache hinzufügen und dort ebenfalls das Kürzel an die Funktion **clickLangBtn** übergeben.
```js
document.getElementById('de').addEventListener("click",function(){
clickLangBtn("de");
},false);
```
3. In der Funktion **clickLangBtn(lan)** als Case die Sprache mit dem Kürzel hinzufügen.
```js
case "de":
...
break;
```
4. Im Case den jeweiligen Kürzel **de** mit den Kürzel der Sprache ersetzen
```js
setCookie("language","de",true);
if(pathArray.length <= 3){
 window.location.href = "/de/index.html";
}
else{
 window.location.href = "/"+pathArray[1]+ "/"+pathArray[2]+"/de/"+pathArray[4];
}
```
5. Zuletzt in der Funktion **changeLanguageContent** wieder ein Case mit dem Kürzel erstellen
```js
case "de":
...
break;
```
In dieser Funktion werden jeweils die Dinge auf der Seite übersetzt, die nicht in Markdown geschrieben sind.
Bisher ist das nur bei der Suchleiste der Fall. 
Dazu wird die Suchleiste einer Id (hier: searchInput) gegeben, diese dann in dieser Funktion aufgerufen 
```js
let search = document.getElementById('searchInput');
```
und falls der Case eintritt, kann man diese dann in der gewünsche Sprache übersetzen.
Als Beispiel Spaninen: 
```js
case "sp":
 search.placeholder = 'Búsqueda';
break;
```
Ganze Funktion: 
```js
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
```
## Versionierung
Jedes einzelne Programm benötigt seine eigene Versionen.
Dazu werden mehrere Dinge benötigt.
1. In jedem Ordner des einzelnen Programms benötigt es eine Datei namens **versions.txt**
```
$/docs/RF::SCOUT/versions.txt
```
2. Dort werde dann in Reihenfolge die Versionen aufgeschrieben, die neuste Version nach oben.
Beispiel:
```
20.13.21
20.13.20
20.13.19
```
3. Die Ordner in dem Programm Ordner müssen genau gleich benannt werden wie die Versionen in der versions.txt.
Beispiel:
```
20.13.19  20.13.20  20.13.21  versions.txt
```
wie oben schon besprochen befinden sich dort dann jeweils die Ordner mit den verschiedenen Sprachen darin und dort die verschiedenen Markdown-Dateien.
```
$cd /docs/RF::SCOUT/20.13.21
$ls
de en sp
$ cd de
$ ls 
(alle MD Dateien die für die Deutsche Sprache relevant sind)
```
## Suche
Die Suche wird folgendermaßen eingeschränkt: </br> 
Es wird nur im aktuellen Thema (RF::SCOUT usw), in der aktuellen Version und in der aktuellen Sprache gesucht.
Die Funktion **changeSearchResult()** in **/docs/extra.js** schränkt dich Suche ein und es wurde ein Eventlistener aktiviert, der 
nach jeder Eingabe reagiert und in die Funktion **changeSearchResult()** reinspringt:
```js
document.getElementById('searchInput').addEventListener('input',changeSearchResult);
``` 
## Tipps und Tricks

### Erlauben von Jinja Tags/Variablen/Expressions in Markdown

Will man Jinja "Code" in Markdown darstellen, geht das nicht einfach durch ein Code Block, da es dies sonst als Code sieht und nicht einfach nur dargestellt wird.
Möchte man dennoch so wie [`hier`](#anzeigen-des-menus) Jinja im Codeblock anzeigen lassen, muss man zwischen den typischen Jinja Block am Anfang ein raw und am Ende des Code ein endraw setzen. 
Mehr dazu [**hier**](https://github.com/mkdocs/mkdocs/issues/1133)



