<p hidden>
Stand: 2020.08.24
Autor: D. Meißner (EKS-InTec)
Co-Autor: R. Driesang (EKS-InTec)
Übersetzung:
Dokumentenversion: 1.0
Anwendungsversion: 0.5.2.101
Anmerkungen:
</p>

@import "kopfzeile.md"

---
# Installations und Deinstallations Dokumentation {ignore=treu}

@import "TOC.md"

## Installation
Systemvoraussetzungen:
- Windows 10 Home, Pro, oder Enterprise, 64-Bit wird unterstützt.
- Prozessor, minimal Intel Core i3 optimal Intel Core i7.
- Arbeitsspeicher, minimal 4 GB optimal 8 GB.
- SSD Festplatte für die Erstinstallation, minimal 1 GB freier Speicher. Aus performance Gründen sollte eine SSD einer HDD vorgezogen werden.
- Dongle bzw. Lizenz um RF::SCOUT zu starten.

### Installationsprozedur
Nachfolgend werden die Installationsschritte und deren Informationsmeldungen beschrieben. Es beschreibt die Abfolge der Installation.

#### Welcome Screen
Informationen zu der zu installierenden Anwendung RF::SCOUT. An dieser Stelle wird die Versionsnummer der RF::SCOUT Anwendung angezeigt und die Information, dass alle offenen Anwendungen (hiermit sind alle offenen Anwendungen gemeint) geschlossen werden müssen. Die RF::SCOUT Versionnummer kann an dieser Stelle mit der Versionsnummer der Bestellung Versionsnummer überprüft werden.
![Welcome Screen](/Bilder/installation/RF_SCOUT_installation_01.png)
_Abbildung Installation: Welcome Screen_

#### License Agreement
Die nächste Abbildung zeigt die Informationen zu den Lizenzbedingungen. Diese müssen Akzeptiert werden um die Installation fortzuführen.
![License Agreement](/Bilder/installation/RF_SCOUT_installation_02.png)
_Abbildung Installation: License Agreement_

#### Select Destination Location
Wird RF::SCOUT erstmalig installiert, wird der Speicherort vom Benutzer abgefragt. Der Standard Speicherort ist ```C:\Program Files\EKS InTec\SCOUT```. Wird eine neue Version über eine ältere Version von RF::SCOUT installiert wird der existierende Speicherort der Erstinstallation verwendet. An dieser Stelle darf der Speicherort nicht die Laufwerksbezeichnung A: oder B: haben und muss ein internes Laufwerk sein.
![Select Destination Location](/Bilder/installation/RF_SCOUT_installation_03.png)
_Abbildung Installation: Select Destination Location_

#### Ready to Install
Der Installationsbildschirm zeigt an, dass RF::SCOUT installiert werden kann.
![Ready to Install](/Bilder/installation/RF_SCOUT_installation_04.png)
_Abbildung Installation: Ready to Install_

#### Installing
Die Installations Fortschrittsanzeige
![Installing](/Bilder/installation/RF_SCOUT_installation_05.png)
_Abbildung Installation: Installing_

#### Installation Microsoft Edge WebView2 Runtime
Die Anwendung RF::SCOUT benötigt den Edge WebView2 Runtime von Microsoft. Im installations Prozess wird geprüft ob der Edge WebView2 Runtime auf dem Gerät installiert ist und gegebenenfalls wird diese Mitinstalliert. Diese Prüfung kann auch im Hintergrund angestoßen worden sein und der Benutzer bekommt die Prüfung und installation von Edge WebView2 Runtime nicht mit.

![Microsoft Edge WebView2 Runtime Download](/Bilder/installation/RF_SCOUT_installation_06.png)
_Abbildung Installation: Microsoft Edge WebView2 Runtime Download_

1. Wenn Microsoft Edge WebView2 Runtime vorhanden ist, wird eine Information[^installation_2] ausgegeben:
![Microsoft Edge WebView2 Runtime vorhanden](/Bilder/installation/RF_SCOUT_installation_06_1.png)
_Abbildung Installation: Edge WebView2 Runtime vorhanden_
1. Wenn Microsoft Edge WebView2 Runtime nicht vorhanden, wird diese Anwendung installiert und bei erfolg die Information ausgegeben:
![Microsoft Edge WebView2 Runtime nicht vorhanden](/Bilder/installation/RF_SCOUT_installation_06_2.png)
_Abbildung Installation: Edge WebView2 Runtime nicht vorhanden_

[^installation_2]: In dem Informationsfenster steht die Anwendung "Microsoft Edge" dies ist nicht richtig, da es nicht "Edge" von Microsoft ist sondern "Edge WebView2 Runtime".
#### Completing
Installations Fertigstellungsanzeige mit der Möglichkeit bzw. Auswahl RF::SCOUT direkt zu starten.
![Completing](/Bilder/installation/RF_SCOUT_installation_07.png)
_Abbildung Installation: Completing_

#### Start
Ist die Installation korrekt gelaufen kann die Anwendung RF::SCOUT gestartet werden.
![Launch application](/Bilder/installation/RF_SCOUT_installation_08.png)
_Abbildung Installation: Launch application_
<!-- pagebreak -->
### Fehlermeldungen
Folgende Fehlermeldungen können wärend der Installation und dem Start von RF::SCOUT auftreten.

#### Fehlermeldungen Installation
Nachfolgend die Fehlermeldungen die bei einer Installation auftreten können.
##### Doppelte Installation
Diese Fehlermeldung erscheint wenn der Installationsprozess ein zweites Mal ausgeführt wird obwohl der erste noch nicht beendet wurde.
- Den zweiten Installationsprozess mit dem "OK" Button beenden.

