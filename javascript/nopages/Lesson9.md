---
layout: default
title: Lesson 9
nav_order: 90
---

<link type="text/css" rel="stylesheet" href="../style/main.css" />
<script src="../javascript/util.js"></script>

# RDF Schema

<div id='bms_infobox'></div>

## Resources
* [PDF]
* [Video]

## Questions and answers

Q&A for those following the lessons on their own or enrolled in a regular university course. Thess Q&A aim to validate a basic understanding of concepts discussed during the lecture; the use of such concepts is beyond the scope of this study set. 

Keywords: RDF, RDF schema, Classes, Properties


<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
What would be a key difference between RDF syntax and RDF schema?
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    RDF syntax works with statements while RDF schema introduces classes, useful for creating vocabularies and later for data validation and reasoning
</div>

<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
What are some of the different formats/notations/serialization of RDF?
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    RDF/XML, Turtle, N3, JSON-LD
</div>

<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
What are the collections supported in RDF/RDF-schema?
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    Sequences (order matters), bags (order does not matter) and alternatives (one of many). Lists are also possible (but no part of the rdfs:Container family) and ad-hoc collections (via rdf:parseType="Collection")
</div>

<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
What are the main elements in RDF/RDF-schema when creating vocabularies?
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    Classes rdfs:Class, rdf:Property, rdfs:DataType, rdfs:Literal together with properties rdf:type, rdf:partOf, rdf:subClassOf and rdf:subPropertyOf
</div>

<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
What is a blank node?
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    Entities or concepts with no URI as identifier but a local one (they can only be locally referenced)
</div>

<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
Which are the 5 stars by Sir Tim Berners Lee?
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    * availability on the web under an open format </br>
    ** structured data </br>
    *** non-proprietary format </br>
    **** URIs </br>
    ***** link to others
</div>

<script  type="text/javascript">
    let info = { 
        "name": 'RDF Schema', 
        "keywords": ['RDF', 'RDF schema', 'Classes', 'Properties'], 
        "description": 'In this lesson we will continue our journey on RDF, introducing more elements from RDFS and deepening into the possibilities it offers', 
        "teaches": ['Naming RDF-Schema elements such as classes, sequences or collections'
            , 'Using RDF-Schema to represent knowledge'
            , 'Contrasting the advantages and limitations of RDF-Schema' 
            , 'Comparing RDF vs RDF-Schema'
        ]
    }; 
    addMetadata(info);
    addInfoBox(info);
</script>
