var morphType = [
  {"id": "lemma", "text": "lemma"},
  {"id": "wordform", "text": "wordform"},
  {"id": "affix", "text": "affix"},
  {"id": "clitic", "text": "clitic"}
]

var morphemicGloss = [
{
"text": "ModificationType",
"children": 
[
{"id": "indifferent", "text": "indifferent"},
{"id": "postModifier", "text": "postModifier"},
{"id": "preModifier", "text": "preModifier"}  
]
},
{
"text": "Number",
"children": 
[
  {"id": "collective", "text": "collective"},
  {"id": "dual", "text": "dual"},
  {"id": "massNoun", "text": "massNoun"},
  {"id": "otherNumber", "text": "otherNumber"},
  {"id": "paucal", "text": "paucal"},
  {"id": "plural", "text": "plural"},
  {"id": "quadrial", "text": "quadrial"},
  {"id": "singular", "text": "singular"},
  {"id": "trial", "text": "trial"}
]
},
{
"text": "Animacy",
"children": 
[
{"id": "animate", "text": "animate"},
{"id": "inanimate", "text": "inanimate"},
{"id": "otherAnimacy", "text": "otherAnimacy"}
]
},
{
"text": "TermType",
"children": 
[
{"id": "CJK_compound", "text": "CJK_compound"},
{"id": "abbreviatedForm", "text": "abbreviatedForm"},
{"id": "abbreviation", "text": "abbreviation"},
{"id": "acronym", "text": "acronym"},
{"id": "appellation", "text": "appellation"},
{"id": "clippedTerm", "text": "clippedTerm"},
{"id": "commonName", "text": "commonName"},
{"id": "compound", "text": "compound"},
{"id": "contraction", "text": "contraction"},
{"id": "entryTerm", "text": "entryTerm"},
{"id": "equation", "text": "equation"},
{"id": "expression", "text": "expression"},
{"id": "formula", "text": "formula"},
{"id": "fullForm", "text": "fullForm"},
{"id": "idiom", "text": "idiom"},
{"id": "initialism", "text": "initialism"},
{"id": "internationalScientificTerm", "text": "internationalScientificTerm"},
{"id": "internationalism", "text": "internationalism"},
{"id": "logicalExpression", "text": "logicalExpression"},
{"id": "nucleus", "text": "nucleus"},
{"id": "partNumber", "text": "partNumber"},
{"id": "phraseologicalUnit", "text": "phraseologicalUnit"},
{"id": "productName", "text": "productName"},
{"id": "proverb", "text": "proverb"},
{"id": "setPhrase", "text": "setPhrase"},
{"id": "shortForm", "text": "shortForm"},
{"id": "sku", "text": "sku"},
{"id": "standardText", "text": "standardText"},
{"id": "string", "text": "string"},
{"id": "stringCategory", "text": "stringCategory"},
{"id": "symbol", "text": "symbol"},
{"id": "transcribedForm", "text": "transcribedForm"}
]
},
{
"text": "VerbFormMood",
"children": 
[
{"id": "conditional", "text": "conditional"},
{"id": "gerundive", "text": "gerundive"},
{"id": "imperative", "text": "imperative"},
{"id": "indicative", "text": "indicative"},
{"id": "infinitive", "text": "infinitive"},
{"id": "participle", "text": "participle"},
{"id": "subjunctive", "text": "subjunctive"}
]
},
{
"text": "NormativeAuthorization",
"children": 
[
{"id": "admittedTerm", "text": "admittedTerm"},
{"id": "deprecatedTerm", "text": "deprecatedTerm"},
{"id": "legalTerm", "text": "legalTerm"},
{"id": "preferredTerm", "text": "preferredTerm"},
{"id": "regulatedTerm", "text": "regulatedTerm"},
{"id": "standardizedTerm", "text": "standardizedTerm"},
{"id": "supersededTerm", "text": "supersededTerm"}
]
},
{
"text": "Person",
"children": 
[
{"id": "firstPerson", "text": "firstPerson"},
{"id": "secondPerson", "text": "secondPerson"},
{"id": "thirdPerson", "text": "thirdPerson"}
]
},
{
"text": "Degree",
"children": 
[
{"id": "comparative", "text": "comparative"},
{"id": "positive", "text": "positive"},
{"id": "superlative", "text": "superlative"}
]
},
{
"text": "Dating",
"children": 
[
{"id": "modern", "text": "modern"},
{"id": "old", "text": "old"}
]
},
{
"text": "Gender",
"children": 
[
{"id": "commonGender", "text": "commonGender"},
{"id": "feminine", "text": "feminine"},
{"id": "masculine", "text": "masculine"},
{"id": "neuter", "text": "neuter"},
{"id": "otherGender", "text": "otherGender"}
]
},
{
"text": "Cliticness",
"children": 
[
{"id": "bound", "text": "bound"},
{"id": "no", "text": "no"},
{"id": "yes", "text": "yes"}
]
},
{
"text": "Frequency",
"children": 
[
{"id": "commonlyUsed", "text": "commonlyUsed"},
{"id": "infrequentlyUsed", "text": "infrequentlyUsed"},
{"id": "rarelyUsed", "text": "rarelyUsed"}
]
},
{
"text": "TermElement",
"children": 
[
{"id": "affix", "text": "affix"},
{"id": "baseElement", "text": "baseElement"},
{"id": "infix", "text": "infix"},
{"id": "inflectionElement", "text": "inflectionElement"},
{"id": "morphologicalElement", "text": "morphologicalElement"},
{"id": "optionalElement", "text": "optionalElement"},
{"id": "prefix", "text": "prefix"},
{"id": "radical", "text": "radical"},
{"id": "suffix", "text": "suffix"},
{"id": "syllable", "text": "syllable"},
{"id": "wordElement", "text": "wordElement"}
]
},
{
"text": "Negative",
"children": 
[
{"id": "no", "text": "no"},
{"id": "yes", "text": "yes"}
]
},
{
"text": "ReferentType",
"children": 
[
{"id": "personal", "text": "personal"},
{"id": "possessive", "text": "possessive"}
]
},
{
"text": "Finiteness",
"children": 
[
{"id": "finite", "text": "finite"},
{"id": "nonFinite", "text": "nonFinite"}
]
},
{
"text": "Voice",
"children": 
[
{"id": "activeVoice", "text": "activeVoice"},
{"id": "middleVoice", "text": "middleVoice"},
{"id": "passiveVoice", "text": "passiveVoice"}
]
},
{
"text": "Definiteness",
"children": 
[
{"id": "definite", "text": "definite"},
{"id": "fullArticle", "text": "fullArticle"},
{"id": "indefinite", "text": "indefinite"},
{"id": "shortArticle", "text": "shortArticle"}
]
},
{
"text": "Tense",
"children": 
[
{"id": "future", "text": "future"},
{"id": "imperfect", "text": "imperfect"},
{"id": "past", "text": "past"},
{"id": "present", "text": "present"},
{"id": "preterite", "text": "preterite"}
]
},
{
"text": "Mood",
"children": 
[
{"id": "imperative", "text": "imperative"},
{"id": "indicative", "text": "indicative"},
{"id": "subjunctive", "text": "subjunctive"}
]
},
{
"text": "Register",
"children": 
[
{"id": "benchLevelRegister", "text": "benchLevelRegister"},
{"id": "dialectRegister", "text": "dialectRegister"},
{"id": "facetiousRegister", "text": "facetiousRegister"},
{"id": "formalRegister", "text": "formalRegister"},
{"id": "inHouseRegister", "text": "inHouseRegister"},
{"id": "ironicRegister", "text": "ironicRegister"},
{"id": "neutralRegister", "text": "neutralRegister"},
{"id": "slangRegister", "text": "slangRegister"},
{"id": "tabooRegister", "text": "tabooRegister"},
{"id": "technicalRegister", "text": "technicalRegister"},
{"id": "vulgarRegister", "text": "vulgarRegister"}
]
},
{
"text": "Case",
"children": 
[
{"id": "abessiveCase", "text": "abessiveCase"},
{"id": "ablativeCase", "text": "ablativeCase"},
{"id": "absolutiveCase", "text": "absolutiveCase"},
{"id": "accusativeCase", "text": "accusativeCase"},
{"id": "adessiveCase", "text": "adessiveCase"},
{"id": "aditiveCase", "text": "aditiveCase"},
{"id": "allativeCase", "text": "allativeCase"},
{"id": "benefactiveCase", "text": "benefactiveCase"},
{"id": "causativeCase", "text": "causativeCase"},
{"id": "comitativeCase", "text": "comitativeCase"},
{"id": "dativeCase", "text": "dativeCase"},
{"id": "delativeCase", "text": "delativeCase"},
{"id": "elativeCase", "text": "elativeCase"},
{"id": "equativeCase", "text": "equativeCase"},
{"id": "ergativeCase", "text": "ergativeCase"},
{"id": "essiveCase", "text": "essiveCase"},
{"id": "genitiveCase", "text": "genitiveCase"},
{"id": "illativeCase", "text": "illativeCase"},
{"id": "inessiveCase", "text": "inessiveCase"},
{"id": "instrumentalCase", "text": "instrumentalCase"},
{"id": "lativeCase", "text": "lativeCase"},
{"id": "locativeCase", "text": "locativeCase"},
{"id": "nominativeCase", "text": "nominativeCase"},
{"id": "obliqueCase", "text": "obliqueCase"},
{"id": "partitiveCase", "text": "partitiveCase"},
{"id": "prolativeCase", "text": "prolativeCase"},
{"id": "sociativeCase", "text": "sociativeCase"},
{"id": "sublativeCase", "text": "sublativeCase"},
{"id": "superessiveCase", "text": "superessiveCase"},
{"id": "terminativeCase", "text": "terminativeCase"},
{"id": "translativeCase", "text": "translativeCase"},
{"id": "vocativeCase", "text": "vocativeCase"},
{"id": "directCase", "text": "directCase"}
]
},
{
"text": "Aspect",
"children": 
[
{"id": "cessative", "text": "cessative"},
{"id": "imperfective", "text": "imperfective"},
{"id": "inchoative", "text": "inchoative"},
{"id": "perfective", "text": "perfective"},
{"id": "unaccomplished", "text": "unaccomplished"}
]
},
{
"text": "TemporalQualifier",
"children": 
[
{"id": "archaicForm", "text": "archaicForm"},
{"id": "obsoleteForm", "text": "obsoleteForm"},
{"id": "outdatedForm", "text": "outdatedForm"}
]
}
]
var posCategories = 
[
{"id": "Conjunction", "text": "Conjunction"},
{"id": "Particle", "text": "Particle"},
{"id": "Noun", "text": "Noun"},
{"id": "Adjective", "text": "Adjective"},
{"id": "Article", "text": "Article"},
{"id": "Adverb", "text": "Adverb"},
{"id": "FusedPreposition", "text": "FusedPreposition"},
{"id": "Pronoun", "text": "Pronoun"},
{"id": "Adposition", "text": "Adposition"},
{"id": "Determiner", "text": "Determiner"},
{"id": "Symbol", "text": "Symbol"},
{"id": "Numeral", "text": "Numeral"},
{"id": "Verb", "text": "Verb"}
];

