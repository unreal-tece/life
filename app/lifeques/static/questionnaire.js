// var questionaireprojectform = {
//   "username": "alice",
//   "projectname": "alice_project_1",
//   "Language": ["text", ["English", "Hindi"]],
//   "Script": ["", ["latin", "devanagari"]],
//   "Prompt Audio": ["file", ["audio"]],
//   "Domain": ["multiselect", ["General", "Agriculture", "Sports"]],
//   "Elicitation Method": ["select", ["Translation", "Agriculture", "Sports"]],
//   "Target": ["multiselect", ["case", "classifier", "adposition"]]
// }
targets = [
  {"id": "Simple and Complex", "text": "Simple and Complex"},
  {"id": "Case", "text": "Case"},
  {"id": "Classifiers", "text": "Classifiers"},
  {"id": "Reflexives and Reciprocals", "text": "Reflexives and Reciprocals"},
  {"id": "Interrogatives", "text": "Interrogatives"},
  {"id": "Tag Questions", "text": "Tag Questions"},
  {"id": "Tense Aspect Mood", "text": "Tense Aspect Mood"},
  {"id": "Intransitive", "text": "Intransitive"},
  {"id": "Transitive", "text": "Transitive"},
  {"id": "Ditransitive", "text": "Ditransitive"},
  {"id": "Additional", "text": "Additional"},
  {"id": "ECV, Converbs, Serial Verbs", "text": "ECV, Converbs, Serial Verbs"},
  {"id": "Negatives and Prohibitives", "text": "Negatives and Prohibitives"},
  {"id": "Causatives and Passives", "text": "Causatives and Passives"},
  {"id": "Reduplication, echo forms and binomials", "text": "Reduplication, echo forms and binomials"},
  {"id": "Comparatives and Superlatives", "text": "Comparatives and Superlatives"},
  {"id": "Sentences with Adverbs", "text": "Sentences with Adverbs"},
  {"id": "Quantifiers and Intensifiers", "text": "Quantifiers and Intensifiers"},
  {"id": "Miscellaneous", "text": "Miscellaneous"}
]

function createInputElement(key, elevalue, type, quesdatavalue) {
  var qform = '';
  for (let i=0; i<elevalue.length; i++) {
    eval = key + ' ' + elevalue[i]
    var keyid = eval.replace(new RegExp(' ', 'g'), '_');
    var val = '';
    if (key === 'Language') {
      val = quesdatavalue[elevalue[i]];
    }
    else if (key === "Transcription") {
      val = quesdatavalue;
    }
    
    qform += '<div class="form-group">'+
              '<label for="'+ keyid +'">'+ eval +'</label>'+
              '<input type="'+type+'" class="form-control" id="'+ keyid +'"'+ 
              // 'placeholder="'+ eval +'" name="'+ eval +'" value="'+ val +'" required>'+
              'placeholder="'+ eval +'" name="'+ eval +'" value="'+ val +'">'+
              '</div>';
  }

  return qform;
}

function createTextareaElement(key, elevalue, type, quesdatavalue) {
  var qform = '';
  for (let i=0; i<elevalue.length; i++) {
    eval = key + ' ' + elevalue[i]
    var keyid = eval.replace(new RegExp(' ', 'g'), '_');
    qform += '<div class="form-group">'+
              '<label for="'+ keyid +'">'+ eval +'</label><br>'+
              '<textarea id="'+ keyid +'" name="'+ eval +'" rows="4" cols="50">'+
              '</textarea>'+
              '</div>';
  }

  return qform;
}

