.. Social Impact Network Documentation documentation master file, created by
   sphinx-quickstart on Mon Jan 18 17:17:55 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

===========================
About Social Impact Network
===========================

Basic Facts
-----------

#. Einnahmen von verkauften Social Impact Token (SI Token) werden in einem Smart Contract gesammelt und von internationalen Aid Organizations (wie z.B. UNDP) verwendet um nachhaltige Projekte zu finanzieren.
#. Alle Projekte sind Investmentprojekte mit einem positiven Return-on-Invest (avg. >6%) und besitzen einen positiven sozialen Charakter (z.B. Errichtung von Solaranlagen in Entwicklungsländern).
#. Die Aid Organisationen (z.B. UNDP) sind die Koordinatoren der Projekte.
#. Der Tokenpreis des SI Token wird dezentral nach dem `Net Asset Value <https://www.investopedia.com/terms/n/nav.asp>`_ berechnet.
#. Rückzahlungen werden von den Begünstigten der Projekte regelmäßig in `DAI (Stablecoin) <https://medium.com/mycrypto/what-is-dai-and-how-does-it-work-742d09ba25d6>`_ über den Token an die Investoren veranlasst.
#. Das SI Network betreibt mehrere Social Impact Projekte. Investoren des Social Impact Token partizipieren an der Perfomance, an den Risiken und Gewinnen von allen Projekten.
#. Alle Impact Werte der Projekte (z.B. produzierte KwH, avoided Co2) werden in einer manipulationssicheren Datenbank gespeichert.
#. Alle Impact Werte des Projekte sind öffentlich einsehbar und werden nicht verschlüsselt gespeichert.
#. Jeder kann einen Social Impact Node (SI Node) betreiben, um die Sicherheit und Verfügbarkeit der gespeicherten Impact Werte zu erhöhen.
#. Der Betrieb eines SI Node ist regulatorisch unbedenklich und mit keinem direkten finanziellen Gewinn verbunden.
#. Es handelt sich bei dem Social Impact Token (SI Token) um ein Wertpapier Token nach europäischem Gesetz. Der Kauf- sowie Verkauf kann eingeschränkt sein.
#. Die Aufnahme neuer sozialer Investionsprojekte in das Social Impact Network wird aktuell ausschließlich von dem Social Imact Network Team durchgeführt.


Technische Struktur des Social Impact Networks
-----------------------------------

.. image:: http://www.plantuml.com/plantuml/png/hSq_IyP030RmFPyY70xlEtbTEhzJeKD5Q3TnECyWfVUd93bKIh-xY8gs1HTzfl3ZIN8HTQmb1f2PHoMyUYWo9XAvvUn91E-g-gMghwlw7XTeTlaRs0FOJx3VEO3Tm_76xr-Q_uCL09YyklGK20tssOykO1jdvnLlI9ypJmONm1-jRMd84oKyzUt7T3QuAG_iaioEAUdNHaTE2bDyfzFGTjY_Yb8y6rZXGkcnnF06
    :alt: my-picture1

Die Struktur des Social Impact Networks ist einfach zu verstehen.
Sie besteht aus einer Smart-Contract-Komponente, die die Logik des vollautomatisierten FInanzierungsprozess auf der öffentlichen Blockchain (Ethereum) abbildet. 
Somit wird das gesamte Wertpapier digital durch einen `Social Impact Tokens (SI Token) <https://github.com/Social-Impact-Network/Frontend>`_ dargestellt.
Zusätzlich gibt es ein `transparent Impact Measurement System (TIM) <https://github.com/Social-Impact-Network/Frontend>`_ , das die `Impact Werte <https://github.com/Social-Impact-Network/Frontend>`_ der finanzierten Projekte sicher speichert.
Durch diese Struktur werden  die Finanzierungs- und Impact Measurment Prozesse transparenter, automatisierter und sicherer. Sie bieten den Investoren die Vorteile
der einfachen Handelbarkeit der digitalen Wertpapiere und zeigen authentisch die positiven sozialen Auswirkungen mit belegbaren Werten. 


