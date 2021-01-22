==============================================
Transparent Impact Measurement System (TIM)
==============================================

.. warning:: Das Social Impact Network setzt aktuell ausschließlich Solarprojekte in Entwicklungsländern um. Das Impact Measurment ist dementsprechend aktuell auf Solarprojekte beschränkt

Das Transparente Impact Measurement System (TIM) stellt sicher, dass die finanzierten Social Impact Projekte, den erwarteten sozialen Impact besitzen. Gleichzeitig kann das Impact Measurement
verwendet werden um die Performance des Investments im Blick zu behalten. Durch das Impact Measurment kann der Investor bereits kleine Abweichungen zwischen
dem erwarteten und erreichten Impact nachvollziehen. Diese Informationen ermöglichen die Überprüfung des sozialen Impact der Investionen, gleichzeitig
können diese Informationen auch für Trading und Investitionsentscheidungen verwendet werden. Die Impact Werte beinhalten auch die Finanzperformance der einzelnen Projekte und werden in Echtzeit getrackt.

Die Impactwerte aller Projekte sind öffentlich einsehbar.

Impact Werte
------------
Als Impact Werte werden alle Werte verstanden, anhand welche der direkte positive Nutzen auf auf Umwelt und Soziales bewertet werden kann (z.B. grüne Stromerzeugung in kWh).
Darüber hinaus sind Impact Werte auch Finanzkennziffern, mit denen die finanzielle Performance der einzelnen Projekte bewertet werden können (z.B. APY).

Für alle Projekte des Social Impact Netwerks werden folgende Impact Daten erfasst:

.. list-table:: Impact Werte für alle Social Impact Projekte
   :widths: 50 50
   :header-rows: 1

   * - Datensatz
     - Beschreibung
   * - Projektbeschreibung
     - Eine allgemeine Beschreibung des Projektes, Beschreibung der ausführenden Aid Organisation, der Beneficary und des sozialen Impacts
   * - News
     - Aktuelle Nachrichten (z.B. Installationsstatus, Ausschüttungen) des Projekts
   * - Standort
     - Standort der Projektumsetzung
   * - Erwartete Laufzeit der Solaranlage
     - Laufzeit des gesamten Projekts
   * - Projektkosten
     - Die Gesamtkosten des Projekts
   * - APY
     - Durchschnittliche jährliche APY über die gesamte Projektlaufzeit



Zusätzlich werden für Solarprojekte des Social Impact Networks folgende Impact Werte gespeichert:

.. list-table:: Zusätzliche Impact Werte für Solarprojekte
   :widths: 50 50
   :header-rows: 1

   * - Datensatz
     - Beschreibung
   * - Estimated energy per year
     - Anzahl der kwh die durchschnittlich pro Jahr durch das Projekt erzeugt werden sollen
   * - Avoided CO2
     - Anzahl an CO2 (in KG) die durch das Projekt über die gesamte Projektlaufzeit gespart werden sollen
   * - System power
     - Die maximale Leistung der Solaranlage in kwp


Speicherung der Impact Werte
----------------------------

// Grafik

Die Impact Werte werden in einer dezentralen, öffentlich zugänglichen Datenbank (BigChainDB) gespeichert.
Jeder hat die Möglichkeit einen eigenen SI Node zu betreiben und somit ein komplettes Abbild aller Impact Werte zu erhalten.
Je mehr unabhänige SI Nodes am Social Impact Netzwerk teilnehmen, desto manipulationssicher sind die Impact Werte.
Durch den Betrieb eines unabhängigen SI Node, wird die Datenbank dezentralisiert und vor Manipulationen geschützt.
Falls du das SI Netzwerk unterstützen möchtest, `erstelle deinen eigenen SI Node <https://github.com/Social-Impact-Network/Frontend>`_ und schütze die Impact Werte des SI Netzwerks.
Für die Speicherung der Impact Werte wird eine BigChainDB verwendet. Die Abfrage der Daten findet somit über BigchainDB Nodes (SI Nodes) statt.
Für eine vollständige Erklärung zu BigChainDB und wie du mit den Nodes interagieren kannst, lies bitte die `BigchainDB Documenation <https://github.com/Social-Impact-Network/Frontend>`_.

Wichtigste API-URLS
~~~~~~~~~~~~~~~~~~~~

Die Entwickler des Social Impact Network betreiben einen SI Node unter `HIER URL <https://github.com/Social-Impact-Network/Frontend>`_.
Die Impact Werte können direkt über diesen SI Node bezogen werden oder über einen anderen `aktiven Node <https://github.com/Social-Impact-Network/Frontend>`_

Die wichtigsten URLs zum Abruf der Impact Werte über diesen SI Node: 

.. list-table:: Wichtigsten API-URLs
   :widths: 50 50
   :header-rows: 1

   * - Beschreibung
     - URL
   * - Liste aller Projekte mit dazugehöriger Asset ID
     - `HIER URL <https://github.com/Social-Impact-Network/Frontend>`_
   * - Stammdaten eines Projekts (Impact Werte)
     - `HIER URL <https://github.com/Social-Impact-Network/Frontend>`_
   * - Aktuelle KwH Daten und News
     - `HIER URL <https://github.com/Social-Impact-Network/Frontend>`_


