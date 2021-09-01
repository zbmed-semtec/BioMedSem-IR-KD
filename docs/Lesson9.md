---
layout: lesson
title: Lesson 9 - RDF Schema
nav_order: 90

lesson:
    "name": 'RDF Schema'
    "keywords": 'RDF, RDF schema, Classes, Properties' 
    "description": 'In this lesson we will continue our journey on RDF, introducing more elements from RDFS and deepening into the possibilities it offers'
    "teaches": 
        - '"Naming RDF-Schema elements such as classes, sequences or collections"'
        - '"Using RDF-Schema to represent knowledge"'
        - '"Contrasting the advantages and limitations of RDF-Schema"' 
        - '"Comparing RDF vs RDF-Schema"'

resources:
    "pdf": '#pdf'
    "video": '#video'

quizz:
    - "question": What would be a key difference between RDF syntax and RDF schema?
      "answer":  
        - 'RDF syntax works with statements while RDF schema introduces classes, useful for creating vocabularies and later for data validation and reasoning'

    - "question": What are some of the different formats/notations/serialization of RDF?
      "answer":  
         - 'RDF/XML, Turtle, N3, JSON-LD'

    - "question": What are the collections supported in RDF/RDF-schema?
      "answer":  
        - 'Sequences (order matters), bags (order does not matter) and alternatives (one of many). Lists are also possible (but no part of the rdfs:Container family) and ad-hoc collections (via rdf:parseType="Collection")'

    - "question": What are the main elements in RDF/RDF-schema when creating vocabularies?
      "answer":  
        - 'Classes rdfs:Class, rdf:Property, rdfs:DataType, rdfs:Literal together with properties rdf:type, rdf:partOf, rdf:subClassOf and rdf:subPropertyOf'

    - "question": What is a blank node?
      "answer":  
        - 'Entities or concepts with no URI as identifier but a local one (they can only be locally referenced)'

    - "question": Which are the 5 stars by Sir Tim Berners Lee?
      "answer":  
        - '* availability on the web under an open format'
        - '** structured data'
        - '*** non-proprietary format'
        - '**** URIs'
        - '***** link to others'
---