var activeSentenceMorphemicBreak = '<input type="checkbox" id="activeSentenceMorphemicBreak" name="activeSentenceMorphemicBreak" value="false">'+
                                  '<label for="activeSentenceMorphemicBreak">&nbsp; Add Interlinear Gloss</label><br></br>'
$(".sentencefield").append(activeSentenceMorphemicBreak);

var activeTranslationField = '<input type="checkbox" id="activeTranslationField" name="activeTranslationField" value="false">'+
                            '<label for="activeTranslationField">&nbsp; Add Translation</label><br></br>'+
                            '<div id="translationlangs" style="display: none;"></div>';
$(".translationfield").append(activeTranslationField);

var activeTagsField = '<input type="checkbox" id="activeTagsField" name="activeTagsField" value="false">'+
                      '<label for="activeTagsField">&nbsp; Add Tags</label><br></br>'+
                      '<div id="tags" style="display: none;">'+
                      '<div class="form-group">'+
                      '<label for="Tags">Tags</label>'+
                      '<input type="text" class="form-control" id="Tags" name="Tags">'+
                      '</div></div></div>'; 
$(".tagsfield").append(activeTagsField);

// add new custom element
var sentenceField = 1;

$("#activeSentenceMorphemicBreak").click(function() {
  activetranscriptionscript = displayRadioValue();
  activetranscriptionscriptvalue = document.getElementById(activetranscriptionscript).value;
  if (activetranscriptionscriptvalue === '') {
    document.getElementById("activeSentenceMorphemicBreak").checked=false;
    alert('No input given in the selected transcription script!');  
  }
  else {
    activeMorphSentenceField(activetranscriptionscriptvalue, activetranscriptionscript);
  }
});