function createSelectElement(key, elevalue, type, quesdatavalue) {
  console.log(quesdatavalue)
  var qform = '';
  var keyid = key.replace(new RegExp(' ', 'g'), '_');
  qform += '<div class="form-group">'+
            '<label for="'+keyid+'">'+key+'</label>';
  if (type === 'multiple') {
    // qform += '<select class="quesselect" id="'+keyid+'" name="'+key+'" multiple="'+type+'" style="width: 100%" required>';
    qform += '<select class="quesselect" id="'+keyid+'" name="'+key+'" multiple="'+type+'" style="width: 100%">';
  }
  else {
    // qform += '<select class="quesselect" id="'+keyid+'" name="'+key+'" style="width: 100%" required>';
    qform += '<select class="quesselect" id="'+keyid+'" name="'+key+'" style="width: 100%">';
  }
  
  for (let i=0; i<elevalue.length; i++) {
    eval = elevalue[i]
    console.log(eval, quesdatavalue, quesdatavalue.includes(eval))
    if (type === 'multiple') {
      if (quesdatavalue.includes(eval)) {
        qform += '<option value="'+eval+'" selected>'+eval+'</option>';  
      }
      else {
        qform += '<option value="'+eval+'">'+eval+'</option>';
      }
    }
    else {
      if (quesdatavalue.includes(eval)) {
        console.log(eval, quesdatavalue)
        qform += '<option value="'+eval+'" selected>'+eval+'</option>';  
      }
      else {
        qform += '<option value="'+eval+'">'+eval+'</option>';
      }
    }
  }
  qform += '</select></div>';

  return qform;
}

