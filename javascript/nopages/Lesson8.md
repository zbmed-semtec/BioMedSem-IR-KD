---
layout: default
title: Lesson 8
nav_order: 80
---

<link type="text/css" rel="stylesheet" href="../style/main.css" />
<script src="../javascript/util.js"></script>

# Resource Description Framework (RDF)

<div id='bms_infobox'></div>

## Resources
* [PDF]
* [Video]

## Questions and answers

Q&A for those following the lessons on their own or enrolled in a regular university course. Thess Q&A aim to validate a basic understanding of concepts discussed during the lecture; the use of such concepts is beyond the scope of this study set. 

Keywords: RDF, RDF vocabularies, RDF serialization


<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
What are the main specifications used in the Resource Description Framework as a standard model for data interchange on the web?
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    RDF syntax (rdf), RDF Schema (rdfs) and XSD (xsd)
</div>

<label class="bms_question" id="bmsqa2" onclick="toggle('bmsqa2')">+ Show</label>
Name some possible uses of an rdf:Statement 
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    In general, a statement established a relation (via the predicate) between a subject and an object. Some examples are </br>
    * Simple facts: car - is - red </br>
    * Database statements: x1 - hasValue - 0.5 </br>
    * Facts from knowledge bases: Cat - isA - Carnivore </br>
    * Distributed information: BlueEye - isUser - Google </br>
</div>

<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
Name some of the possible notations/formats/serializations for RDF 
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    * RDF/XML (based on XML)</br>
    * RDF/XML Abbrev (also based on XML, less verbose than RDF/XML)</br>
    * N-triples</br>
    * Turtle (commonly more human-readable and less verbose that the others)</br>
    * JSON-LD (based on JSON, multiple flavors are possible --compacted, extended, flattened)
</div>

<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
How can you test whether your RDF syntax is correct? 
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    There are validations for different notations 
</div>

<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
What are the three elements present in an rdf:Statement? 
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    S-P-O: Subject (rdf:subject), predicate (rdf:predicate) and object (rdf:object) 
</div>

<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
What is an rdf:Property useful for? 
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    rdf:Properties allow us to express relations between concepts 
</div>

<label class="bms_question" id="bmsqa1" onclick="toggle('bmsqa1')">+ Show</label>
What sort of rdf:Literal are available? 
<div class='bms_answer' id='bmsqa1data' markdown='1'>
    In general, any sort of string. rdf:Literal can be combined with XSD to express dates, numbers and so 
</div>

<script  type="text/javascript">
    let info = { 
        "name": 'Resource Description Framework RDF', 
        "keywords": ['RDF', 'RDF vocabularies', 'RDF serialization'], 
        "description": 'In this lesson we will introduce RDF and name some advantages and disadvantages, all of it illustrated by practical examples', 
        "teaches": ['Stating what the Resource Description Framework is about'
            , 'Explaining the main elements in RDF'
            , 'Illustrating via diagrams the sort of statements that can be modelled with RDF'
            , 'Naming the different serializations for RDF graphs'
            , 'Naming different ways to syntactically validate RDF data'
            , 'Using RDF-XML serialization (and Turtle) to represent knowledge'
            , 'Explaining how graph representations can be separated into RDF triples'
        ]
    }; 
    addMetadata(info);
    addInfoBox(info);
</script>