.. list-table:: Elemente des Social Impact Networks
   :widths: 25 25 50
   :header-rows: 1

   * - Element
     - Repository
     - Beschreibung
   * - Platform (Frontend)
     - `GitHub <https://github.com/Social-Impact-Network/Frontend>`_
     - Die SI Platform (Frontend) ermöglicht die einfache Interaktion mit dem `SI Token <https://github.com/Social-Impact-Network/Frontend>`_  und dem `TIM <https://github.com/Social-Impact-Network/Frontend>`_.
   * - Solar-Impact-Bridge
     - `GitHub <https://github.com/Social-Impact-Network/SPMonitorBridge-Server>`_
     - Die Solar-Impact-Bridge empfängt die Impact Werte der PV-Anlagen Projekte und speichert diese in der dezentralen BigChainDB Netzwerk.
   * - SI Node
     - Link...
     - Ein SI Node ist ein BigchainDB Node der für die dezentrale Speicherung der Impact Werte zuständig ist.
   * - SI Token/Smart Contract 
     - `GitHub <https://github.com/Social-Impact-Network/Token>`_
     - Der SI Token ist als Smart Contract umgesetzt. Der Smart Contract ist für die Annahme von Finanzierungsmittel, Ausgabe von SI Token (ERC20), Allokation der investierten Gelder, sowie Ausschüttungen an Investoren zuständig.

Social Impact Token (SI Token)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. warning:: Aktuell existiert ausschließlich der Social Impact Prototype Token (SIP Token). Siehe `SIP Token <https://github.com/Social-Impact-Network/Frontend>`_

Bei dem SI Token handelt es sich um einen ERC-20 Token auf dem Ethereum Netzwerk.
Der SI Token verkörpert ein Wertpapier und entspricht der Investition in eine Schuldscheindarlehen.
Der Investor erhält bei seiner Investition über die offizielle SI Plattform die SI Token. Gehandelt werden kann der Token über dezentrale Börsen.
Die vereinnahmeten finanziellen Mittel des SI Tokens werden von Aid Organizations (wie UNDP) für die Umsetzung von nachhaltigen Projekten verwendet. 
Ausschüttungen werden ebenfalls durch die Smart Contracts abgewickelt. Die Investitionen laufen auf der Nominalwährung USD. Einzahlungen und Auszahlungen werden in Form von Finanzinstrumenten ETH und DAI über den Smart-Contract abgewickelt
Als ERC20 Token kann der SI Token innerhalb des Ethereum-Netzwerks frei versendet werden.
Der gesamte Finanzierungsprozess und Ausschüttungsprozess und weitere Einzelheiten des SI Tokens können `hier <https://github.com/Social-Impact-Network/Frontend>`_ nachgelesen werden.



Transparent Impact Measurment System (TIM System)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. warning:: Aktuell kann das Impact Measurment System ausschließlich Daten zu Solarprojekten speichern

Das TIM ist für die Speicherung der `Impact Werte <https://github.com/Social-Impact-Network/Frontend>`_ der einzelnen Projekte zuständig.
Die Impact Werte sind hierbei grundsätzlich alle Daten, anhand der die der positive soziale Impact (z.B. gespartes CO2, erzeugte Energie) sowie die finanzielle Performance
der Projekte (z.B. APY) gemessen werden können.
TIM speichert diese Daten sowie weitere allgemeinen Projektdaten in einer dezentralen, öffentlichen, unveränderlichen Datenbank (BigChainDB).
Jeder Node enthält eine vollständige Kopie der Datenbank. Durch mehrere unabhängige Nodes wird sichergestellt, dass die gespeicherten Daten nachträglich nicht
verfälscht werden können.
Hilf uns das Social Impact Network zu schützen  und `setze einen eigenen SI Node auf <https://github.com/Social-Impact-Network/Frontend>`_.

