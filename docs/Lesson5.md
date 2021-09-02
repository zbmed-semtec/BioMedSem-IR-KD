---
layout: lesson
title: Lesson 5 - XML
nav_order: 50

lesson:
    "name": 'XML'
    "keywords": 'XML, XML validation DTD' 
    "description": 'In this lesson we will discuss about data formats on the Web, particularly XML and its validation via DTDs.' 
    "teaches": 
        - '"Explaining how XML formatting is used to represent data, e.g., from sets or graphs"'
        - '"Explaining the different elements of XML formatting"'
        - '"Assembling data in XML formats and distinguishing different approaches"' 
        - '"Judging the limitations of XML"'

resources:
    "pdf": '#pdf'
    "video": '#video'

quizz:
    - "question": 'Name some advantages of XML'
      "answer":   
        - 'XML enables data formatting'
        - 'XML is readable by humans and computers'
        - 'XML can be validated via DTDs'
        - 'XML enables data exchange'

    - "question": 'Name some limitations of XML'
      "answer":   
        - 'Semantics/Meaning is not fully supported by XML' 
        - 'Validations rules are totally external to an XML file'

    - "question": 'What are the main characteristics of XML (as a markup language)?'
      "answer":   
        - 'There is one main Element, the "root" Element'
        - 'Each Element is contained within two tags (one opening, one closing) indicating the name of the Element, e.g., <protein></protein>, <html></html>' 
        - 'The Elements can be named freely (as far as the syntax and encodign rules are respected)'
        - 'It is possible to have nested Elements'
        - 'Elements can have attributes, e.g., <Ingredient amount="500 g">'
        - 'XML is case sensitive, e.g., <Molecule> is different from <MOLECULE>'

    
    - "question": 'What is a DTD?'
      "answer":   
        - 'DTD corresponds to Document Type Defnition'
        - 'A DTD file defines some conditions for an XML file; for instance, it describes in which sequence XML elements are expected and what attributes are allowed' 
        - 'DTDs are useful to validate XML data'

---

