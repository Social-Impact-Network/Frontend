.. Social Impact Network Documentation documentation master file, created by
   sphinx-quickstart on Mon Jan 18 17:17:55 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

===================
Social Impact Token
===================
.. warning:: Aktuell existiert ausschließlich der Social Impact Prototype Token (SIP Token). Siehe `SIP Token <https://github.com/Social-Impact-Network/Frontend>`_

Über den Social Impact Token (SI Token) werden die Zahlungsabläufe des Finanzierungsprozess (u.a. Investition, Allokation, Zins- und Rückzahlungen) abgebildet.
Bei dem SI Token handelt es sich um einen ERC20 Token auf der Ethereum Blockchain. Programmiert wurde der SI Token in Solidity.
Die gesamte Interaktion mit dem SI Token kann über die `SI Plattform (Frontend) <https://github.com/Social-Impact-Network/Frontend>`_ stattfinden.
Da der Token nach dem ERC20-Standard implementiert wurde können die Basisfunktionen (insb. Senden und Empfangen) auch über beliebige ERC20-ready Wallets durchgeführt werden.


Social Impact Prototyp Token (SIP Token)
----------------------------------------
Das Social Impact Network befindet sich aktuell in der Prototyp Phase. Zum Testen des Social Impact Networks und dessen Impact Measrument Systems, wurde 
ein Social Impact Protyp Token entwickelt.

Im Gegensatz zum Social Impact Token wurden hierbei einige vereinfachte Bedinungen geschaffen. Diese Bedinungen wurden insbesondere geschaffen um die regulatorischen Aspekte
von Security Tokens auf ein Minimum zu reduzieren.

Vereinfachte Bedinungen
~~~~~~~~~~~~~~~~~~~~~~~~
#. Die zugrundeliegende Schuldscheinverschreibung wird nicht öffentlich angeboten und kann nicht von jedermann gezeichnet werden.
#. Investoren und Projektbegünstigte sind bekannt und begrenzt. 
#. Die Hilfsorganisation und der Begünstigte sind identisch und wird einer natürliche Person innerhalb der UNDP Libanon sein.
#. Der Entgegennahme der Zeichnungssumme findet direkt über den Smart Contract in ETH oder DAI statt. Es wird kein externer Finanzdienstleister eingeschaltet.
#. Der Tokenwert ist auf 1$ festgelegt (1 SIP = 1$). Es findet keine Berechnung des `Asset Net value <https://github.com/Social-Impact-Network/Frontend>`_ statt
#. Es handelt sich um die Finanzierung eines Einzelprojekt und es werden keine weiteren Projekte über dieses Wertpapier/Token finanziert.
#. Die Projektlaufzeit des Einzelprojekts beschränkt sich auf 6 Monate.
#. Die Zins- und Rückzahlungen finden monatlich statt.  Die Rückzahlungen finden in 6 gleichen Raten statt. 
#. Die Zins- und Rückzahlungen werden den Investoren auf ihren Token gutgeschrieben und es muss über die Plattform die Auszahlung veranlasst werden.



Investions und Ausschüttungsprozess (SIP Token)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Grafik

.. note:: Der SI Token ist ein ausschüttender Token. Monatliche Zins- und Rückzahlungen werden den Investoren in DAI über den Token gutgeschrieben. Auszahlungen können jederzeit über die Plattform veranlasst werden.

#. Der (bekannte) Investor investiert über die `SI Plattform (Frontend) <https://github.com/Social-Impact-Network/Frontend>`_, und zahlt dabei in DAI oder Ether.
#. Die SI Tokens werden von dem Smart Contract generiert und an den Investor übertragen.
#. Die Gelder des Investors fließen danach (gemeinsam mit den Geldern der weiteren bekannten Investoren) an den bekannten Projektbegünstigten.
#. Gemeinsam mit einem Contractor errichtet der Projektbegünstigte eine Solaranalge für sich selbst.
#. Der Beneficary zahlt Zins- und Rückzahlungen monatlich direkt an den Smart Contract in DAI.
#. Die DAI werden Anteilig den Investoren gutgeschrieben.
#. Die Investoren können sich ihre gutgeschriebenen DAI jederzeit auszahlen lassen.



