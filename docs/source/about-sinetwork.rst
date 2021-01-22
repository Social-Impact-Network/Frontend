.. Social Impact Network Documentation documentation master file, created by
   sphinx-quickstart on Mon Jan 18 17:17:55 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

===========================
About Social Impact Network
===========================

Basic Facts
-----------

#. Proceeds from the sale of Social Impact Tokens (SI Token) are collected in a smart contract and used by international aid organizations (e.g. UNDP) to fund sustainable projects.
#. All projects are investment projects with a positive return on investment (average >6%) and a positive social character (e.g. installing solar plants in developing countries).
#. Aid organizations (e.g. UNDP) coordinate each of the projects.
#. The token price of SI Token is calculated through a decentralized procedure according to the `Net Asset Value <https://www.investopedia.com/terms/n/nav.asp>`_.
#. Dividend payments are regularly initiated by the beneficiaries of the projects in `DAI (Stablecoin) <https://medium.com/mycrypto/what-is-dai-and-how-does-it-work-742d09ba25d6>`_ through SI token to investors.
#. The SI Network operates several social impact projects. Investors of the SI Token participate in the performance, risks and profits of all projects.
#. All project impact values (e.g. KwH generated, Co2 avoided) are stored in a tamper-proof database.
#. Each of the project's impact values are publicly viewable and are not stored in an encrypted format.
#. Anyone can operate a Social Impact Node (SI node) to increase the security and availability of stored impact values.
#. The operation of an SI node usually has no regulatory implication and no direct financial benefit for the operator.
#. The SI Token is a security token under European law. Buying and selling may be restricted in some countries.
#. The admission of new social investment projects to the Social Impact Network is currently done exclusively by the Social Impact Network Team.


Technical structure of the Social Impact Network
-------------------------------------------------

.. image:: http://www.plantuml.com/plantuml/png/hSq_IyP030RmFPyY70xlEtbTEhzJeKD5Q3TnECyWfVUd93bKIh-xY8gs1HTzfl3ZIN8HTQmb1f2PHoMyUYWo9XAvvUn91E-g-gMghwlw7XTeTlaRs0FOJx3VEO3Tm_76xr-Q_uCL09YyklGK20tssOykO1jdvnLlI9ypJmONm1-jRMd84oKyzUt7T3QuAG_iaioEAUdNHaTE2bDyfzFGTjY_Yb8y6rZXGkcnnF06
    :alt: Basic overview

The structure of Social Impact Network is simple to understand.
It consists of a smart contract component that implements the logic of the fully automated funding process on the public blockchain (Ethereum). 
The entire security is digitally represented by the`Social Impact Token (SI Token) <https://github.com/Social-Impact-Network/Frontend>`_.
Additionally, there is a `transparent Impact Measurement System (TIM) <https://github.com/Social-Impact-Network/Frontend>`_ that securely stores the `impact values <https://github.com/Social-Impact-Network/Frontend>`_ of each funded project.
This structure makes the funding and impact measurement processes more transparent, automated and secure. It offers investors the advantages
of easy tradability of digital securities and authentically demonstrate positive social impact with traceable impact values. 


.. list-table:: Elemente des Social Impact Networks
   :widths: 25 25 50
   :header-rows: 1

   * - Element
     - Repository
     - Beschreibung
   * - Platform (Frontend)
     - `GitHub <https://github.com/Social-Impact-Network/Frontend>`_
     - SI platform (frontend) allows easy interaction with the `SI token <https://github.com/Social-Impact-Network/Frontend>`_ and the `TIM <https://github.com/Social-Impact-Network/Frontend>`_.
   * - Solar-Impact-Bridge
     - `GitHub <https://github.com/Social-Impact-Network/SPMonitorBridge-Server>`_
     - Solar-Impact-Bridge receives the impact values of PV systems and stores them in the decentralized BigChainDB network.
   * - SI Node
     - Link...
     - SI nodes are BigchainDB nodes that are responsible for the decentralized storage of impact values.
   * - SI Token/Smart Contract 
     - `GitHub <https://github.com/Social-Impact-Network/Token>`_
     - SI Token Smart Contract is responsible for receiving funds, issuing SI Tokens (ERC20), distributing the invested funds and paying out dividends to the investors.

Social Impact Token (SI Token)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. warning:: Currently, only the Social Impact Prototype Token (SIP Token) exists. See `SIP Token <https://github.com/Social-Impact-Network/Frontend>`_

SI Token is an ERC-20 token on the Ethereum network.
SI Token represents a security and is equivalent to an investment in a certificate of obligation (european law).
The investor receives the SI Token when making an investment through the official SI platform. The token can be traded through decentralized exchanges.
The collected financial resources of the SI Token are used by aid organizations (such as UNDP) for the implementation of sustainable projects.  
Dividends are also distributed via the smart contracts. The investments are denominated in USD. Deposits and withdrawals are processed in the form of ETH and DAI via the smart contract.
As an ERC20 token, the SI token can be freely transferred within the Ethereum network.
The entire funding and distribution process as well as further details about the SI token can be read `here <https://github.com/Social-Impact-Network/Frontend>`_.

Transparent Impact Measurement System (TIM System)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. warning:: Currently, the Impact Measurment System can only store data from solar projects

TIM is responsible for storing `impact values <https://github.com/Social-Impact-Network/Frontend>`_ of the individual projects.
The impact values are essentially any data that can be used to measure the positive social impact 
(e.g., CO2 saved, energy generated) and financial performance of the projects (e.g., APY).
TIM stores this data and other general project data in a decentralized, public, immutable database (BigChainDB).
Each SI node maintains a full copy of the database. Multiple independent SI nodes ensure that the stored data cannot be tampered 
Help us protect the Social Impact Network by`Setting Up a SI Node <https://github.com/Social-Impact-Network/Frontend>`_.


