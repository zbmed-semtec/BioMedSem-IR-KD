let metadata = {
  "@context": "https://schema.org",
  "dc:conformsTo": "https://bioschemas.org/profiles/TrainingMaterial/0.9-DRAFT-2020_12_08/", 
  "@type": "LearningResource",

  "about": [
    {
      "@type": "DefinedTerm", 
      "@id": "http://edamontology.org/topic_0091",
      "inDefinedTermSet": "http://edamontology.org",
      "termCode": "topic_0091",
      "name": "Bioinformatics",
      "url": "https://bioportal.bioontology.org/ontologies/EDAM/?p=classes&conceptid=http%3A%2F%2Fedamontology.org%2Ftopic_0091"
    }, {
      "@type": "DefinedTerm", 
      "@id": "http://edamontology.org/topic_3063",
      "inDefinedTermSet": "http://edamontology.org",
      "termCode": "topic_3063",
      "name": "Medical informatics",
      "url": "https://bioportal.bioontology.org/ontologies/EDAM/?p=classes&conceptid=http%3A%2F%2Fedamontology.org%2Ftopic_3063"
    }, {
      "@type": "DefinedTerm", 
      "@id": "http://edamontology.org/topic_0089",
      "inDefinedTermSet": "http://edamontology.org",
      "termCode": "topic_0089",
      "name": "Ontology and terminology",
      "url": "https://bioportal.bioontology.org/ontologies/EDAM/?p=classes&conceptid=http%3A%2F%2Fedamontology.org%2Ftopic_0089"
    }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": ["medical students", "postgraduates"]
  },
  "author": [
    {
        "@type": "Person",
        "name": "Dietrich Rebholz-Schuhmann"
    },
    {
        "@type": "Person",
        "name": "Leyla Jael Castro",
        "email": "ljgarcia@zbmed.de"
    }
  ],
  "educationalLeve": "beginner",
  "inLanguage": "en",
  "learningResourceType": ["presentation", "video-lecture"],
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "dateCreated": "2020-08-31",
  "version": "1.0",

  "name": "",
  "keywords": "",
  "description": "",
  "teaches": []
};


function toggle(id) {
  var elem = document.getElementById(id);
  var content = document.getElementById(id+'data');
  if (content.style.display === "block") {
    elem.innerHTML = '+ Show';  
    content.style.display = "none";
  } else {
    elem.innerHTML = '- Hide';
    content.style.display = "block";
  }
}

function createMetadata(info) {
  let thisMetadata = JSON.parse(JSON.stringify(metadata));
  if (info.doi) {
    thisMetadata["@id"] = 'https://doi.org/' + info.doi;
  }
  thisMetadata.name = info.name;
  thisMetadata.keywords = info.keywords;
  thisMetadata.description = info.description;
  if (info.teaches && (info.teaches.length != 0) ) {
    thisMetadata.teaches = info.teaches;
  }
  return JSON.stringify(thisMetadata);
}

function addMetadata(info) {
  var script = document.createElement("script");
  script.type = "application/ld+json";
  script.innerHTML = createMetadata(info);
  document.body.appendChild(script);
}

function addInfoBox(info) {
  listElement = document.createElement('ul');
  document.getElementById('bms_infobox').appendChild(listElement);
  if (info.doi) {
    createListElem(listElement, '<strong>DOI: </strong>', info.doi);
  }
  createListElem(listElement, '<strong>Lesson title: </strong>', info.name);
  createListElem(listElement, '<strong>Keywords: </strong>', info.keywords);
  createListElem(listElement, '<strong>Objective/Description: </strong>', info.description);
  if (info.teaches && (info.teaches.length != 0) ) {
    createListElem(listElement, '<strong>Learning outcomes: </strong>', info.teaches);
  }
}

function createListElem(listElement, subtitle, text) {
  listItem = document.createElement('li');
  if (Array.isArray(text) && (text.length != 0)) {
    listItem.innerHTML = subtitle + text.join('; ');
  } else {
    listItem.innerHTML = subtitle + text;
  }
  listElement.appendChild(listItem);
}