Liste aller Projekte mit dazugehöriger Asset ID
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Eine Liste aller Projekt kann unter folgendem Link abgerufen werden: `HIER URL <https://github.com/Social-Impact-Network/Frontend>`_
Die einzelnen Projekte befinden sich mit der zugehörigen AssetID in dem JSON Objekt als Array.
Hierrunter finden sich die Asset IDs aller vom SI Network aufgesetzen Projekte unter dem Eintrag `metadata <https://github.com/Social-Impact-Network/Frontend>`_

Als AssetID wird die Kennung eines Projekts verstanden. Bei der Anlage eines Projekts über eine CREATE Transaktion wird diese einzigartige AssetID vergeben, die sich nicht verändert. 
In diesem Fall kann die Asset ID somit einer eindeutigen Projekt-ID gleichgesetzt werden
Durch die Liste aller Projekt Asset IDs wird somit eine Liste von eindeutigen Projekt IDs ausgegeben.
Diese Projekt IDs können verwendet werden um das Projekt eindeutig zu identifizieren.

Initialisierung einer Projektliste
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Für die Initialisierung einer neuen Projektliste, benutze das Skript `create_project_list.js <https://github.com/Social-Impact-Network/Frontend>`_

Projektdaten
~~~~~~~~~~~~

Die Stammdaten eines Projekts können mithilfe der AssetID abgerufen werden. Dabei wird auf die CREATE Transaktion, die das Projekt angelegt hat, zugegriffen.
Die Stammdaten (z.B. Beschreibung, Laufzeit) des Projekts sind nachträglich nicht änderbar.
Änderungen bei den Projekten können nur über die News Funktion mitgeteilt werden.
Hierzu wird folgender Link verwendet: `URL <https://github.com/Social-Impact-Network/Frontend>`_
Um Beispielsweise die Projektdaten des Projekts mit der Asset ID `ASSET <https://github.com/Social-Impact-Network/Frontend>`_ über den SI Node des
Social Impact Networks abzurufen, kann folgender Link verwendet werden: `URL <https://github.com/Social-Impact-Network/Frontend>`_
Die Projektdaten finden sich unter `asset, data <https://github.com/Social-Impact-Network/Frontend>`_

Anlage eines Projekts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Für die Anlage eines neuen Projekts, benutze das Skript `create_new_project.js <https://github.com/Social-Impact-Network/Frontend>`_

Solar Impact Werte und News auslesen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Um spezifische Impact Werte für Solarprojekte auszulesen wird die letzte UPDATE Transaktion einer AssetID aufgerufen. `Asset ID <https://github.com/Social-Impact-Network/Frontend>`_
Aus dieser Transaktion kann ausgelesen werden wie viel Solarenergie von dem Solaranlagenprojekt erzeugt wurden (khw), sowie weitere statistische Solardaten.
Gleichzeitig finden sich unter dem Eintrag  `events.news <https://github.com/Social-Impact-Network/Frontend>`_ die aktuellen und vergangenen Nachrichten zu dem Projekt.
Um den letzten Eintrag in der Datenbank über den SI Node des Social Impact Networks abzurufen, kann folgender Link verwendet werden: `URL <https://github.com/Social-Impact-Network/Frontend>`_

Solar Impact Werte hinzufügen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Um neue Solar Impact Werte zu einem Projekt hinzuzufügen, schau dir das folgende Skript an. `push_impact_measurement.js <https://github.com/Social-Impact-Network/Frontend>`_
Für Solaranlagen mit SunnyPortal Wechselrichter, check die folgende repository ab.  `SPMonitorBridge <https://github.com/Social-Impact-Network/Frontend>`_

Social Impact Nodes
--------------------
Social Impact Nodes (SI Nodes) ermöglichen das authentische Speichern der Impact Werte durch dezentrale Speicherung.

Erstelle deinen eigenen SI Node
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. note:: In der aktuellen Prototyp Phase können keine externen Nodes hinzugefügt werden. Wenn wir dich informieren sollen, sobald du einen eigenen Nodes aufsetzen kannst, schreib uns mitte eine Email mit Betreff "Node aufsetzen" an `EMAIL <https://github.com/Social-Impact-Network/Frontend>`_ 

Das Aufsetzen eines eigenen Nodes unterstützt die Sicherheit der Impact Werte hilft damit dem gesamten Social Impact Networks.
Zum Aufsetzen eines eigenen Networks, folge bitte der Beschreibung der BigchainDB Dokumentation `URL <https://github.com/Social-Impact-Network/Frontend>`_.



List of active Nodes
~~~~~~~~~~~~~~~~~~~~

Hier findest du eine nicht abschließende Liste von aktiven Nodes.
Wenn du möchtest, dass dein SI Node der Liste hinzugefügt wird, schreibe uns bitte eine E-Mail an `Email <https://github.com/Social-Impact-Network/Frontend>`_.

.. list-table:: Liste bekanntester Nodes
   :widths: 25 25 25 25
   :header-rows: 1

   * - Typ
     - Owner
     - Link
     - Status
   * - Coordinator Node
     - Social Impact Network
     - `HIER URL <https://github.com/Social-Impact-Network/Frontend>`_
     - Active
   * - Node
     - Social Impact Network
     - `HIER URL <https://github.com/Social-Impact-Network/Frontend>`_
     - Active