function activeMorphSentenceField (value, name) {
  console.log(value, name);
  var drow = '<div class="container containerremovesentencefield">';
              // '<div class="row removesentencefield' + sentenceField + '">';

  // var dItems = '<div id="morphemicDetail"><p><strong>Give Morphemic Break</strong></p><p><strong>**(use "#" for word boundary(if there are affixes in the word) and "-" for morphemic break)</strong></p>'+
  // '<div class="col-md-12"><div class="form-group"><div class="input-group">'+
  // '<input type="text" class="form-control" name="sentenceMorphemicBreak' + sentenceField +'"'+
  // 'placeholder="e.g. I have re-#write#-en the paper#-s"'+
  // 'id="sentenceMorphemicBreak' + sentenceField +'" value="'+value+'">'+
  // '<div class="input-group-btn">'+
  // '<button class="btn btn-success" type="button" id="checkSentenceField' + sentenceField +'" onclick="getSentence('+ sentenceField +');">'+
  // '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'+ 
  // '</button></div>'+
  // '</div></div></div></div>'

  var dItems = '<div id="morphemicDetail">'+
                '<p><strong>Give Morphemic Break</strong></p>'+
                '<p><strong>**(use "#" for word boundary(if there are affixes in the word) and "-" for morphemic break)</strong></p>'+
                '<div class="col-md-12"><div class="form-group"><div class="input-group">'+
                '<input type="text" class="form-control" name="morphsentenceMorphemicBreak' + name +'"'+
                'placeholder="e.g. I have re-#write#-en the paper#-s"'+
                'id="sentenceMorphemicBreak' + name +'" value="'+value+'">'+
                '<div class="input-group-btn">'+
                '<button class="btn btn-success" type="button" id="checkSentenceField"'+
                'onclick="getSentence(\''+value+'\', \''+name+'\');">'+
                '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'+ 
                '</button></div>'+
                '</div></div></div></div>';

  drow += dItems;
  if (document.getElementById("activeSentenceMorphemicBreak").checked) {
    document.getElementById("activeSentenceMorphemicBreak").value = true;
    $(".sentencefield").append(drow);
  }
  else {
    document.getElementById("activeSentenceMorphemicBreak").value = false;
    $(".containerremovesentencefield").remove();
  }
}

