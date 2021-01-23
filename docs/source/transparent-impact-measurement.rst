==============================================
Transparent Impact Measurement System (TIM)
==============================================

.. warning:: Currently, SI Network only funds solar projects, therefore the Impact Measurment System only stores data from solar projects

Transparent Impact Measurement (TIM) ensures that the funded social impact projects can be examined for the expected social impact. At the same time, impact measurement makes it possible to keep track of the performance of the investment. Through impact measurements, the investor can understand even minor discrepancies between the expected impact and the achieved impact. This information enables the review of the social impact of the investment for third parties and at the same time this information can be used for trading and investment decisions. Impact values also include the financial performance of individual projects and are tracked in real time.
Impact values of all projects are publicly available.

Impact Values
-----------------
Impact values are all any data that can be used to assess direct positive environmental and social benefits (e.g., clean electricity generation in kWh). In addition, impact values are also financial indicators that can be used to assess the financial performance of funded SI Network projects (e.g. APY).

The following impact data is collected for all Social Impact Network projects:

.. list-table:: Impact Werte für alle Social Impact Projekte
   :widths: 50 50
   :header-rows: 1

 

   * - Value
     - Description
   * - Project description
     - A general description of the project, description of the implementing aid organization, beneficiary and social impact.
   * - News
     - Current news (e.g. installation status, payouts) of the project.
   * - Location
     - Location of the project implementation
   * - Project cost
     - The total cost of the project
   * - APY
     - Average annual APY over the lifetime of the project.

Additionally, the following impact values are stored for solar projects:

.. list-table:: Zusätzliche Impact Werte für Solarprojekte
   :widths: 50 50
   :header-rows: 1

   * - Value
     - Description
   * - Expected duration of the solar installation
     - Duration of the whole project
   * - Estimated energy generated per year
     - Amount of kwh generated on average per year by the project.
   * - Avoided CO2
     - Amount of CO2 (in KG) saved by the project over the entire project lifetime.
   * - System power
     - The maximum power of the solar system in kwp


Storage of Impact Values
----------------------------

// Grafik

SI Impact values are stored in a decentralized, publicly accessible database (BigChainDB). Everyone can operate an SI node and thus obtain a complete image of all impact values. The more independent SI Nodes participate in the Social Impact network, the more resistant against tampering the impact values are. By running an independent SI Node, the database becomes decentralized and protected from tampering. If you want to support SI network and protect impact values `create your own SI node <https://github.com/Social-Impact-Network/Frontend>`_ . A BigChainDB is used to store impact values. 
Querying impact values is performed through BigchainDB nodes (SI nodes). For a full explanation of BigChainDB and how it interacts with nodes, see `BigchainDB documentation <https://github.com/Social-Impact-Network/Frontend>`_.

Main REST API URLs
~~~~~~~~~~~~~~~~~~~~

Core Social Impact Network Team operate an SI node at `HERE URL <https://github.com/Social-Impact-Network/Frontend>`_. Impact values can be retrieved directly via this SI node or via other `active nodes <https://github.com/Social-Impact-Network/Frontend>`_ Main REST API URLs for retrieving impact values (JSON) via this SI node: 

.. list-table:: Wichtigsten API-URLs
   :widths: 50 50
   :header-rows: 1

   * - Description
     - URL
   * - list of all projects with associated Asset IDs
     - `HERE URL <https://github.com/Social-Impact-Network/Frontend>`_
   * - General Project data (impact values)
     - `HERE URL <https://github.com/Social-Impact-Network/Frontend>`_
   * - Current KwH data and news
     - `HERE URL <https://github.com/Social-Impact-Network/Frontend>`_


List of all projects with associated Asset ID
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A list of all projects can be found under the following link: `HERE URL <https://github.com/Social-Impact-Network/Frontend>`_ Each project is located with its associated asset ID in the JSON object as an array. You will find the asset IDs of all projects set up by the SI network in entry `Metadata <https://github.com/Social-Impact-Network/Frontend>`_.
Asset ID is the identifier of a project. When a project is created via a CREATE transaction, this unique Asset ID is assigned and cannot be changed.  The Asset ID can thus be considered equivalent to a unique Project ID. The list of all project asset IDs thus provides a list of unique project IDs. These project IDs can be used to uniquely identify the project.

Initialization of a project list
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To initialize a new project list, use  `create_project_list.js <https://github.com/Social-Impact-Network/Frontend>`_.

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
