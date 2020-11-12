### Analysis time range
Über die Einstellung des Analysis time range kann der darzustellende Zeitbereich über die Felder "Start [s]:" und "End [s]:" gewählt werden. Die Zeitangabe erfolgt in Sekunden.
Das Eingabeformat ist
```
 ####.##
```
Es ist zu beachten, dass dabei alle nicht vollständig im angegebenen Zeitfenster liegenden Aktivitäten ausgeblendet werden. Die Anzeige kann dadurch leer sein beziehungsweise der Anzeigenbereich richtet sich auch nach den Zeiten der Aktivitäten, die, diesem Schema folgend, in das Programm geladen wurden. Der tatächliche Startwert richtet sich dann nach dem frühesten Startwert der darzustellenden Aktivitäten und nicht exakt nach den Werten in den Eingabefeldern Start und End. Im dargestellten Beispiel wurde der Startwert 1000 Sekunden eingetragen, die erste vollständige Aktivität beginnt bei 1305.05 Sekunden. Die Zeitskala beginnt somit bei 1305.05 Sekunden und nicht bei 1000 Sekunden.

![RFScout Process Analysis Anzeigebereiche 2](Bilder/RF_SCOUT_analysistimerange_Zeitskala_1.png)

Der minimal Wert der eingegeben werden kann ist der minimalste Startwert eines geladenen Task. Der maximal Wert der eingegeben werden kann ist der maximalste Endwert eines geladenen Task.

#### Refresh Icon
Das :fontawesome-solid-undo: Icon setzt eine Eingabe eines Zeitbereichs zurück auf den Ausgangszustand und es wird der gesamte Zeitbereich angezeigt.

