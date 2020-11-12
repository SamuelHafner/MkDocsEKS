### Suchfeld

Das Suchfeld bezieht sich auf die Elemente einer angezeigten Tabelle. Generell stehen im Suchfeld als Platzhalter die Spaltenbezeichnungen, die bei einer Suche berücksichtigt werden. Im gezeigten Beispiel sind es die Tabellenspalten "Name", "Type" und "Comment".

![RFScout Programmbereiche](Bilder/RF_SCOUT_suchfeld.png)

Sobald eine Eingabe getätigt wurde erscheint, im Suchfeld das Remove Icon :fontawesome-solid-times-circle:. Wird das Icon gedrückt, wird der eingegebene Suchbegriff gelöscht. Siehe hierzu auch [:fontawesome-solid-times-circle: Icon](/scout/appendix/icon.html#remove).

![Icon_remove_Suchfeld](Bilder/RF_Scout_Icon_remove_Suchfeld.png
 "Remove Sucheintrag")

Das Suchfeld ist so konzipiert, dass eine Suche erst von der Anwendung gestartet wird wenn 2 Sekunden keine Aktion im Suchfeld selbst getätigt wurde. Man kann die Suche aber auch selbst auslösen, indem man "Return" drückt. Im Suchergebnis werden Ttreffer mit gelber Hintergrundfarbe angezeigt. Elternelemente werden auch angezeigt, wenn der Suchbegriff nicht in deren Bezeichner enthalten ist.

Ist das Icon :fontawesome-solid-eye: aktiv, werden alle gefundenen Elemente mit deren Elternelemente bzw. Group-by-Elementen angezeigt. Ist das Icon :fontawesome-solid-eye-slash: aktiv, sind die Elternelemente ausgeblendet, die den Suchbegriff nicht beinhalten. Siehe hierzu auch [:fontawesome-solid-eye: :fontawesome-solid-eye-slash: Icon](/scout/appendix/icon.html#eye-und-eye-slash).

![Icon_Suchfeld_eye_1](Bilder/RF_Scout_Icon_Eye_Suchfeld_1.png) ![Icon_Suchfeld_eye_2](Bilder/RF_Scout_Icon_Eye_Suchfeld_2.png)

In dem readonly Feld "Search hit count:", welches sich neben dem Suchfeld in der Informationskopfzeile befindet, wird die Anzahl der gefundenen Einträge angezeigt.

![Icon_Suchfeld_Count](Bilder/RF_Scout_Icon_suchfeld_count.png)

#### Suchbegriff

  * Groß- und Kleinschreibung wird nicht berücksichtigt.
  * Als Platzhalter für einen Suchbegriff gelten
    * "*" (Sternchen) Das Sternchen ersetzt kein oder beliebig viele Zeichen.
    * "?" (Fragezeichen) Das Fragezeichen ersetzt ein Zeichen.
  * Als logische Verknüpfung zweier Suchbegriffe gilt
    * "|" (Senkrechte Strich) der senkrechte Strich wird als ODER verwendet.