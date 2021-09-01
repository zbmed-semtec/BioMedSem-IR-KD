---
layout: lesson
title: Lesson 8 - RDF
nav_order: 80

lesson:
    "name": 'Resource Description Framework RDF' 
    "keywords": 'RDF, RDF vocabularies, RDF serialization' 
    "description": 'In this lesson we will introduce RDF and name some advantages and disadvantages, all of it illustrated by practical examples' 
    "teaches": 
        - '"Stating what the Resource Description Framework is about"'
        - '"Explaining the main elements in RDF"'
        - '"Illustrating via diagrams the sort of statements that can be modelled with RDF"'
        - '"Naming the different serializations for RDF graphs"'
        - '"Naming different ways to syntactically validate RDF data"'
        - '"Using RDF-XML serialization (and Turtle) to represent knowledge"'
        - '"Explaining how graph representations can be separated into RDF triples"'

resources:
    "pdf": '../lectures/Lesson-08-SemWeb-RDF.pdf'
    "video": '#video'

quizz:
    - "question": 'What are the main specifications used in the Resource Description Framework as a standard model for data interchange on the web?'
      "answer":   
        - 'RDF syntax (rdf), RDF Schema (rdfs) and XSD (xsd)'
    
    - "question": 'Name some possible uses of an rdf:Statement'
      "answer": 
        - 'In general, a statement established a relation (via the predicate) between a subject and an object. Some examples are'
        - 'Simple facts: car - is - red'
        - 'Database statements: x1 - hasValue - 0.5'
        - 'Facts from knowledge bases: Cat - isA - Carnivore'
        - 'Distributed information: BlueEye - isUser - Google'

    - "question":  'Name some of the possible notations/formats/serializations for RDF' 
      "answer": 
         - 'RDF/XML (based on XML)'
         - 'RDF/XML Abbrev (also based on XML, less verbose than RDF/XML)'
         - 'N-triples'
         - 'Turtle (commonly more human-readable and less verbose that the others)'
         - 'JSON-LD (based on JSON, multiple flavors are possible --compacted, extended, flattened)'

    - "question":  'How can you test whether your RDF syntax is correct?' 
      "answer": 
        - 'There are validations for different notations'

    - "question":  'What are the three elements present in an rdf:Statement?' 
      "answer": 
        - 'S-P-O: Subject (rdf:subject), predicate (rdf:predicate) and object (rdf:object)'

    - "question":  'What is an rdf:Property useful for?' 
      "answer": 
        - 'rdf:Properties allow us to express relations between concepts'

    - "question": 'What sort of rdf:Literal are available?'
      "answer": 
        - 'In general, any sort of string. rdf:Literal can be combined with XSD to express dates, numbers and so'
---


