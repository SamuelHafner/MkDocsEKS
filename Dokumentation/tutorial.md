# Tutorial


Hier kommt die Doku, wie das System aufgebaut ist



## Oberes Menü erstellen

Die erstellung des Menüs funktioniert wie folgt:

1. Nennen der Dateien in Docs (/docs) Ordner, wie sie für das Menü heißen sollen z.b. RF::SCOUT , RF::YAMS etc.
2. In der mkdocs.yml unter extra -> menu: ein Array erstellen, dass die **Reihenfolge**  des Menüs bestimmen soll
**Achtung** Die Namen in dem Array sollen genau wie im Ordner heißen.

z.b.
```
extra:
  menu: ["Home", "RF::SUITE®", "RF::SCOUT", "RF::YAMS" , "Connect Tools", "Extensions"]
```


## Bennenen der Seiten

Um die Seiten und dadruch das Menü links richtig zu benennen, gibt es verschiedene Möglichkeiten:

1. Die beste Möglichkeit ist es, jeder .md Datei einen Titel zu geben, die funktioniert wie mit sogenannten Meta Tags am anfang einer .md Datei:
```
___
title: Home
___
```
2. Es besteht eine weitere Möglichkeit:
Sollte kein Titel angegeben sein, nimmt er automatisch den ersten Titel mit dem # Tag
z.b.
```
#Home
```
3. Sollte weder ein Titel noch eine # Überschrift in der Datei vorhanden sein, nimmt er den Dateinamen als Titel.
z.B. (nicht zum empfehlen)
```
index.md ⇒ index
```

Mkdocs zeigt automatisiert jede Datei an, die eine Markdown-Datei ist. Das passiert auch, wenn man diese in einen extra Ordner plaziert (Dann wird der Ordner angezeigt mit der md-Datei.
Falls es nun Markdown Dateien gibt, die man nur in andere md-Dateien importieren will, aber nicht extra angezeigt werden soll. Benutzt man dafür versteckte Ordner, die mit einem  . (Punkt) davor bennant werden sollen. 
```
mkdir .buttons 
```
Dort kann man nun md-Dateien speichern, die nicht direkt angezeigt werden sollen, im Menü links, sondern in eine andere MD-Datei importiert werden soll.
```
--8<-- "docs/RF::SCOUT/20.13.21/de/.processanalysis/activitydiagram.md"
```
Importieren der Datei. 




## Sprache hinzufügen

Sollte man eine neues Sprache hinzufügen wollen, muss erst mit dem Admin gesprochen werden, damit dieser ein paar Voreistellungen leisten kann.
Der generelle Aufbau ist aber: 
In jedem Ordner: z.b. /docs/RF::SCOUT, unter jeder Version darin, wird zwischen den Sprachen getrennt, d.h. jeder bekomme einen extra Ordner. 
Das kann dann z.b. so aussehen: 
```
$/docs/Rf::SCOUT/20.13.21/de 
```
In diesem Ordern sind dann die ganzem .md Dateien die auf deutsch sind.
Nun kann ein Ordern hinzugefügt werden, wie z.b. **en** dort kommen dann z.b. Englische .md Dateien rein.



## Versionierung
Jedes einzelne Programm benötigt seine eigene Version.
Dazu werden mehrere Dinge benötigt.
1. In jedem Ordner des einzelnen Programms benötigt es eine Datei namens **versions.txt**
```
$/docs/RF::SCOUT/versions.txt
```
2. Dort werde dann in Reihenfolge die Versionen aufgeschrieben, die neuste Version nach oben.
Am Beispiel von docs/RF::SCOUT
```
20.13.21
20.13.20
20.13.19
```
3. Die Ordner in dem ProgrammOrdner müssen genau gleich benannt werden wie die Versionen in der versions.txt.
Am Beispiel von docs/RF::SCOUT
```
20.13.19  20.13.20  20.13.21  versions.txt
```
wie oben schon besprochen befinden sich dort dann jeweils die Ordner mit den verschieben Sprachen darin und dort die verschiedene Markdown-Dateien.
```
$cd /docs/RF::SCOUT/20.13.21
$ls
de en sp
$ cd de
ls
(alle MD Dateien für die Deutsche Sprache relevant sind)
```







