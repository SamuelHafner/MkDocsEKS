
--8<-- "docs/.imports/rfscout/20.13.20/de/buttons/button_cycletiming.md"

In der Average Cycle Ansicht werden die durchschnittliche Taktzeit sowie die durchschnittliche relative Lage der Aktivitäten aller gefilterten Elemente zum Takt angezeigt. [^avgCycleTiming_1]
[^avgCycleTiming_1]: **Hinweis zur Berechnung:** Zu jedem Takt wird die relative Lage einer Aktivität ermittelt, d.h., die Lage und Daier einer Aktivität wird auf die jeweilige Taktdauer normiert.

Die folgende Abbildung zeigt ein nahezu ideales Ergebnis einer Taktzeitanalyse.

![RFScout Process Analysis Anzeigebereiche 2](Bilder/RF_SCOUT_process_analysis_anzeigebreich_zeitskala_cycletiming.png)

##### Interpretation der Durchschnittstaktzeit

Im gezeigten Beispiel dient das Signal des Rollenförderers 030RF_001 als Heartbeat Signal. Genau genommen ist es der Zeitpunkt, zu dem dieser Rollenförderer seine Aktivität beginnt. Der Heartbeat ist immer ein Zeitpunkt und keine Zeitspanne. Dieser Zeitpunkt definiert den Beginn eines Taktes und ist als blau-gestrichelte, vertikale Line dargestellt. Per Definition liegt diese Linie beim Zeitpunkt 0 s. Zusätzlich zur blauen Linie sind noch drei rot gestrichelte, vertikale Linien gezeigt. Die erste gibt Dauer und Lage des kürzesten, die mittlere des durchschnittlichen und die dritte des längsten Taktes an. Die blauen horizontalen Balken zeigen die durchschnittliche Dauer der Aktivität der dargestellten Komponenten an.

Warum gibt es einen negativen Zeitbereich? Die Stationen der betrachteten Zelle bewegen ein Teil strikt linear von Station zu Station. Station 030 definiert den Zeitpunkt 0. Damit Station 030 ein Bauteil an Station 040 übergeben kann, muss Station 040 das Bauteil aus dem vorangegangen Takt weitergegeben haben und muss somit vor Station 030 aktiv sein. Dieser zeitliche Vorlauf wird durch negative Zeiten für alle Stationen ausgedrückt, die in der Abfolge nach der Station 030 liegen, die das Heartbeat Signal stellt. Der Rollenförderer aus Station 040 beendet seine Aktivität unmittelbar vor Beginn des neuen Taktes und nimmt damit signifikanten Einfluss auf die Dauer eines Taktes.

Warum gibt es eine Lücke zwischen dem Ende der Roboteraktivitäten und dem Beginn des nächsten Taktes? In der Abbildung ist das durchschnittliche Ende der Roboteraktivitäten durch das Ende des Balkens zu Roboter 030_RB300 (Sekunde 145.95) und der Beginn des nächsten Taktes durch die durchschnittliche Taktdauer markiert (Sekunde 170.066). Das entspricht einer Lücke von durchschnittlich circa 24 Sekunden oder 14 %. Wie im letzten Absatz beschrieben, muss Rollenförder 030RF_001 auf den Rollenförderer aus Station 040 warten. Rollenförderer 040RF_001 wiederum wartet auf den Rollenförderer aus Station 050. Zumindest in der Durchschnittsbetrachtung ist dieser 52 Sekunden vor Beginn der Aktivität von 040RF_001 fertig und größer als die Lücke von 24 Sekunden. Hieraus lässt sich ein Optimierungspotential von bis zu 14 % zur Verkürzung der Taktdauer ableiten, indem Rollenförderer 040RF_001 früher gestartet wird.

##### Erläuterung zur Aktivitäten-Selektion

In der Zelle gibt es Komponenten, die nicht im Takt aktiv sind. Sie sind entweder nur ab und an aktiv oder zeigen eine Aktivität, die sich über viele Takte erstreckt. Hierbei handelt es sich zum Beispiel um Lineareinheiten oder Wechselvorrichtungen, die bei einem Typwechsel zum Einsatz kommen. Diese können durch einen besonderen Filter "Hide cross-over tasks" aus der Aktivitätsliste entfernt werden. Dies wird am Beispiel von Station 031 in den folgenden beiden Abbildungen gezeigt. Die erste Abbildung zeigt cross-over Tasks, in der zweiten sind sie ausgeblendet.

![RFScout Average Cycle Timing cross-over tasks 1](Bilder/RF_Scout_cross-over_tasks_shown.png)

![RFScout Average Cycle Timing cross-over tasks 2](Bilder/RF_Scout_cross-over_tasks_hidden.png)

Weiterhin kann man die Freitextsuche (Suchfeld) verwenden, um die Liste der angezeigten Komponenten einzuschränken und so eine fokussierte Betrachtung ermöglichen. Dies wird verstärkt, in dem man über das Icon :fa-eye: :fa-eye-slash: die Stationen ebenfalls ausblendet. Die folgende Abbildung zeigt eine ungefilterte Darstellung. Diese ist wesentlich unübersichtlicher als die weiter oben im Abschnitt gezeigt durchschnittliche Taktzeitanalyse.

![RFScout Process Analysis Anzeigebereiche 2](Bilder/RF_SCOUT_process_analysis_anzeigebreich_zeitskala_cycletiming_unfiltered.png)