Smart Contract
~~~~~~~~~~~~~~

Die Grundfunktionalitäten des Smart Contract des SIP gleichen dem des SI Token.
Aufgrund der Vereinfachung entfallen Funktionen für die Berechnung der NetAssetValue. Es findet auch eine Vereinfachung statt, da bei dem SIP Token ausschließlich ein Einzelprojekt vorliegt.
Durch den Entfall der Fiat-Zahlungswege müssen jedoch zwei weitere Funktionen dem Smart Contract hinzugefügt werden:

.. list-table:: xxxx
   :widths: 50 50
   :header-rows: 1

   * - Methode
     - Erklärung
   * - Buy
     - Durch die Buy-Methode kann der bekannte Investor die SIP Token für Ether oder Dai kaufen. Diese Funktionalität wird in dem SI Token durch einen lizensierten Finanzpartner und vorgeschalteten KYC Prozessen abgebildet.
   * - Claim (Beneficary)
     - Der Beneficary kann die DAI der Investoren auszahlen, um Sie für die Finanzierung der Solar-Anlage zu verwenden

     
Vision Social Impact Token 
-----------------------

//Grafik: Beschreibung des Investionsprozesses FUND (allgemein)

Das grundlegene Konzept des Investments sieht vor, dass der Investor in einen Funding-Pool investiert. Für sein investment in diesen Pool erhält der Investor entsprechend dem Tokenpreis sowie der Investmentsumme SI Token.
Der Tokenpreis kalkuliert sich hierbei nach dem `Asset Net value <https://github.com/Social-Impact-Network/Frontend>`_ und gibt hierbei die echte Wertentwicklung der Projekte wieder.
Die Gelder des Funding-Pools werden von den autorisierten AID Organisitionen verwendet um geplante, nachhaltige Projekte mit einem definierten ROI (avg. >6%) umzusetzen.
Eine Liste der geplanten Projekte findet sich auf der `SI Plattform (Frontend) <https://github.com/Social-Impact-Network/Frontend>`_.
Dividenden aus den Investionsprojekten werden in regelmäßigen Abständen (typischerweise monatlich) in DAI an die Inestoren ausgeschüttet.


Investions und Ausschüttungsprozess (SI Token)
----------------------------------------------

//Grafik

.. warning:: Für den Investions und Ausschüttungsprozess des Social Impact Prototyp Token (SIP Token) klicke bitte `hier <https://github.com/Social-Impact-Network/Frontend>`_.

.. note:: Der SI Token ist ein ausschüttender Token. Regelmäßige (monatliche) Auszahlungen finden in DAI an den Halter des SI Token statt.

.. note:: Vorerst werden über das Social Impact Network ausschlielich erneuerbare Energie Projekte umgesetzt.



#. Der Investor kauft SI Token über einen lizensierten Partner oder über die SI Platform.
#. Die SI Tokens werden für den Investor erstellt (geminted) und an ihn versendet.
#. Die Gelder des Investors fließen  (gemeinsam mit den Geldern der weiteren Investoren) an die Aid Organization.
#. Gemeinsam mit einem Cotractor errichten die Aid Organization und der Contractor eine Solaranalge für einen vorgegebenen Beneficary.
#. Der Beneficary zahlt die erhaltene Energie an die Aid Organization.
#. Die Aid organization tauscht das Geld über einen Exchange in Dai.
#. Die DAI fließen zurück in den Smart Contract.
#. Die DAI werden anteilig an alle Investoren ausgeschüttet; Teile der Zahlungen werden für zukünftige Projekte einbehalten (reinvest).

/*Smart Contract
~~~~~~~~~~~~~~

Der Smart Contract verfügt über folgende Grundfunktionalitäten, die durch das Frontend ansteuerbar sind:

.. list-table:: Basisfunktionalität SI Smart Contract
   :widths: 50 50
   :header-rows: 1

   * - Methode
     - Erklärung
   * - Claim
     - Durch den Aufruf der Claim-Methode kann der Nutzer die erhaltenen DAI aus dem Social Impact Smart Contract auszahlen.
   * - Payout (Beneficary)
     - Der Beneficary kann mit dieser Methode den gewählten DAI Betrag an das Netzwerk senden*/