![Doppelte Installation](/Bilder/installation/RF_SCOUT_error_installation_01.png)
_Abbildung Fehlermeldung: Doppelte Installation_

##### Anwendung läuft im Hintergrund
Diese Fehlermeldung erscheint wenn eine RF::SCOUT Anwendung wärend der Installation geöffnet ist.
- Daten in den, in den in der Meldung, angezeigten Anwendungen speichern und den Installationsprozess mit _Automatically close the applications_ fortführen.

![RF::SCOUT läuft im Hintergrund](/Bilder/installation/RF_SCOUT_error_installation_02.png)
_Abbildung Fehlermeldung: RF::SCOUT läuft im Hintergrund_

Wird RF::SCOUT nicht beendet und der Installationsprozess mit _Do not close the applications_ fortgeführt oder wird wärend des Installationsprozess RF::SCOUT gestartet, stoppt die Installation, da zu installierenden Dateien von RF::SCOUT im Zugriff sind.
![RF::SCOUT Installation gestoppt](/Bilder/installation/RF_SCOUT_error_installation_03.png)
_Abbildung Fehlermeldung: RF::SCOUT Installation gestoppt_
Es erscheint zudem die Meldung
![RF::SCOUT Installation gestoppt](/Bilder/installation/RF_SCOUT_error_installation_04.png)
_Abbildung Fehlermeldung: RF::SCOUT Installation Select action_
Ein _Cancel installation_ ist zwar möglich aber der Rollback löscht Programmteile von RF::SCOUT und die Anwendung ist dann nicht mehr funktionsfähig. Siehe hierzu [Missing Files](#missing-files).

![RF::SCOUT Installation Rollback](/Bilder/installation/RF_SCOUT_error_installation_05.png)
_Abbildung Fehlermeldung: RF::SCOUT Installation Rollback_

#### Fehlermeldungen Anwendungsstart
Nachfolgend die Fehlermeldungen die nach oder wärend des Starts von RF::SCOUT auftreten können.
##### Missing Microsoft Edge WebView2 Runtime
Die Anwendung RF::SCOUT findet die Anwendung Microsoft Edge WebView2 Runtime nicht.
- Installationsprozedur nochmals starten.
- Nachinstallation der Edge WebView2 Runtime Anwendung mit dem "Ja" Button der Meldung.

![Missing Microsoft Edge WebView2 Runtime](/Bilder/installation/RF_SCOUT_missing_ms_edge_01.png)
_Abbildung Fehlermeldung: Missing Microsoft Edge WebView2 Runtime_

##### Missing License
Es ist keine Lizenz vorhanden bzw. die Lizenz wird von RF::SCOUT nicht erkannt.
- Lizenz beantragen.
- Dongle prüfen.

![Missing License](/Bilder/installation/RF_SCOUT_missing_license_01.png)
_Abbildung Fehlermeldung: Missing License_

##### Missing Files
Die Anwendung RF::SCOUT findet Dateien nicht und startet inkorrekt
- Installationsprozedur nochmals starten.

![Missing Microsoft Edge WebView2 Runtime](/Bilder/installation/RF_SCOUT_missing_files_01.png)
_Abbildung Fehlermeldung: Missing Files_
<!-- pagebreak -->
---
## Deinstallation
Eine Deinstallation löscht das Verzeichnis, welches unter dem Punkt [Select Destination Location](#select-destination-location) bei der Installation angegebenen wurde.
Eigenständig erstellte Verlinkungen und das Lokale Verzeichnis ```C:\Users\%user%\AppData\Local\EKS\rfSCOUT``` wird bei einer Deinstallation nicht gelöscht.

Die Deinstallation kann entweder
- direkt im Verzeichnis der RF::SCOUT Anwendung über den Aufruf der Deinstallationsdatei _unins###.exe_[^deinstallation_1] oder
- in Windows unter _Apps & Features_

vorgenommen werden.
[^deinstallation_1]: Die Zeichen _###_ steht für eine dreistellige Nummer.

1. Aufruf über die Deinstallationsdatei
Im Installationsverzeichnis existiert eine _unins000.exe_ Datei. Wird diese aufgerufen startet die Deinstallation von RF::SCOUT.
![Deinstallation Apps & Features](/Bilder/installation/RF_SCOUT_deinstallation_01.png)
_Abbildung Fehlermeldung: Deinstallation Apps & Features_

1. Aufruf über Windows Apps & Features
![Deinstallation Apps & Features](/Bilder/installation/RF_SCOUT_deinstallation_02a.png)
_Abbildung Fehlermeldung: Deinstallation Apps & Features_
Windows Nachfrage ob die App wirklich gelöscht werden soll
![Deinstallation Apps & Features Nachfrage](/Bilder/installation/RF_SCOUT_deinstallation_02b.png)
_Abbildung Fehlermeldung: Deinstallation Apps & Features Nachfrage_

Nachdem der obere Deinstallationprozess gestartet wurde beginnt die mit der Nachfragemeldung ob RF::SCOUT deinstalliert werden soll.
![Deinstallation Nachfrage](/Bilder/installation/RF_SCOUT_deinstallation_03.png)
_Abbildung Fehlermeldung: Deinstallation Nachfrage_

Die Bestätigungsmeldung das  RF::SCOUT deinstalliert wurde.
![Deinstallation Successfully](/Bilder/installation/RF_SCOUT_deinstallation_04.png)
_Abbildung Fehlermeldung: Deinstallation Successfully_