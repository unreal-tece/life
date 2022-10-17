var fieldType = [{
    "name": "text",
    "value": "text"
    },
    {
    "name": "textarea",
    "value": "textarea"
    },
    {
    "name": "file",
    "value": "file"
    }
  ];
  
var languages = [
  {"id": "Assamese", "text": "Assamese"},
  {"id": "Awadhi", "text": "Awadhi"},
  {"id": "Bangla", "text": "Bangla"},
  {"id": "Bhojpuri", "text": "Bhojpuri"},
  {"id": "Bodo", "text": "Bodo"},
  {"id": "Braj", "text": "Braj"},
  {"id": "Bundeli", "text": "Bundeli"},
  {"id": "English", "text": "English"},
  {"id": "Gujarati", "text": "Gujarati"},
  {"id": "Haryanvi", "text": "Haryanvi"},
  {"id": "Hindi", "text": "Hindi"},
  {"id": "Kannada", "text": "Kannada"},
  {"id": "Konkani", "text": "Konkani"},
  {"id": "Magahi", "text": "Magahi"},
  {"id": "Maithili", "text": "Maithili"},
  {"id": "Malayalam", "text": "Malayalam"},
  {"id": "Marathi", "text": "Marathi"},
  {"id": "Meitei", "text": "Meitei"},
  {"id": "Nepali", "text": "Nepali"},
  {"id": "Odia", "text": "Odia"},
  {"id": "Punjabi", "text": "Punjabi"},
  {"id": "Santali", "text": "Santali"},
  {"id": "Tamil", "text": "Tamil"},
  {"id": "Telugu", "text": "Telugu"}
]

var scripts = 
[    
      {
        "id": "Bengali", 
        "text": "Bengali"
      },
      {
        "id": "Devanagari", 
        "text": "Devanagari"
      },
      {
        "id": "Gujarati", 
        "text": "Gujarati"
      },
      {
        "id": "Gurumukhi", 
        "text": "Gurumukhi"
      },
      {
        "id": "IPA", 
        "text": "IPA"
      },
      {
        "id": "Kannada", 
        "text": "Kannada"
      },
      {
        "id": "Latin", 
        "text": "Latin"
      },
      {
        "id": "Malayalam", 
        "text": "Malayalam"
      },
      {
        "id": "Meitei-Mayek", 
        "text": "Meitei Mayek"
      },
      {
        "id": "Odia", 
        "text": "Odia"
      },
      {
        "id": "Ol_Chiki", 
        "text": "Ol Chiki"
      },
      {
        "id": "Tamil", 
        "text": "Tamil"
      },
      {
        "id": "Telugu", 
        "text": "Telugu"
      }
]

var QuestionnaireDomain = [
  {"id": "", "text": ""},
  {"id": "General", "text": "General"},
  {"id": "Agriculture", "text": "Agriculture"},
  {"id": "Education", "text": "Education"},
  {"id": "Science-Technology", "text": "Science-Technology"}
];


var ElicitationMethod = [
  {"id": "", "text": ""},
  {"id": "Conversation", "text": "Conversation"},
  {"id": "Interview", "text": "Interview"},
  {"id": "Narration", "text": "Narration"},
  {"id": "Picture Book Narration", "text": "Picture Book Narration"},
  {"id": "Role-Play", "text": "Role-Play"},
  {"id": "Translation", "text": "Translation"},
  {"id": "Video Narration", "text": "Video Narration"}  
];


// var target = [
//   {"id": "", "text": ""},
//   {"id": "Anaphors", "text": "Anaphors"},
//   {"id": "Case", "text": "Case"},
//   {"id": "Oral", "text": "Oral"}

// ];

  
var promptType = [
  {"id": "", "text": ""},
  {"id": "Audio", "text": "Audio"},
  {"id": "Image", "text": "Image"},
  {"id": "Multimedia", "text": "Multimedia"}
];

// $('.promptlanguage').select2({
//   tags: true,
//   placeholder: 'Prompt Language',
//   data: languages,
//   allowClear: true
// });

// $('.promptlangscript').select2({
//   tags: true,
//   placeholder: 'Prompt Language Script',
//   data: scripts,
//   allowClear: true
// });

$('.prompttype').select2({
  placeholder: '--Prompt Type--',
  data: promptType,
  allowClear: true,
  // console.log( "ready!" )
});

$('.questionnairedomain').select2({
  tags: true,
  placeholder: '-- Questionnire Domain --',
  data: QuestionnaireDomain  ,
  allowClear: true
});

$('.elicitationmethod').select2({
  tags: true,
  placeholder: '--Elicitation Method--',
  data: ElicitationMethod ,
  allowClear: true,
  // console.log( "ready!" )
});

// $('.target').select2({
//   tags: true,
//   placeholder: '-- Target --',
//   data: target,
//   allowClear: true,
//   // console.log( "ready!" )
// });


var langScriptPromptField = 0;
$("#addpromptlangscripts").click(function(){
  langScriptPromptField++;
  
  var drow = '<div class="row removelangScriptPromptfield' + langScriptPromptField + '">';

  var fItems = '<div class="col-md-3"><div class="form-group">'+
              '<select class="form-control" name="Language"  required>';
  fItems += '<option value="" selected disabled>Language</option>';

  for (var i = 0; i < languages.length; i++) {
    fItems += '<option value="' + languages[i].text + '">' + languages[i].id + '</option>';
  }
  fItems += '</select></div></div>';

  fItems += '<div class="col-md-3"><div class="form-group">'+
              '<div class="input-group">'+
              '<select class="form-control" name="Script"  required>';
  fItems += '<option value="" selected disabled>Script</option>';

  for (var i = 0; i < scripts.length; i++) {
    fItems += '<option value="' + scripts[i].text + '">' + scripts[i].id + '</option>';
  }
  fItems += '</select>';

  fItems += '<div class="input-group-btn">'+
            '<button class="btn btn-danger" type="button" onclick="removelangScriptPromptFields('+ langScriptPromptField +');">'+
            '<span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button></div></div></div></div>';

  drow += fItems;
  drow += '</div>'
  $(".promptlangscripts").append(drow);
});

var quescustomField = 0;
$("#quesaddCustomField").click(function(){
  quescustomField++;
  
  var drow = '<div class="row removequescustomfield' + quescustomField + '">';

  var dItems = '<div class="col-md-3"><div class="form-group">'+
              '<input type="text" class="form-control"'+
              ' name="quescustomField' + quescustomField + '" placeholder="Custom Field" required></div></div>';

  var fItems = '<div class="col-md-3"><div class="form-group">'+
              '<div class="input-group">'+
              '<select class="form-control" name="fieldType' + quescustomField + '" required>';
  fItems += '<option value="">Field Type</option>';

  for (var i = 0; i < fieldType.length; i++) {
    fItems += '<option value="' + fieldType[i].value + '">' + fieldType[i].name + '</option>';
  }

  fItems += '</select><div class="input-group-btn">'+
            '<button class="btn btn-danger" type="button" onclick="removequesCustomFields('+ quescustomField +');">'+
            '<span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button></div></div></div></div>';

  //ddrow += '</div>';

  drow += dItems + fItems;
  drow += '</div>'
  $(".quescustomfield").append(drow);
  // console.log(drow)
});

function removelangScriptPromptFields(rid) {
    $(".removelangScriptPromptfield"+rid).remove();
  }

// remove a custom element
function removequesCustomFields(rid) {
  $(".removequescustomfield"+rid).remove();
}
