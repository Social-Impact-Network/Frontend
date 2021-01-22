.. Social Impact Network Documentation documentation master file, created by
   sphinx-quickstart on Mon Jan 18 17:17:55 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

===================================
Social Impact Platform (Frontend)
===================================

//Grafik

Die SI Platform stellt die Benutzerobfläche für die Komponenten SI Token und das Transparent Impact Measurment System (TIM) dar, um sie einfach und intutitiv bedienen zu können.
Alle dynamischen Informationen, die auf der SI Platform dargestellt werden, stammen aus dezentralen Netzwerken (Ethereum, BigChainDB). Es wird keine zentralisierte, lokale Datenbank verwendet.
Die gesamte SI Platform kann somit lokal und ohne zusätzliche lokale Datenbank aufgesetzt werden. 

Die SI Platform enthält folgende Funktionen um mit dem Smart Contract zu interagieren:

*  MetaMask Einbindung
*  Investieren (in ETH oder DAI)
*  Erhalt von Token (SIP)
*  Auszahlung an Projektbegünstigte
*  Zins- und Rückzahlung durch Projektbegünstigte (in DAI)
*  Zins- und Rückzahlungsanspruch durchsetzen und Auszahlung veranlassen (in DAI)

Für die Darstellung der Impact Werte greift die SI Platform auf den `SI Node des Social Impact Netzwerks <https://github.com/Social-Impact-Network/Frontend>`_ zu.


Deploying SI Platform lokal
----------------------------

VERWEIS ZU README??? oder reinkopieren aus README?

Um die SI Platform lokal aufzusetzen, kann das bereits gebuildete Projekt aus dem Github repository deployt werden.

*  Klone das Github repository

//Hier befehl (git clone)

*  Falls `serve <https://github.com/Social-Impact-Network/Frontend>`_ auf deinem Rechner nicht installiert ist, installiere es wie folgt:

//Hier befehl npm install -g serve

*  Nun kannst du das Frontend erfolgreich deployen

[serve -s dist]

