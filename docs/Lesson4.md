---
layout: lesson
title: Lesson 4 - Set theory
nav_order: 40

lesson:
    "name": 'Set Theory'
    "keywords": 'Set Theory'
    "description": 'In this lesson we will introduce set theory (how sets are built and how they can be used) and how it connects to graphs. We will then apply this knowledge on sets and graphs to semantic similarity and corresponding measures.'
    "teaches": 
        - '"Understanding what a set is and how they are used in science and other general domains"'
        - '"Explaining how to build a set and how to perform basic operations on it"'
        - '"Explaining how data properties are used to form sets and then do calculations on them (e.g. similarity)"' 
        - '"Explaining what semantic similarity is with examples illustrating its usefulness"'
        - '"Distinguishing, comparing and using different approaches to semantic similarity"'

resources:
    "pdf": '#pdf'
    "video": '#video'

quizz:
    - "question": 'What is a set?'
      "answer":   
        - 'A collection of distinct unordered elements where all satisfy some specific common conditions/characteristics'
        - 'For example, the set of vertebrate animals comprises all those distinct animals that belong to the chordate subphylum Vertebrata'

    - "question": 'How is the set theory relevant to semantics'
      "answer":   
        - 'Semantic resources can be seen as sets and can be analyzed using methods from the set theory'
        - 'For instance, we can talk about subclasses is the way as we talk about subsets'

    - "question": 'What are some common operations between sets?'
      "answer":   
        - 'A union B, containing all distinct elements from A and B'
        - 'A intersection B, containing only the elements that appear in both A and B at the same time'

    - "question": 'What is semantic similarity?'
      "answer":   
        - 'Similarity across two entities based on their semantics/semantic charecteristics'

    - "question": 'Name the different types of semantic similarity'
      "answer":   
        - 'Semantic identity: two terms representing exactly the same concept'
        - 'Semantic similarity: two terms that are similar two each other so term A can replace term B withing the same context, e.g., sterling and euro are both currencies'
        - 'Semantic relatedness: two terms can be used in the same context but correspond to different functionalities, e.g., drink, dessert, meal'
        - 'Association: two terms relate to each other by any sort of relation, e.g., student is related to an educational institution'

    - "question": 'Name some similarity measures'
      "answer":   
        - 'Jaccard index, number of shared terms between A and B regarding the total number of exisisting terms in A and B'
        - 'Jaccard distance, 1 - Jaccard index, it measures the dissimilarity of two sets'
        - 'Tanimoto index, similar to the Jaccard index but both A and B must have the same size'
        - 'Cosine similarity, measure of the angle between two vectors in the same space'
---