function createquesform(quesprojectform) {
  // quesprojectform = questionaireprojectform;
  localStorage.setItem("quesactiveprojectform", JSON.stringify(quesprojectform));
  // console.log(newData);
  transcriptionRegions = quesprojectform['transcriptionRegions']
  localStorage.setItem("regions", JSON.stringify(transcriptionRegions));
  console.log(transcriptionRegions);
  // var activeAudioFilename = JSON.parse(localStorage.getItem('AudioFilePath')).split('/')[2];
  var activeAudioFilename = quesprojectform["QuesAudioFilePath"].split('/')[2];
  if (activeAudioFilename === undefined) {
    activeAudioFilename = '';
  }
  // console.log(activeAudioFilename)
  // var inpt = '<strong>Audio Filename: </strong><strong id="audioFilename">'+ activeAudioFilename +'</strong>'
  // $(".defaultfield").append(inpt);
  // lastActiveId = newData["lastActiveId"]
  // // console.log(lastActiveId)
  // inpt = '<input type="hidden" id="lastActiveId" name="lastActiveId" value="'+lastActiveId+'">';
  // $('.defaultfield').append(inpt);
  // inpt = ''
  // localStorage.removeItem('regions');
  localStorage.setItem("transcriptionDetails", JSON.stringify([quesprojectform['transcriptionDetails']]));
  localStorage.setItem("QuesAudioFilePath", JSON.stringify(quesprojectform['QuesAudioFilePath']));

  quesdata = quesprojectform['quesdata']
  console.log(quesdata);
  var quesform = '';
  var transcriptionBoundaryForm = '';
  // let instructionmode = '';
  // quesform += '<div class="col-md-6">';
  var qform = '<form action="/lifeques/savequestionnaire" method="POST" enctype="multipart/form-data">';

  for (let [key, value] of Object.entries(quesprojectform)) {
    console.log(key, value, value[0], typeof value, quesdata['prompt'][key]);
    
    if (key === 'Instruction') {
      continue;
    }

    eletype = value[0];
    elevalue = value[1];
    quesdatavalue = quesdata['prompt'][key]
    if (eletype === 'text') {
      if (key === 'Language') {
        quesdatavalue = quesdata['prompt']['text']['content']
        quesform += createInputElement(key, elevalue, eletype, quesdatavalue)
      }
      else {
        quesform += createInputElement(key, elevalue, eletype, quesdatavalue)
      }
      
    }
    else if (eletype === 'textarea') {
      quesform += createTextareaElement(key, elevalue, eletype, quesdatavalue)
    }
    else if (eletype === 'file') {
      quesform += createInputElement(key, elevalue, eletype, quesdatavalue)
    }
    else if (eletype === 'select') {
      quesform += createSelectElement(key, elevalue, '', quesdatavalue)
    }
    else if (eletype === 'multiselect') {
      if (key === 'Target') {
        quesform += createSelectElement(key, quesdatavalue, 'multiple', quesdatavalue)
      }
      else {
        quesform += createSelectElement(key, elevalue, 'multiple', quesdatavalue)
      }
      
    }
    else if (eletype === 'waveform') {
      quesTranscription = ''
      // quesform += createSelectElement(key, elevalue, 'multiple', quesdatavalue)
      if (quesdatavalue['audioId'] === '') {
        console.log('waveformmmm', eletype, elevalue, quesdatavalue)
        var x = document.getElementById("questranscriptionsubmit");
        console.log(x)
        x.style.display = "block";
        var x = document.getElementById("questranscriptionwaveform");
        console.log(x)
        x.style.display = "none";
        
        quesTranscription += createInputElement(key, ['Audio'], 'file', quesdatavalue);
        $('#questranscriptionaudio').html(quesTranscription);
      }
      else {
        start = transcriptionRegions[0]['start']
        end = transcriptionRegions[0]['end']
        boundaryId = transcriptionRegions[0]['boundaryID']
        lang = quesdatavalue['audioLanguage']
        val = transcriptionRegions[0]['data']['sentence'][boundaryId]['transcription'][lang]
        if (val === undefined) {
          val = '';
        }
        console.log('generate waveformmmm')
        var x = document.getElementById("questranscriptionsubmit");
        console.log(x)
        x.style.display = "none";
        var x = document.getElementById("questranscriptionwaveform");
        console.log(x)
        x.style.display = "block";
        console.log(quesdatavalue['audioLanguage'])
        quesTranscription += createInputElement(key, quesdatavalue['audioLanguage'], 'text', val);
        // $('#questranscription2').html(quesTranscription);
        transcriptionBoundaryForm += '<div class="form-group">'+
                                      '<label for="start">Boundary Start Time</label>'+
                                      '<input class="form-control" id="start" name="start" value="'+start+'" required/>'+
                                      '</div>'+
                                      '<div class="form-group">'+
                                      '<label for="end">Boundary End Time</label>'+
                                      '<input class="form-control" id="end" name="end" value="'+end+'" required/>'+
                                      '</div>';
        transcriptionBoundaryForm += quesTranscription;
        transcriptionBoundaryForm += // '<button type="submit" class="btn btn-success btn-block saveTempTranscription">Save Boundary</button>'+
                                      // '<center><i>or</i></center>'+
                                      '<button type="button" class="btn btn-danger btn-block" data-action="delete-region">Delete Boundary</button>';
        

      }
    }
  }
  // quesform += '<input class="btn btn-lg btn-primary" type="submit" value="Submit">';
  quesform += '<hr>'+
              '<div id="quesformControl">'+
                  '<button class="btn btn-info btn-lg" type="button" id="previous" onclick="previousQues()">'+
                  '<span class="previousaudio glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+
                  'Previous'+
                  '</button>'+
                  '<button class="btn btn-info btn-lg pull-right" type="button" id="next" onclick="nextQues()">'+
                  'Next'+
                  '<span class="nextaudio glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'+
                  '</button>'+
                  '<br>'+
                  '<br>'+
                  '<button type="submit" class="btn btn-warning btn-lg btn-block pull-right" id="saveques">'+
                    'Save'+
                    '<span class="glyphicon glyphicon-floppy-save" aria-hidden="true"></span>'+
                  '</button>'+
              '</div>';
  
  qform += transcriptionBoundaryForm + '<br><hr>' + quesform;
  qform += '</form>'
  // quesform += '</div>';
  
  $('#quesform').html(qform);
  $('.quesselect').select2({
    placeholder: 'select',
    // data: usersList,
    allowClear: true
  });
  $('#Target').select2({
    placeholder: 'select',
    data: targets,
    allowClear: true
  });

  quesIdDetails(quesdata['Q_Id'], quesdata['quesId'])
}