$("#activeTranslationField").click(function() {
  activeTranslationLangs();
});

function activeTranslationLangs() {
  var x = document.getElementById("translationlangs");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$("#activeTagsField").click(function() {
  activeTags();
});

function activeTags() {
    var x = document.getElementById("tags");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

// remove a sentence element
function removeSentenceFields(rid) {
$(".containerremovesentencefield"+rid).remove();
$("#sentenceForm"+rid).remove();
document.getElementById("addSentenceField").disabled = false;

}  

// var morphemePOS;

function getWordPos(morphemicSplitSentence, name) {
  // console.log('getWordPos');

  $.getJSON('/predictPOSNaiveBayes', {

  a:String(morphemicSplitSentence)
  }, function(data) {
  // morphemePOS = data.predictedPOS;
  morphemeFields(morphemicSplitSentence, name, data.predictedPOS);
  // console.log(data.predictedPOS);
  });
  return false; 
}



// get the sentence enter by the user when green check button is clicked and 
// create the boxes for words and morphemes
function getSentence(value, name) {
  console.log(value, name);
  document.getElementById("checkSentenceField").disabled = true; 
  // document.getElementById("sentenceField" + sentenceField).readonly = true; 
  // document.getElementById("sentenceMorphemicBreak" + sentenceField).readonly = true; 
  // document.getElementById("submitSentenceField" + sid).disabled = false;
  // console.log(sid);
  var morphemicSplitSentence = [];

  // sentence = document.getElementById("sentenceField" + sentenceField).value.trim(); // Find the text
  // sentence_morphemic_break = document.getElementById("sentenceMorphemicBreak" + sentenceField).value.trim().replace(/#|-/g,''); // Find the text

  // console.log(sentence.localeCompare(sentence_morphemic_break))


  // sentence = document.getElementById("sentenceField" + sentenceField).value.trim().split(' '); // Find the text
  // sentence = document.getElementById("note").value.trim().split(' '); // Find the text
  // sentence_morphemic_break_full = document.getElementById("sentenceMorphemicBreak" + sentenceField).value.trim(); // Find the text
  // sentence_morphemic_break = document.getElementById("sentenceMorphemicBreak" + sentenceField).value.trim().split(' '); // Find the text
  sentence = value.trim().split(' ');
  sentence_morphemic_break_full = document.getElementById("sentenceMorphemicBreak" + name).value.trim(); // Find the text
  sentence_morphemic_break = document.getElementById("sentenceMorphemicBreak" + name).value.trim().split(' '); // Find the text


  // console.log(sentence, sentence_morphemic_break)

  if (sentence.length === 1 && sentence[0] === "") {
  alert('No input given!');
  document.getElementById("checkSentenceField" + sid).disabled = false;
  return false;
  }
  if (sentence_morphemic_break.length === 1 && sentence_morphemic_break[0] === "") {
  alert('No input given!');
  document.getElementById("checkSentenceField").disabled = false;
  return false;
  }

  if (sentence_morphemic_break_full.includes('-')) {
    morph_len = (sentence_morphemic_break_full.match(/-/g)||[]).length;
    boundary_len = (sentence_morphemic_break_full.match(/#/g)||[]).length;
    // console.log(morph_len)
    // console.log(boundary_len)
    if (morph_len != boundary_len) {
      alert("Number of # ("+boundary_len+") not equal to numer of - ("+morph_len+") in the morphemic break")
      document.getElementById("checkSentenceField" + sid).disabled = false;
      return false;
    }

    // alert('No input given!');
    // document.getElementById("checkSentenceField" + sid).disabled = false;
    // return false;
    }
  // sentence_morphemic_break = document.getElementById("sentenceMorphemicBreak" + sentenceField).value.trim().split(' '); // Find the text

  for (i = 0; i < sentence_morphemic_break.length; i++) {
  if (sentence_morphemic_break[i].includes('#')) {
  morphSplit = sentence_morphemic_break[i].split('#')
  for (j = 0; j < morphSplit.length; j++) {
  morphemicSplitSentence.push(morphSplit[j]);
  }  
  }
  else {
  morphemicSplitSentence.push(sentence_morphemic_break[i]);
  }
  }

  //   morphemePOS = getWordPos(morphemicSplitSentence)
  //   setTimeout(function(){
  //     console.log(morphemePOS);
  // }, 1000);

  // console.log(sentence);

  // console.log(morphemicSplitSentence);
  getWordPos(morphemicSplitSentence, name)
}  

function morphemeFields(morphemicSplitSentence, name, morphemePOS) {

  // console.log(morphemePOS);
  var morphemeinput = '</br><div class="morphemefield' + name + '">';
  morphemeinput += '<div class="row">'+
  '<div class="col-sm-3"><strong>Morphemes</strong></div>'+
  '<div class="col-sm-3"><strong>Gloss</strong></div>'+
  '<div class="col-sm-3"><strong>Morph Type</strong></div>'+
  '<div class="col-sm-3"><strong>POS</strong></div>'+
  '</div>';
  // var morphemeinput = '';
  morphemeCount = morphemicSplitSentence.length
  for(let i = 0; i < morphemeCount; i++) {
    // console.log(morphemePOS[i]);
    // console.log(sentence[i]);
    if (morphemicSplitSentence[i].includes('-')) {
    morphemeinput += '<div class="input-group">'+
        '<input type="text" class="form-control" name="morph_morpheme_' + name + '_' +  (i+1) +'"'+
        'placeholder="'+ morphemicSplitSentence[i] +'" value="'+morphemicSplitSentence[i]+'"'+
        'id="morphemeField' + name + (i+1) +'" readonly/>'+
        '<span class="input-group-btn" style="width:50px;"></span>'+
        '<select class="morphemicgloss' + name + (i+1) +'" name="morph_gloss_' + name + '_' +  (i+1) +'"'+
        ' multiple="multiple" style="width: 210px"></select>'+
        '<span class="input-group-btn" style="width:50px;"></span>'+
        '<select class="lextype' + name + (i+1) +'" name="morph_lextype_' + name + '_' +  (i+1) +'" style="width: 210px">'+
        '<option value="affix" selected>affix</option></select>'+
        '<span class="input-group-btn" style="width:50px;"></span></div><br>';
    // console.log(morphemeinput);                  
    }
    else {
    morphemeinput += '<div class="input-group">'+
      '<input type="text" class="form-control" name="morph_morpheme_' + name + '_' +  (i+1) +'"'+
      'placeholder="'+ morphemicSplitSentence[i] +'" value="'+ morphemicSplitSentence[i] +'"'+
      'id="morphemeField' + name + (i+1) +'" readonly/>'+
      '<span class="input-group-btn" style="width:50px;"></span>'+
      '<input type="text" class="form-control" name="morph_gloss_' + name + '_' +  (i+1) +'"'+
      ' id="morphemicgloss' + name + (i+1) +'"/>'+
      '<span class="input-group-btn" style="width:50px;"></span>'+
      '<select class="lextype' + name + (i+1) +'" name="morph_lextype_' + name + '_' +  (i+1) +'" style="width: 210px"></select>'+
      '<span class="input-group-btn" style="width:50px;"></span>'+
      '<select class="pos' + name + (i+1) +'" name="morph_pos_' + name + '_' +  (i+1) +'" style="width: 210px">'+
      '<option value="'+ morphemePOS[i][1] +'" selected>'+ morphemePOS[i][1] +'</option>'+
      '</select></div><br>';

    }
  }
  morphemeinput += ' <input type="text" id="morphcount" name="morphcount'+ name +'" value="'+ morphemeCount +'" hidden>'
  // add the input elements below that sentence
  // $(".containerremovesentencefield"+sid).append(morphemeinput);
  $(".containerremovesentencefield").append(morphemeinput);

  // var sentenceTraslationField = '<input type="checkbox" id="activeSentenceMorphemicBreak" name="activeSentenceMorphemicBreak" value="false" onclick="activeTranscriptionScript()">'+
  // '<label for="activeSentenceMorphemicBreak">&nbsp; Add Translation</label><br></br>'
              // '<p><strong>Translation of the Sentence</strong></p><div class="col-md-12">'+
              // '<input type="text" class="form-control" name="sentenceTranslation' + sid +'"'+
              // 'placeholder="Translation of the Sentence"'+
              // 'id="sentenceTranslation' + sid +'">'+
              // '</div>';
  // var sentenceTraslationField = '<input type="checkbox" id="activeSentenceMorphemicBreak" name="activeSentenceMorphemicBreak" value="false" onclick="activeTranscriptionScript()">'+
  //             '<label for="activeSentenceMorphemicBreak">&nbsp; Add Translation</label><br></br>'+
  //             '<p><strong>Translation in Hindi</strong></p><div class="col-md-12">'+
  //             '<input type="text" class="form-control" name="sentenceTranslation' + sid +'"'+
  //             'placeholder="Translation of the Sentence"'+
  //             'id="sentenceTranslation' + sid +'">'+
  //             '</div>'+
  //             '<p><strong>Translation in Tamil</strong></p><div class="col-md-12">'+
  //             '<input type="text" class="form-control" name="sentenceTranslation' + sid +'"'+
  //             'placeholder="Translation of the Sentence"'+
  //             'id="sentenceTranslation' + sid +'">'+
  //             '</div>';
  // var sentenceTraslationField = '<p><strong>Translation of the Sentence</strong></p><div class="col-md-12">'+
  //             '<input type="text" class="form-control" name="sentenceTranslation' + sid +'"'+
  //             'placeholder="Translation of the Sentence"'+
  //             'id="sentenceTranslation' + sid +'">'+
  //             '</div>';

  // $(".containerremovesentencefield"+sid).append(sentenceTraslationField);

  for(let i = 0; i < morphemicSplitSentence.length; i++) {
  $('.morphemicgloss'+ name +(i+1)).select2({
  tags: true,
  placeholder: 'Gloss',
  data: morphemicGloss,
  allowClear: true
  // sorter: false
  });

  $('.lextype'+ name +(i+1)).select2({
  tags: true,
  placeholder: 'Morph Type',
  data: morphType
  // allowClear: true,
  // sorter: false
  });

  $('.pos'+ name +(i+1)).select2({
  tags: true,
  placeholder: 'POS',
  data: posCategories
  // allowClear: true,
  // sorter: false
  // width: 'element'
  });

  }
  // document.getElementById("submitSentenceField").disabled = false;
  // $('.submitSentenceField').removeAttr('disabled');
  // document.getElementById("sentenceField" + sentenceField).readOnly = true; 
  // document.getElementById("sentenceMorphemicBreak" + sentenceField).readOnly = true; 
  // document.getElementById("submitSentenceField" + sid).disabled = false;
}

$("#save").click(function() {
  console.log('sending transcription and morphemic details to the server');
  var transcriptionData = localStorage.regions
  $.getJSON('/getnewsentences', {
  
  a:String(transcriptionData)
  }, function(data) {

  });
  return false; 
});

function myFunction(newData) {
  console.log(newData);

  var inpt = '';
  for (let [key, value] of Object.entries(newData)){
    if (key === 'Sentence Language') {
      inpt += '<div class="col"><div class="form-group">'+
                  '<label for="'+key+'">'+key+'</label>'+
                  '<input type="text" class="form-control" id="'+key+'" name="'+key+'" value="'+newData[key]+'" readonly>'+
                  '</div></div>'; 
          $('.lexemelang').append(inpt);
          inpt = '';         
        }
    if (key === 'Transcription Script') {
      var transcriptionScript = newData[key];
        for (var i = 0; i < transcriptionScript.length; i++) {
          if (transcriptionScript[i].includes('_')) {
            // console.log(transcriptionScript[i]);
            lScript = transcriptionScript[i].replace('_', ' ');
          }
          else {
            lScript = transcriptionScript[i];
          }
          inpt += '<div class="form-group">';
          if (i === 0) {
            inpt += '<input type="radio" id="TranscriptionRadioBtn'+ transcriptionScript[i] +'" name="activeTranscriptionScript" value="Transcription_'+ transcriptionScript[i] +'" checked>';
          }
          else {
            inpt += '<input type="radio" id="TranscriptionRadioBtn'+ transcriptionScript[i] +'" name="activeTranscriptionScript" value="Transcription_'+ transcriptionScript[i] +'">';
          }                
          inpt += '<label for="Transcription_'+ transcriptionScript[i] +'">Transcription in '+ lScript +'</label>'+
                '<input type="text" class="form-control" id="Transcription_'+ transcriptionScript[i] +'"'+ 
                'placeholder="Transcription '+ lScript +'" name="Transcription_'+ transcriptionScript[i] +'">'+
                '</div></div>';
        }
        $('.transcription').append(inpt);
        inpt = '';
    }
    else if (key === 'Translation Language') {
      translationLang = newData[key];
        for (var i = 0; i < translationLang.length; i++) {
          inpt += '<div class="form-group">'+
                  '<label for="'+ translationLang[i] +'Translation">Translation in '+ translationLang[i] +'</label>'+
                  '<input type="text" class="form-control" id="'+ translationLang[i] +'Translation"'+ 
                  'placeholder="Translation '+ translationLang[i] +'" name="Translation '+ translationLang[i] + '">'+
                  '</div></div>';          
        }
      $('#translationlangs').append(inpt);
      inpt = '';
    }
  }
}


function displayRadioValue() {
  var ele = document.getElementsByName('activeTranscriptionScript');
  activetranscriptionscript = ''
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
        activetranscriptionscript =  ele[i].value
  }
  return activetranscriptionscript
}