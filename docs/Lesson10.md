---
layout: lesson
title: Lesson 10 - OWL
nav_order: 100

lesson:
    "name": 'Ontologies -- OWL' 
    "keywords": 'Ontology, OWL' 
    "description": 'In this lesson we will move towards stronger semantics support with the introduction to reasoning, ontologies and OWL --- the Web Ontology Language'
    "teaches": 
        - '"Explaining the different ways to use logics for drawing conclusions from facts (i.e. fact representations)"'
        - '"Describing examples on conclusions that can be drawn from facts"'
        - '"Explaining how the modus ponens is used to draw conclusions from existing data"' 
        - '"Explaining the main elements in OWL for fact representations"'
        - '"Explain the benefits given from OWL format standards in comparison to the RDF representation of data"'

resources:
    "pdf": '#pdf'
    "video": '#video'

quizz:
    - "question": 'What is logical reasoning about?'
      "answer":   
        - 'Thanks to logical reasoning we can combine statements and derive facts from it.'
        - 'For example, if we have the statements "all cats are carnivores", "carnivores eat meat", "mice contain meat", we can conclude/derive that "(at least some) cats eat mice".'

    - "question": 'What sort of reasoning are included in knoweldge discovery?'
      "answer": 
        - 'Deductive reasoning: Derivation of true statements on the logical combination ofknown true statements (aka.  formal logics).'
        - 'Abductive reasoning:  Derivation of a more general (probably) true statement fromtrue observations in combination with background knowledge (i.e. expectation,aka. informal logics).'
        - 'Inductive reasoning:  Iterated observations support the more general statement(generalization derivation; caution:  the more general statement could still bewrong).'

    - "question": 'What elements does RDF offer that support reasoning?'
      "answer": 
        - 'Inheritance: subclasses and subproperties.'
        - 'Basic logical constructors: and, or, not, implication, equivalence.'
        - 'Constraints: all of the individuals, some of the individuals, at most X, etc.'

    - "question": 'What is an ontology in Computer Science?'
      "answer": 
        - 'An ontology is an electronic set of data, which describes a piece of reality.'

    - "question": 'What is OWL?'
      "answer": 
        - 'The Web Ontology Language, hast been introduced by the W3C as the standardfor the description of ontologies.'

---