function quesIdDetails(Q_Id, quesId) {
  inpt = "";
  var inpt = '<strong>Questionnaire ID: </strong><strong id="Q_Id">'+ Q_Id +'</strong>'
  $(".defaultfield").append(inpt);
  lastActiveId = quesId
  // console.log(lastActiveId)
  inpt = '<input type="hidden" id="lastActiveId" name="lastActiveId" value="'+lastActiveId+'">';
  $('.defaultfield').append(inpt);
}

function previousQues() {
  var lastActiveId = document.getElementById("lastActiveId").value;
    $.ajax({
        url: '/lifeques/loadpreviousques',
        type: 'GET',
        data: {'data': JSON.stringify(lastActiveId)},
        contentType: "application/json; charset=utf-8", 
        success: function(response){
          window.location.reload();
        }
    });
    return false;
}

function nextQues() {
  var lastActiveId = document.getElementById("lastActiveId").value;
  $.ajax({
      url: '/lifeques/loadnextques',
      type: 'GET',
      data: {'data': JSON.stringify(lastActiveId)},
      contentType: "application/json; charset=utf-8", 
      success: function(response){
        window.location.reload();
      }
  });
  return false;
}

function unAnnotated() {
  unanno = '';
  $('#uNAnnotated').remove();
  $.ajax({
      url: '/lifeques/allunannotated',
      type: 'GET',
      data: {'data': JSON.stringify(unanno)},
      contentType: "application/json; charset=utf-8", 
      success: function(response){
          allunanno = response.allunanno;
          allanno = response.allanno;
          // console.log(allanno)
          var inpt = '';
          inpt += '<select class="col-sm-3 allanno" id="allanno" onchange="loadAnnoQues()">'+
                  '<option selected disabled>Completed</option>';
                  for (i=0; i<allanno.length; i++) {
                      inpt += '<option value="'+allanno[i]["quesId"]+'">'+allanno[i]["Q_Id"]+'</option>';
                  }
          inpt += '</select>';
          inpt += '<select class="pr-4 col-sm-3" id="allunanno" onchange="loadUnAnnoQues()">'+
                  '<option selected disabled>Not Completed</option>';
                  for (i=0; i<allunanno.length; i++) {
                      inpt += '<option value="'+allunanno[i]["quesId"]+'">'+allunanno[i]["Q_Id"]+'</option>';
                  }
          inpt += '</select>';
          $('.commentIDs').append(inpt);
      }
  });
  return false; 
}

function loadUnAnnoQues() {
  newQuesId = document.getElementById('allunanno').value;
  console.log(newQuesId)
  // loadRandomAudio(newQuesId)
  $.ajax({
      url: '/lifeques/loadunannoques',
      type: 'GET',
      data: {'data': JSON.stringify(newQuesId)},
      contentType: "application/json; charset=utf-8", 
      success: function(response){
          window.location.reload();
      }
  });
  return false;
}

function loadAnnoQues() {
  newQuesId = document.getElementById('allanno').value;
  console.log(newQuesId)
  // loadRandomAudio(newQuesId)
  $.ajax({
      url: '/lifeques/loadunannoques',
      type: 'GET',
      data: {'data': JSON.stringify(newQuesId)},
      contentType: "application/json; charset=utf-8", 
      success: function(response){
          window.location.reload();
      }
  });
  return false;
}

// $("#saveques").click(function() {
//   // console.log('sending transcription and morphemic details to the server');
//   var transcriptionData = Object()
//   var transcriptionRegions = localStorage.quesregions
//   var lastActiveId = document.getElementById("lastActiveId").value;
//   transcriptionData['lastActiveId'] = lastActiveId
//   transcriptionData['transcriptionRegions'] = transcriptionRegions
//   // console.log(transcriptionData)
//   $.getJSON('/savetranscription', {
  
//   a:JSON.stringify(transcriptionData)
//   }, function(data) {
//       window.location.reload();
//   });
//   return false;
// });
