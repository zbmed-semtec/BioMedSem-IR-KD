---
layout: lesson
title: Lesson 11 - SPARQL
nav_order: 110

lesson:
    "name": 'RDF - SPARQL' 
    "keywords": 'SPARQL, Query language, endpoint' 
    "description": 'In this lesson we will query the Semantic Web with SPARQL, we will show some examples and explain the different query elements'
    "teaches": 
        - '"Naming the elements part of a SPARQL query"'
        - '"Explaining the relation between SPARQL and RDF / RDF-Schema"'
        - '"Using SPARQL queries to retrieve data from RDF graphs"' 
        - '"Comparing SPARQL queries as different possibilities can be used to answer the same question"'

resources:
    "pdf": '../lectures/Lesson-11-SemWeb-SPARQL.pdf'
    "video": '#video'


quizz:
    - "question": 'What is a triple store?'
      "answer":   
        - 'A triple store is a non-SQL graph-based database for the storage and retrieval of RDFtriples'
        - 'Commonly supporting all (or at least a couple) of the RDF available formats/syntaxes (i.e.  RDF/XML, JSON-LD, Turtle, N3)'

    - "question": 'What is SPARQL?'
      "answer":   
        - 'SPARQL Protocol And RDF Query Language is a query language for RDF data'

    - "question": 'What are the main parts of a SPARQL query?'
      "answer":   
        - 'SELECT and then optional the elements we want to retrieve'
        - 'WHERE and then the conditions of the retrieval'
        - 'Example: SELECT ?ingredient WHERE { ?pizza pizza:hasIngredient ?ingredient . }'
        - 'A <a href="https://query.wikidata.org/#SELECT%20%3Fprotein%20%3FproteinLabel%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fprotein%20wdt%3AP31%20wd%3AQ8054.%0A%7D%0ALIMIT%20100" target="_blank">Wikidata example</a>: '
        - 'SELECT ?protein ?proteinLabel WHERE {'
        - '  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". } '
        - '  ?protein wdt:P31 wd:Q8054. '
        - '}' 

    - "question": 'Name some SPARQL endpoints in the biomedical domain'
      "answer":   
        - '<a href="https://sparql.uniprot.org" target="_blank">UniProt</a>'
        - '<a href="https://sparql.bioontology.org" target="_blank">BioPortal</a>'
        - '<a href="https://query.wikidata.org/" target="_blank">Wikidata</a> (although this one covers more than the biomedical domain)'

    - "question": 'What is Wikidata?'
      "answer":   
        - 'Wikidata is a free and open knowledge base that can be read and edited by both humans and machines'
        - 'Wikidata acts as central storage for the structured data of its Wikimedia sister projects including Wikipedia, Wikivoyage, Wiktionary, Wikisource, and others'

---
