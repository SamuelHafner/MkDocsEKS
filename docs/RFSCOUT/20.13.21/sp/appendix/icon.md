# Icon
## :fontawesome-solid-info-circle: Info-Circle
:fontawesome-solid-info-circle: Wird das Info-Circle Icon gedrückt oder wird über das Icon mit der Maus drübergefahren (Mouseover) erscheint eine Box mit weiteren Informationen zu dem endsprechenden Objekt bzw. Eintrag. Siehe auch das [Icon :fontawesome-solid-search:](#search-and-info) innerhalb einer Tabellenzeile.

Beispiel aus dem "Process Analysis" Tab:

![Icon_info-circle](../Bilder/RF_Scout_Icon_info-circle.png "Icon info-circle")

## Search
:fontawesome-solid-search: Im Suchfeld hat das Icon nur eine informative Funktion. Es zeigt dem Benutzer an, dass das Feld ein Suchfeld ist.

![Icon_Search](../Bilder/RF_Scout_Icon_Search.png "Icon Search")

## Tabellenspaltenbreite
:fontawesome-solid-chevron-left: || :fontawesome-solid-chevron-right: In jeder Tabellenkopfzeile ist diese Iconkombination enthalten. Mit der Maus kann durch drücken der Icons und gleichzeitigem bewegen der Maus die Tabellenspaltenbreite verkleinert oder vergrößert werden. Kann die Tabellenspaltenbreite nicht mehr verkleinert werden ändert sich die Iconkombination in ||:fontawesome-solid-chevron-right:. Ebenso wird es zu Iconkombination :fontawesome-solid-chevron-left:|| wenn die Tabellenspaltenbreite nicht mehr vergrößert werden kann.

![Icon_tabellenspaltenbreite](../Bilder/RF_Scout_Icon_Tabellenspaltenbreite.png "Tabellenspaltenbreite")

## Eye und Eye slash
:fontawesome-solid-eye: :fontawesome-solid-eye-slash: Diese zwei Icons sind Wechselicons. Wird das :fontawesome-solid-eye: Icon gedrückt wechselt es zum :fontawesome-solid-eye-slash: Icon und umgekehrt.
Im Suchfeld wird durch drücker des Icons die Elternelemente von gesuchten und gefundenen Elementen, die nicht den Suchbegriff entsprechen, ein- und ausgeblendet.

![Icon_eye](../Bilder/RF_Scout_Icon_Eye_Suchfeld_1.png "Icon eye Suchfeld Einblenden") ![Icon_eye-slash](../Bilder/RF_Scout_Icon_Eye_Suchfeld_2.png "Icon eye-slash Suchfeld Ausblenden")

Werden die Icon in einem Anzeigebereich angezeigt und gedrückt werden Elemente ein- und ausgeblendet.[^2]

![Icon_eye](../Bilder/RF_Scout_Icon_Eye_Anzeigebereich_2.png "Icon eye Elemente Ausblenden") ![Icon_eye-slash](../Bilder/RF_Scout_Icon_Eye_Anzeigebereich_1.png "Icon eye-slash Elemente Einblenden")

Für den Robot-Collision-Status Button wird das Icon in Kombination mit dem  [:fontawesome-solid-share-alt: Share Icon](#robot-collision-status) verwendet und blendet den Anzeigenbereich vom "Robot Collision Status" Ein bzw. Aus.

![Icon_eye](../Bilder/RF_SCOUT_Icon_Eye_Robot-Collision-Status_1.png "Icon eye Anzeigebereich Ausblenden") ![Icon_eye-slash](../Bilder/RF_SCOUT_Icon_Eye_Robot-Collision-Status_2.png "Icon eye-slash Anzeigebereich Einblenden")

[^2]: **ANMERKUNG FÜR ENTWICKLER:** Die Icons :fontawesome-solid-eye: und :fontawesome-solid-eye-slash: werden nicht eindeutig verwendet. Das Icon zeigt einmal an was es beim Drücken des Icons tun wird und einemal zeigt es an was es getan hat.

## Wrench
:fontawesome-solid-wrench: Dieses Icon wird in einem Tooltipp verwendet und visualisiert einen, in einer Aufzeichnung, aktiven "Job" bzw. Task Status "Active".

![Icon_Sanduhr](../Bilder/RF_SCOUT_Icon_task_active.png "Icon Task Status Waiting")

## Sanduhr
:fontawesome-solid-hourglass-half: Dieses Icon wird in einem Tooltipp verwendet und visualisiert einen, in einer Aufzeichnung, wartenden noch nicht abgeschlossenen "Job" bzw. Task Status "Waiting".

![Icon_Sanduhr](../Bilder/RF_SCOUT_Icon_task_waiting.png "Icon Task Status Waiting")


## Robot Collision Status
:fontawesome-solid-share-alt: Dieses Share Icon wird in Kombination mit den [:fontawesome-solid-eye::fontawesome-solid-eye-slash:](#eye-und-eye-slash) Icons verwendet. Es blendet den Anzeigenbereich vom "Robot Collision Status" Ein bzw. Aus.

![Icon_eye](../Bilder/RF_SCOUT_Icon_Eye_Robot-Collision-Status_1.png "Icon eye Anzeigebereich Ausblenden") ![Icon_eye-slash](../Bilder/RF_SCOUT_Icon_Eye_Robot-Collision-Status_2.png "Icon eye-slash Anzeigebereich Einblenden")

## Sort-up und Sort-down
:fontawesome-solid-sort-up::fontawesome-solid-sort-down: In einer Tabellenkopfzeile werden diese Icons verwendet um die Tabellenspalte zu sortieren. Ein nochmaliges Drücken eines Icon deaktiviert die Sortierung und die Benutzerdefinierte Sortierung wird angezeigt.

![Icon_tabellenspaltenbreite](../Bilder/RF_Scout_Icon_Tabellenspaltenbreite.png "Tabellenspaltenbreite")

## Caret down und Caret up
:fontawesome-solid-caret-down::fontawesome-solid-caret-up: Diese zwei Icons sind Wechselicons. Wird das :fontawesome-solid-caret-up: Icon gedrückt wechselt es zum :fontawesome-solid-caret-down: Icon und umgekehrt. Im Anzeigenbereich wird damit die Kopfinformation Auf- und Zuklappen und zeigt damit mehr oder weniger Informationen an.

![Icon_Kopfinformation](../Bilder/RF_SCOUT_Icon_Kopfinformation_caret-down.png "Kopfinformation open")

![Icon_Kopfinformation](../Bilder/RF_SCOUT_Icon_Kopfinformation_caret-up.png "Kopfinformation close")

## Caret right und Caret down
:fontawesome-solid-caret-right::fontawesome-solid-caret-down: Diese zwei Icons sind Wechselicons. Wird das :fontawesome-solid-caret-right: Icon gedrückt wechselt es zum :fontawesome-solid-caret-down: Icon und umgekehrt. In einem Tabellenfeld zeigt das :fontawesome-solid-caret-right: Icon bei einem Elternelement an das es noch Kindelemente gibt. Diese können durch drücken des Icon einzeln aufgeklappt werden.

![Icon_Tabellenfeld_open](../Bilder/RF_SCOUT_Icon_Tabellenfeld_caret-right.png "Tabellenfeld open") ![Icon_Tabellenfeld_close](../Bilder/RF_SCOUT_Icon_Tabellenfeld_caret-down.png "Tabellenfeld close")

Sollen alle Elternelemente auf- oder zugeklappt werden sind hierfür die Image Button
![](../Bilder/einklappen_primary.fa02e0a4.svg){: style="width:1em"}
![](../Bilder/ausklappen_primary.09cf35c7.svg){: style="width:1em"}
["Einklappen und Ausklappen"](#liste-einklappen-und-ausklappen) vorhanden.

## Remove
:fontawesome-solid-times-circle: Dieses Icon entfernt einen Eintrag oder eine Auswahl.
Im Suchfeld wird der Suchbegriff nach dem drücken des Icons aus dem Suchfeld gelöscht.

![Icon_remove_Suchfeld](../Bilder/RF_Scout_Icon_remove_Suchfeld.png
 "Remove Sucheintrag")

In einer Tabellenzeilenauswahl zeigt es an das die Tabellenzeile nicht mehr übernommen wird.

![Icon_remove_Tabellenzeile](../Bilder/RF_Scout_Icon_remove_Tabellenzeile.png "Remove Tabellenzeile")

Wird das Icon in der oberen rechten Ecke eines Fenstern angezeigt, wird das Fenster nach dem Drücken des Icon geschlossen.

## Refresh
:fontawesome-solid-undo: Dieses Icon setzt eine Eingabe zurück. Wird das Icon gedrückt wird eine vorher getätigte Eingabe zurückgesetzt. Siehe auch das Icon [:fontawesome-solid-times-circle: Remove](#remove) innerhalb des Suchfeldes.

![Icon_refresh_eingabe](../Bilder/RF_Scout_Icon_refresh_analysis_time_range.png
 "Refresh Eingabe")

## Search plus und Search minus
:fontawesome-solid-search-plus::fontawesome-solid-search-minus: Diese zwei Icons sind Wechselicons. Wird das :fontawesome-solid-search-plus: Icon gedrückt wechselt es zum :fontawesome-solid-search-minus: Icon und umgekehrt. Innerhalb eines Tabellenfeldes werden diese zwei Icons verwendet um mehr oder weniger Informationen des entsprechenden Feldes anzuzeigen.
Es unterscheidet sich zu den [Icons :fontawesome-solid-caret-right::fontawesome-solid-caret-down:](#caret-right-und-caret-down) in dem Sinn, dass keine weiteren Kinderelemente bzw. Tabellenzeilen angezeigt werden sondern die bestehende einzelne Tabellenzeile bzw. das Element erweitert wird.

![Icon_searche_plus_minus](../Bilder/RF_Scout_Icon_search_plus_minus.png
 "Search plus Search minus")

In der Zeitskala erscheint das :fontawesome-solid-search-plus: Icon zudem. Hier ist es ein Mauszeiger, mit dem, mittels dem Mausrades, gezoomt werden kann. Siehe hierzu auch [1:1](#text-as-button)

![Icon_zoom_zeitskala](../Bilder/RF_Scout_Icon_zoom_zeitskala.png
 "Zoom Zeitskala")

In der "Workload Process" Tabellenspalte erscheint das :fontawesome-solid-search-plus: Icon zudem. Hier ist es ein Mauszeiger,

![Icon_zoom_zeitskala](../Bilder/RF_SCOUT_Icon_zoom_worloadprocess.png)

wird an dieser Stelle der aktiv Mausbutton gedrückt, wird das Diagramm in einem zusätlichen Fenster vergrößert dargestellt.

![Icon_zoom_zeitskala](../Bilder/RF_SCOUT_Icon_zoom_worloadprocess_offen.png)

## Save
:fontawesome-solid-save: Das Save Icon speichert Änderungen im Costumer Mode der Process Analysis.

![Icon_Save](../Bilder/RF_Scout_Icon_save.png "Save Icon")

## Chart bar
:fontawesome-solid-chart-bar: Dieses Icon öffnet die "Edit Signal Selection" Anzeige im Signalyser.

![Icon_Chart_bar](../Bilder/RF_Scout_Icon_chart-bar.png "Edit Signal Selection")

## Setting
:fontawesome-solid-cog: Wird dieses Zahnradicon gedrückt öffnet sich immer ein Dialog um zusätliche Einstellungen vornehmen zu können.

![Icon_Setting](../Bilder/RF_Scout_Icon_cog.png "Setting Icon")

## Dark mode
:fontawesome-solid-moon: :fontawesome-solid-sun: Diese zwei Icons sind Wechselicons. Wird das :fontawesome-solid-moon: Icon gedrückt wechselt es zum :fontawesome-solid-sun: Icon und umgekehrt. Die Optik der Anwendung kann mit diesen Icons auf Darkmode umgestellt werden.

## Liste Einklappen und Ausklappen
![](../Bilder/einklappen_primary.fa02e0a4.svg){: style="width:25px"}
![](../Bilder/ausklappen_primary.09cf35c7.svg){: style="width:25px"}

Diese zwei Button öffnen alle Kindelemente einer Anzeige. Einzelne Kindelemente in der Anzeige können mit dem [:fontawesome-solid-caret-right: und :fontawesome-solid-caret-down:](#caret-down-und-caret-up) Icon angezeigt bzw. geöffnet werden.

![Icon_Einklappen](../Bilder/RF_SCOUT_einklappen_primary.png "Alle Kindelemente Ausblenden")

![Icon_Ausklappen](../Bilder/RF_SCOUT_ausklappen_primary.png "Alle Kindelemente Anzeigen")

## Checkbox
![](../Bilder/checkbox_checked_primary.f0678640.svg){: style="width:25px"}
![](../Bilder/checkbox_checked_secondary.e5b8561c.svg){: style="width:25px"}
![](../Bilder/checkbox_secondary.ca8b606f.svg){: style="width:25px"}
![](../Bilder/checkbox_primary.ac154ac6.svg){: style="width:25px"}

Die Checkbox Button stehen in Verbindung mit den [Filter Buttons](#filter), dem [Edit Curve Button](#edit-curve) und dem [Costumer Mode](#benutzeransicht). Im Costomer Mode werden mit dem Checkbox Button ausgewählte Elemente in diesen übernommen. In Kombination mit den Filter Buttons können Elemente in Anzeigenbereich ein und unsgeblendet werden.

## Filter
![](../Bilder/no_filter_primary.d864d568.svg){: style="width:25px"}
![](../Bilder/no_filter.81583707.svg){: style="width:25px"}
![](../Bilder/filter_checked_2_primary.3f87db0d.svg){: style="width:25px"}
![](../Bilder/filter_checked_2.d2d972f5.svg){: style="width:25px"}
![](../Bilder/filter_unchecked_3_primary.8332adcf.svg){: style="width:25px"}
![](../Bilder/filter_unchecked_3_secondary.aa9edac0.svg){: style="width:25px"}

Die Filter Buttons stehen in Verbindung mit den [Checkbox Button](#checkbox). Es sind drei Wechselbutton die in der folgenden Reihenfolge wechseln:

![](../Bilder/no_filter_primary.d864d568.svg){: style="width:1em"}
![](../Bilder/filter_checked_2_primary.3f87db0d.svg){: style="width:1em"}
![](../Bilder/filter_unchecked_3_primary.8332adcf.svg){: style="width:1em"}

Wird mit der Maus über den aktiven Button gefahren zeigt das System den nachfolgenden Button an, der bei einem Drücken des aktiven Buttons aktiv werden würde.

![](../Bilder/no_filter_primary.d864d568.svg){: style="width:1em"}
Dieser Button deaktiviert den Filter. Es werden alle ausgewählten und nicht ausgewählten Elemente im Anzeigenbereich angezeigt.

![Button_Filter_off](../Bilder/RF_SCOUT_Button_filter_off.png "Filter ist ausgeschaltet")

![](../Bilder/filter_checked_2_primary.3f87db0d.svg){: style="width:1em"}
Dieser Button aktiviert den Select-Filter. Es werden alle, mittels Checkbox Button, ausgewählten Elemente angezeigt.

![Button_Filter_select](../Bilder/RF_SCOUT_Button_filter_select.png "Filter ist auf ausgewählte angeschaltet")

![](../Bilder/filter_unchecked_3_primary.8332adcf.svg){: style="width:1em"}
Dieser Button aktiviert den Unselect-Filter. Es werden alle, mittels Checkbox Button, ausgewählten Elemente ausgeblendet.

![Button_Filter_unselect](../Bilder/RF_SCOUT_Button_filter_unselect.png "Filter ist auf nicht ausgewählte angeschaltet")

## Edit Curve
![](../Bilder/edit_curve2.add636c5.svg){: style="width:25px"}
![](../Bilder/edit_curve2_inactive.a937cf91.svg){: style="width:25px"}

Die Edit Curve Buttons stehen in Verbindung mit den [Checkbox Button](#checkbox). Mit dem Checkbox Button ausgewählten Signalkurven können nach dem Drücken des Edit Curve Button visuell verändert werden. Hierzu öffnet sich eine Fenster zum Editieren der Signale.

![Button_Edit_curve_fenster](../Bilder/RF_SCOUT_set-options_for_selected_signals.png "Set Options for selected Signals")

## Aktivitätendiagramm
![Aktivitätendiagramm Button aktiv](../Bilder/Aktivitaetsdiagramm.1201bdc4.svg){: style="width:25px"}
![Aktivitätendiagramm Button inaktiv](../Bilder/Aktivitaetsdiagramm_inaktiv.cae285b2.svg){: style="width:25px"}

Der Button aktiviert bzw. deaktivieren das Activity Diagram. Es zeigt alle Aktivitäten an, die durch eine Analyse oder einer geladenen Ergebnis Datei vorhanden sind.

## Ablaufdiagramm
![](../Bilder/Ablaufdiagramm.db400b3b.svg){: style="width:25px"}
![](../Bilder/Ablaufdiagramm_inaktiv.eddc2374.svg){: style="width:25px"}

Der Button aktiviert das Part Tracing Diagram. Es zeigt alle Aktivitäten an, die durch eine Analyse oder einer geladenen Ergebnis Datei vorhanden sind. Hierbei werden wiederholende Abschnitte farblich gekennzeichnet.

## Taktzeit-Diagramm
![](../Bilder/Taktzeit-Diagramm.86f7b847.svg){: style="width:25px"}
![](../Bilder/Taktzeit-Diagramm_inaktiv.c08e63cc.svg){: style="width:25px"}

Der Button aktiviert das [∅](#bezeichner) Cycle Timing. Es zeigt alle Aktivitäten an, die durch eine Analyse oder einer geladenen Ergebnis Datei vorhanden sind. Hierbei werden wiederholende Abschnitte als Durchschnitt zusammengerechnet und als Minimum, Durchschnitt und Maximum farblich in der Anzeige gekennzeichnet.

## Auslastungsdiagramm
![](../Bilder/Auslastungsdiagramm.4880f38f.svg){: style="width:25px"}
![](../Bilder/Auslastungsdiagramm_inaktiv.fa448742.svg){: style="width:25px"}

Der Button aktiviert das Workload Diagram. Es zeigt alle Aktivitäten an, die durch eine Analyse oder einer geladenen Ergebnis Datei vorhanden sind. Die Anzeige ist identisch mit dem [Ablaufdiagramm](#ablaufdiagramm), es wird zudem eine Spalte mit der Auslastung angezeigt.

## Benutzeransicht
![](../Bilder/CustomMode_new.a75b51e2.svg){: style="width:25px"}
![](../Bilder/CustomMode_new_inactive.4f5aa9dd.svg){: style="width:25px"}

Der Button aktiviert den Customer Mode. Es wird ein zusätzlicher Anzeigebereich geöffnet in dem der Benutzer einzelne Aktivitäten aus dem [Aktivitätendiagramm](#aktivitätendiagramm) mittels den [Checkbox Button](#checkbox) oder verschieben der übernehmen und später mit dem [Save Icon](#save) speichern kann.

## Roboter
![](../Bilder/Roboter_32x32_red.a7737167.svg){: style="width:25px"}
![](../Bilder/Roboter_32x32_green.9e40da35.svg){: style="width:25px"}

Ist das Roboter Symbol grün, zeigt es einen Roboter an der keinen Kollisions-Status mit einem anderen Roboter hat bzw. haben könnte.
Ist das Roboter Symbol rot, zeigt es einen Roboter an der einen Kollisions-Status mit einem anderen Roboter hat bzw. haben könnte. Ein rotes Roboter Symbol muss, in der Robot Collisions Status Grafik, immer in Verbindung mit einem weiteren roten Roboter Symbol haben
Ist das Robotor Symbol schwarz, nur in der Robot Collisions Status Grafik, zeigt es einen Roboter an der nicht mit in der Signaldatei mit aufgezeichnet wurde.

## 1:1
Wird der Text "1:1" am rechten Ende in einer Zeitskala gedrückt wird eine vorher gezoomte Zeitskala zurückgesetzt.

![Icon_zoom_zeitskala](../Bilder/RF_Scout_Icon_zoom_zeitskala.png
 "Zoom Zeitskala")

## Einheiten
- **h** (Stunden): bedeutet die angezeigte Zahl ist eine Stunden Angabe
- **min** (Minuten): bedeutet die angezeigte Zahl ist eine Minuten Angabe.
- **sec**, **S** und **[s]** (Sekunden): bedeutet die angezeigte Zahl ist eine Sekunden Angabe.
- **ms** (Millisekunden): bedeutet die angezeigte Zahl ist eine Millisekunden Angabe.
- **AM** (Ante Meridiem): bedeutet "vor dem Mittag".
- **PM** (Post Meridiem): bedeutet "nach dem Mittag".

## Bezeichner
- **∅** (Durchschnitt): bedeutet die angezeigte Zahl ist ein Durchschnittswert.
- **\#** (Anzahl): bedeutet die angezeigte Zahl ist eine Anzahl von Elementen
- **Max.** (Maximal): bedeutet die angezeigte Zahl ist ein maximal Wert.
- **Min.** (Minimal): bedeutet die angezeigte Zahl ist ein minimal Wert.