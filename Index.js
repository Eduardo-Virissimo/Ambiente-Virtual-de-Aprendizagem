let user = document.getElementById("user")
let pass = document.getElementById("pass")
let classe = document.getElementById("selecionarclasse")
let escola = document.getElementById("escola")
let usuarioLogin = document.getElementById("userLog")
let senhaLogin = document.getElementById("senhaLog")
let nomeExcluir = document.getElementById("excluir")
let usersVetor = []
select2 = document.getElementById("escolaProfessor")
select1 = document.getElementById("escola")
select = document.getElementById("criarturma")
option = document.createElement("option")
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
escolas = JSON.parse(localStorage.getItem("escolas"))
turma = JSON.parse(localStorage.getItem("escolas"))


function EditarNota() {
  var table2 = document.getElementsByTagName('table')[1];
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  documentEditarTurma = document.getElementById("turmaEditar")
  documentEditarUC = document.getElementById("ucEditar")
  documentEscolaEditar = document.getElementById("escolaEditar")

  // alert(table2.rows[3].cells[2].innerHTML)
  for (i = 2; i < table2.rows.length; i++) {
    for (j = 0; j < vetorNotas.length; j++) {
      if (table2.rows[i].cells[0].innerHTML == vetorNotas[j].nome && table2.rows[i].cells[2].innerHTML == vetorNotas[j].tipoNota && vetorNotas[j].turma == documentEditarTurma.value && vetorNotas[j].escola == documentEscolaEditar.value && vetorNotas[j].uc == documentEditarUC.value && vetorNotas[j].semestre == document.getElementById("editarSemestre").value) {
        vetorNotas[j].nota = table2.rows[i].cells[1].firstChild.value;

      }
    }
  }
  localStorage.setItem("Notas", JSON.stringify(vetorNotas))
}
function EditarChamada() {
  var table2 = document.getElementsByTagName('table')[1];
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  Presenca = JSON.parse(localStorage.getItem("Presenca"))
  documentEditarTurma = document.getElementById("turmaEditar")
  documentEditarUC = document.getElementById("ucEditar")
  documentEscolaEditar = document.getElementById("escolaEditar")

  if (Presenca == null) {
    Presenca = []
  }
  // alert(table2.rows[3].cells[2].innerHTML)
  for (i = 2; i < table2.rows.length; i++) {
    for (j = 0; j < Presenca.length; j++) {
      if (table2.rows[i].cells[0].innerHTML == Presenca[j].aluno && Presenca[j].turma == documentEditarTurma.value && Presenca[j].escola == documentEscolaEditar.value && Presenca[j].uc == documentEditarUC.value) {
        if (table2.rows[i].cells[1].firstChild.checked == true) {
          Presenca[j].presenca = "presente"
        }
        else {
          Presenca[j].presenca = "nao presente"
        }

      }
    }
  }
  localStorage.setItem("Presenca", JSON.stringify(Presenca))
}





function ArrumarColegios() {
    /* selectEditarEscola = document.getElementById("escolaEditar")
    selectTurmaAluno = document.getElementById("turmaAluno")
    escolas = JSON.parse(localStorage.getItem("escolas"))
    selectEditarEmail = document.getElementById("editarEmail")
    alunos = JSON.parse(localStorage.getItem("usuario"))
    */listaEscolas = document.getElementById("escola")

  for (i = 0; i < listaEscolas.length; i++) {
    $('#escola').children().remove().end()
  }
  if (escolas != null) {
    escolas = JSON.parse(localStorage.getItem("escolas"))
    for (i = 0; i < escolas.length; i++) {
      option = document.createElement("option")
      option.text = escolas[i].colegio
      option.value = escolas[i].colegio
      select1.add(option)
    }
  }
}
function NovaTurmaLecionada(escola, Professor, uc, turmas) {

  this.escola = escola
  this.Professor = Professor
  this.uc = uc
  this.turmas = turmas
}
function UserProfessor(nome, nomeUsuario, senhaUsuario, classeUsuario, rfid, escola, uc, turma) {
  this.nome = nome
  this.nomeUsuario = nomeUsuario
  this.senha = senhaUsuario
  this.classe = classeUsuario
  this.rfid = rfid
  this.escola = escola
  this.turmaEscola = turma
  this.unidadeCurricular = uc
}
function User(nome, nomeUsuario, senhaUsuario, classeUsuario, rfid, escola, turma) {
  this.nome = nome
  this.nomeUsuario = nomeUsuario
  this.senha = senhaUsuario
  this.classe = classeUsuario
  this.rfid = rfid
  this.escola = escola
  this.turmaEscola = turma
}
function isEmpty(str) {
  return !str.trim().length
}
CurrentSession = JSON.parse(localStorage.getItem("CurrentSession"))
documentTurma = document.getElementById("turma")
documentuc = document.getElementById("uc")
documentEscola = document.getElementById("escola")
function CarregarNotas() {
  CurrentSession = JSON.parse(localStorage.getItem("CurrentSession"))
  documentTurma = document.getElementById("turma")
  documentuc = document.getElementById("uc")
  documentEscola = document.getElementById("escola")

}
function ListarProfessores() {


  vetorUsuarios = JSON.parse(localStorage.getItem("usuario"))
  // get input values
  // var fname = document.getElementById('fname').value;
  // var lname = document.getElementById('lname').value;
  //var age = document.getElementById('age').value;
  if (vetorUsuarios != null) {
    // get the html table
    // 0 = the first table
    // document.getElementById('table')[0]
    var table = document.getElementsByTagName('table')[0];
    //  tableTamanho = document.getElementById('table')
    // add new empty row to the table
    // 0 = in the top 
    // table.rows.length = the end
    // table.rows.length/2+1 = the center
    //table2 = document.getElementById('table')
    var newRow = table.insertRow(table.rows.length);

    // add cells to the row
    vetorUsuarios.sort((a, b) => {
      let fa = a.nome.toLowerCase(),
        fb = b.nome.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    for (i = table.rows.length - 1; i > 1; i--) {
      table.deleteRow(i)
    }
    for (i = 0; i < vetorUsuarios.length; i++) {
      if (vetorUsuarios[i].classe == "Professor") {
        var newRow = table.insertRow(table.rows.length);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);
        cel1.innerHTML = vetorUsuarios[i].escola;
        cel2.innerHTML = vetorUsuarios[i].nome
        cel3.innerHTML = vetorUsuarios[i].nomeUsuario
        cel4.innerHTML = vetorUsuarios[i].rfid
        cel5.innerHTML = vetorUsuarios[i].senha
        cel6.innerHTML = vetorUsuarios[i].unidadeCurricular
      }

    }
  }
  AtivarListagem()
}
function ListarTurmasLecionadas() {
  TurmasLecionadas = JSON.parse(localStorage.getItem("TurmasLecionadas"))
  if (TurmasLecionadas != null) {


    // get input values
    // var fname = document.getElementById('fname').value;
    // var lname = document.getElementById('lname').value;
    //var age = document.getElementById('age').value;

    // get the html table
    // 0 = the first table
    // document.getElementById('table')[0]
    var table2 = document.getElementsByTagName('table')[1];
    //  tableTamanho = document.getElementById('table')
    // add new empty row to the table
    // 0 = in the top 
    // table.rows.length = the end
    // table.rows.length/2+1 = the center
    // table2 = document.getElementById('table')
    TurmasLecionadas.sort((a, b) => {
      let fa = a.Professor.toLowerCase(),
        fb = b.Professor.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    var newRow = table2.insertRow(table2.rows.length);

    // add cells to the row

    for (i = table2.rows.length - 1; i > 1; i--) {
      table2.deleteRow(i)
    }
    vetorNotas = JSON.parse(localStorage.getItem("Notas"))
    for (i = 0; i < TurmasLecionadas.length; i++) {
      var newRow = table2.insertRow(table2.rows.length);
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      var cel4 = newRow.insertCell(3);
      var cel5 = newRow.insertCell(4);
      cel1.innerHTML = TurmasLecionadas[i].escola;
      cel2.innerHTML = TurmasLecionadas[i].Professor
      cel3.innerHTML = TurmasLecionadas[i].uc
      cel4.innerHTML = TurmasLecionadas[i].turmas
      cel5.innerHTML = "<button class='botaoExcluir' onclick='ExcluirTurmaLecionada()'>Excluir</button>";
    }
  }

  AtivarListagemTurmasLecionadas()

}
function CarregarEditarNotas() {
  if (TurmasLecionadas != null) {
    for (i = 0; i < TurmasLecionadas.length; i++) {
      if (TurmasLecionadas[i].Professor == CurrentSession.nome) {
        option = document.createElement("option")
        option.text = TurmasLecionadas[i].escola
        option.value = TurmasLecionadas[i].escola
        documentEscolaEditar.add(option)
      }
    }
  }
  if (documentEscolaEditar != null) {
    $("#escolaEditar option").each(function () {
      $(this).siblings('[value="' + this.value + '"]').remove();
    });
  }
  if (TurmasLecionadas != null) {
    for (i = 0; i < TurmasLecionadas.length; i++) {
      if (TurmasLecionadas[i].Professor == CurrentSession.nome) {
        option = document.createElement("option")
        option.text = TurmasLecionadas[i].uc
        option.value = TurmasLecionadas[i].uc
        documentEditarUC.add(option)
      }
    }
  }
  if (TurmasLecionadas != null) {
    for (i = 0; i < TurmasLecionadas.length; i++) {
      if (TurmasLecionadas[i].Professor == CurrentSession.nome && documentuc.value == TurmasLecionadas[i].uc) {
        for (j = 0; j < TurmasLecionadas[i].turmas.length; j++) {
          option = document.createElement("option")
          option.text = TurmasLecionadas[i].turmas[j]
          option.value = TurmasLecionadas[i].turmas[j]
          documentEditarTurma.add(option)
        }

      }
    }
  }
  if (documentTurma != null) {
    $("#editarTurma option").each(function () {
      $(this).siblings('[value="' + this.value + '"]').remove();
    });
  }
  vetorUsuarios = JSON.parse(localStorage.getItem("usuario"))
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  if (vetorNotas != null) {

    var table2 = document.getElementsByTagName('table')[1];

    var newRow = table2.insertRow(table2.rows.length);

    // add cells to the row
    vetorNotas.sort((a, b) => {
      let fa = a.nome.toLowerCase(),
        fb = b.nome.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    for (i = table2.rows.length - 1; i > 1; i--) {
      table2.deleteRow(i)
    }
    vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  }
  l = 0
  for (i = 0; i < vetorNotas.length; i++) {
    if (vetorNotas[i].escola == documentEscolaEditar.value && vetorNotas[i].turma == documentEditarTurma.value && vetorNotas[i].uc == documentEditarUC.value && vetorNotas[i].semestre == document.getElementById("editarSemestre").value) {
      var newRow = table2.insertRow(table2.rows.length);
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      var cel4 = newRow.insertCell(3);
      var cel5 = newRow.insertCell(4);
      cel1.innerHTML = vetorNotas[i].nome;

      cel2.innerHTML = "<input min='0' max='10' type='number' class='uga'>"
      // document.getElementsByClassName("uga")[i].value = vetorNotas[i].nota 
      document.getElementsByClassName("uga")[l].value = vetorNotas[i].nota
      l++
      //  cel2.val = 1

      cel3.innerHTML = vetorNotas[i].tipoNota
      cel4.innerHTML = vetorNotas[i].peso
      cel5.innerHTML = vetorNotas[i].semestre
    }
  }
}
function AdicionarNota() {
  cb = document.getElementById("check")
  var objetoTemporario = { escola: "", nome: "", uc: "", turma: "", nota: "", peso: "", Professor: "", tipoNota: "", semestre: "" }
  vetorAdicionarNota = JSON.parse(localStorage.getItem("Notas"))
  var table = document.getElementsByTagName('table')[0];
  CurrentSession = JSON.parse(localStorage.getItem("CurrentSession"))
  documentTipoNota = document.getElementById("tipoNota")
  VetorBacklog = JSON.parse(localStorage.getItem("backlog"))
  if (VetorBacklog == null) {
    VetorBacklog = []
  }
  if (vetorAdicionarNota == null) {
    vetorAdicionarNota = []
  }
  notajaAdicionada = false
  if (vetorAdicionarNota != null) {
    for (i = 0; i < vetorAdicionarNota.length; i++) {
      if (vetorAdicionarNota[i].tipoNota == documentTipoNota.value && vetorAdicionarNota[i].turma == documentTurma.value && vetorAdicionarNota[i].semestre == document.getElementById("semestre").value) {
        notajaAdicionada = true
      }
    }
  }
  if (notajaAdicionada == true) {
    alert("nota ja adicionada!")
  }
  else if (cb.checked == true && document.getElementById("tipoNota").value == "Avaliativa1" || document.getElementById("tipoNota").value == "Avaliativa2" || document.getElementById("tipoNota").value == "Avaliativa3" || document.getElementById("tipoNota").value == "Avaliativa4" || document.getElementById("tipoNota").value == "Avaliativa5" || document.getElementById("tipoNota").value == "Avaliativa6") {
    for (i = 2; i < table.rows.length; i++) {
      indice = i
      objetoTemporario.nome = table.rows[i].cells[0].innerHTML
      objetoTemporario.nota = table.rows[i].cells[1].firstChild.value;
      objetoTemporario.peso = table.rows[i].cells[2].firstChild.value;
      objetoTemporario.uc = documentuc.value
      objetoTemporario.escola = documentEscola.value
      objetoTemporario.turma = documentTurma.value
      objetoTemporario.Professor = CurrentSession.nome
      objetoTemporario.tipoNota = document.getElementById("tipoNota").value
      objetoTemporario.semestre = document.getElementById("semestre").value
      vetorAdicionarNota.push(objetoTemporario)
      objetoTemporario = { escola: "", nome: "", uc: "", turma: "", nota: "", peso: "", Professor: "", tipoNota: "", semestre: "" }

    }
    localStorage.setItem("Notas", JSON.stringify(vetorAdicionarNota))
    for (i = 2; i < table.rows.length; i++) {
      table.rows[i].cells[1].firstChild.value = ""
      table.rows[i].cells[2].firstChild.value = ""
    }
    frase = `O Professor ${CurrentSession.nome}  adicionou notas para a turma ${documentEditarTurma.value} da escola ${CurrentSession.escola}`
    VetorBacklog.push(frase)
    localStorage.setItem("backlog", JSON.stringify(VetorBacklog))
    CarregarEditarNotas()

  }
  else if (cb.checked == true && document.getElementById("tipoNota").value == "Rec1" || document.getElementById("tipoNota").value == "Rec2") {
    for (i = 2; i < table.rows.length; i++) {
      indice = i
      objetoTemporario.nome = table.rows[i].cells[0].innerHTML
      objetoTemporario.nota = table.rows[i].cells[1].firstChild.value;
      objetoTemporario.peso = ""
      objetoTemporario.uc = documentuc.value
      objetoTemporario.escola = documentEscola.value
      objetoTemporario.turma = documentTurma.value
      objetoTemporario.Professor = CurrentSession.nome
      objetoTemporario.tipoNota = document.getElementById("tipoNota").value
      objetoTemporario.semestre = document.getElementById("semestre").value
      vetorAdicionarNota.push(objetoTemporario)
      objetoTemporario = { escola: "", nome: "", uc: "", turma: "", nota: "", peso: "", Professor: "", tipoNota: "", semestre: "" }
    }
    localStorage.setItem("Notas", JSON.stringify(vetorAdicionarNota))
    for (i = 2; i < table.rows.length; i++) {
      table.rows[i].cells[1].firstChild.value = ""
    }
    CarregarEditarNotas()

  }
  else {
    alert("Você deve marcar a caixa!")
  }
}
function isObjEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}
function CalcularMedia() {
  MediaSemestre = JSON.parse(localStorage.getItem("Media"))
  var table2 = document.getElementsByTagName('table')[1];
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  user = JSON.parse(localStorage.getItem("usuario"))
  tempNotas = []
  tempNotaRec = []

  if (MediaSemestre == null) {
    MediaSemestre = []
  }
  numeroTeste = 100
  verificado = false
  vetorNumeroTeste = []
  if (vetorNotas == null) {
    vetorNotas = []
  }
  tempVetorNotas = vetorNotas

  for (i = 0; i < user.length; i++) {
    tempPeso = 0
    tempNota = 0
    tempNotaRec = []
    tempObjeto = {}
    if (user[i].classe == "Aluno" && user[i].turmaEscola == documentEditarTurma.value && user[i].escola == documentEscolaEditar.value) {

      tempVetorNotas = vetorNotas
      for (j = 0; j < vetorNotas.length; j++) {
        if (user[i].nome == vetorNotas[j].nome && user[i].escola == vetorNotas[j].escola && documentEditarUC.value == vetorNotas[j].uc && vetorNotas[j].semestre == document.getElementById("editarSemestre").value && vetorNotas[j].tipoNota == "Rec1" || vetorNotas[j].tipoNota == "Rec2") {
          tempNotaRec.push(vetorNotas[j].nota)
        }
      }
      tempVetorNotas.sort((a, b) => {
        let fa = a.nota.toLowerCase(),
          fb = b.nota.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      verificar = false
      if (tempNotaRec.length > 0) {
        uga = 0
        for (j = 0; j < tempNotaRec.length; j++) {

          if (tempVetorNotas[j].nota <= tempNotaRec[j] && tempVetorNotas[j].nome == user[i].nome && tempVetorNotas[j].uc == documentEditarUC.value && tempVetorNotas[j].turma == user[i].turmaEscola && tempVetorNotas[j].semestre == document.getElementById("editarSemestre").value) {
            tempVetorNotas[j].nota = tempNotaRec[j]


          }
        }

      }
      verificar2 = false
      MediaJaFeita = false
      for (j = 0; j < tempVetorNotas.length; j++) {
        if (tempVetorNotas[j].nome == user[i].nome && tempVetorNotas[j].uc == documentEditarUC.value && tempVetorNotas[j].semestre == document.getElementById("editarSemestre").value && tempVetorNotas[j].turma == user[i].turmaEscola && tempVetorNotas[j].tipoNota == "Avaliativa1" || tempVetorNotas[j].tipoNota == "Avaliativa2" || tempVetorNotas[j].tipoNota == "Avaliativa3" || tempVetorNotas[j].tipoNota == "Avaliativa4" || tempVetorNotas[j].tipoNota == "Avaliativa5" || tempVetorNotas[j].tipoNota == "Avaliativa6") {

          tempNota += Number(tempVetorNotas[j].nota * tempVetorNotas[j].peso)
          tempPeso += Number(tempVetorNotas[j].peso)
          verificar2 = true
        }
      }
      if (verificar2 == true) {

        tempObjeto.nota = (tempNota / tempPeso).toFixed(2)
        tempObjeto.nome = user[i].nome
        tempObjeto.turma = user[i].turmaEscola
        tempObjeto.escola = user[i].escola
        tempObjeto.uc = document.getElementById("ucEditar").value
        tempObjeto.semestre = document.getElementById("editarSemestre").value
        // tempObjeto.Professor = localStorage.getItem("CurrentSession").nome
      }
      else {
        tempObjeto = {}
      }
      if (isObjEmpty(tempObjeto) != true) {
        for (j = 0; j < MediaSemestre.length; j++) {
          if (MediaSemestre[j].nome == tempObjeto.nome && MediaSemestre[j].turma == tempObjeto.turma && MediaSemestre[j].semestre == tempObjeto.semestre) {
            MediaJaFeita = true
          }
        }
        if (MediaJaFeita != true && verificar2 == true) {
          MediaSemestre.push(tempObjeto)
          localStorage.setItem("Media", JSON.stringify(MediaSemestre))
        }
        else {
          alert("A media ja foi fechada!")
        }
      }
      $("#ucEditar option").each(function () {
        $(this).siblings('[value="' + this.value + '"]').remove();
      });
      $("#turmaEditar option").each(function () {
        $(this).siblings('[value="' + this.value + '"]').remove();
      });

      /*if (user[i].classe == "Aluno" && user[i].turmaEscola == documentEditarTurma.value && user[i].escola == documentEscolaEditar.value) {
        //colocar um if ali em cima pra verificar se o user pertence as verificações abaixo
        for (j = 0; j < vetorNotas.length; j++) {
          if (user[i].nome == vetorNotas[j].nome && user[i].classe == "Aluno" && user[i].turmaEscola == vetorNotas[j].turma && user[i].escola == vetorNotas[j].escola && vetorNotas[j].tipoNota == "Rec1" || vetorNotas[j].tipoNota == "Rec2") {
            tempNotaRec.push(vetorNotas[j].nota)
  
          }
        }
  
        tempVetorNotas.sort((a, b) => {
          let fa = a.nota.toLowerCase(),
            fb = b.nota.toLowerCase();
    
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        if (tempNotaRec.length != null) {
          uga = 0
          for (j = 0; tempNotaRec.length; j++) {
            alert(tempVetorNotas[j].nota)
            if (parseFloat(tempVetorNotas[j].nota) <= parseFloat(tempNotaRec[j]) && tempVetorNotas[j].nome == user[i].nome && tempVetorNotas[j].uc == documentEditarUC.value && tempVetorNotas[j].turma == user[i].turmaEscola) {
              tempVetorNotas[j].nota = tempNotaRec[j]
            }
          }
  }
           for(j = 0;j < tempVetorNotas.length;j++){
             if(tempVetorNotas[j].nome == user[i].nome && tempVetorNotas[j].uc == documentEditarUC.value && tempVetorNotas[j].turma == user[i].turmaEscola){
               tempPeso+= parseInt(tempVetorNotas[j].peso)
               tempNota+= parseFloat(tempVetorNotas[j].nota) * parseInt(peso)
             }
           }
            tempObjeto.aluno = user[i].nome
            tempObjeto.media = tempPeso/tempNota
            MediaSemestre.push(tempObjeto)
            localStorage.setItem("Media", JSON.stringify(MediaSemestre))
          
          
         
          
        
      }
    }*/
      $("#escolaEditar option").each(function () {
        $(this).siblings('[value="' + this.value + '"]').remove();
      });
      $("#turmaEditar option").each(function () {
        $(this).siblings('[value="' + this.value + '"]').remove();
      });
      $("#ucEditar option").each(function () {
        $(this).siblings('[value="' + this.value + '"]').remove();
      });

    }
    CarregarMedia()
    $("#ucMedia option").each(function () {
      $(this).siblings('[value="' + this.value + '"]').remove();
    });

  }
}
function convertIntObj(obj) {
  const res = {}
  for (const key in obj) {
    res[key] = {};
    for (const prop in obj[key]) {
      const parsed = parseInt(obj[key][prop], 10);
      res[key][prop] = isNaN(parsed) ? obj[key][prop] : parsed;
    }
  }
  return res;
}


/* for (i = 0; i < user.length; i++) {
     for(j = 2;j < table2.rows.length;j++){
       if(user[i].nome == table2.rows[j].cells[0].innerHTML && user[i].classe == "Aluno"){
         tempNotas.push(parseFloat(table2.rows[j].cells[1].firstChild.value))
         tempObjeto.notas = tempNotas
         tempObjeto.aluno = user[i].nome
       }
       
     }
     MediaSemestre.push(tempObjeto)
     tempNotas = []

   }*/

function CarregarMedia() {
  /*
  <select id="escolaMedia" style="width: 180px;"></select>
<select id="ucMedia" style="width: 180px;"></select>
<select id="turmaMedia" style="width: 180px;"></select>
<select id="semestreMedia" style="width: 180px;"></select>*/
  documentEscolaMedia = document.getElementById("escolaMedia")
  documentucMedia = document.getElementById("ucMedia")
  documentTurmaMedia = document.getElementById("turmaMedia")
  documentSemestreMedia = document.getElementById("semestreMedia")
  vetorUsuarios = JSON.parse(localStorage.getItem("usuario"))
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  vetorMedia = JSON.parse(localStorage.getItem("Media"))
  if(vetorMedia == null){
    vetorMedia = []
  }
  if(vetorNotas == null){
    vetorNotas = []
  }
  CurrentSession = JSON.parse(localStorage.getItem("CurrentSession"))
  if (TurmasLecionadas != null) {
    for (i = 0; i < TurmasLecionadas.length; i++) {
      if (TurmasLecionadas[i].Professor == CurrentSession.nome) {
        option = document.createElement("option")
        option.text = TurmasLecionadas[i].escola
        option.value = TurmasLecionadas[i].escola
        documentEscolaMedia.add(option)
      }
    }
  }
  if (documentEscolaEditar != null) {
    $("#escolaMedia option").each(function () {
      $(this).siblings('[value="' + this.value + '"]').remove();
    });
  }
  if (TurmasLecionadas != null) {
    for (i = 0; i < TurmasLecionadas.length; i++) {
      if (TurmasLecionadas[i].Professor == CurrentSession.nome) {
        option = document.createElement("option")
        option.text = TurmasLecionadas[i].uc
        option.value = TurmasLecionadas[i].uc
        documentucMedia.add(option)
      }
    }
  }
  if (TurmasLecionadas != null) {
    for (i = 0; i < TurmasLecionadas.length; i++) {
      if (TurmasLecionadas[i].Professor == CurrentSession.nome && documentuc.value == TurmasLecionadas[i].uc) {
        for (j = 0; j < TurmasLecionadas[i].turmas.length; j++) {
          option = document.createElement("option")
          option.text = TurmasLecionadas[i].turmas[j]
          option.value = TurmasLecionadas[i].turmas[j]
          documentTurmaMedia.add(option)
        }

      }
    }
  }
  if (documentTurmaMedia != null) {
    $("#turmaMedia option").each(function () {
      $(this).siblings('[value="' + this.value + '"]').remove();
    });
  }
  vetorUsuarios = JSON.parse(localStorage.getItem("usuario"))
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  vetorUsuarios = JSON.parse(localStorage.getItem("usuario"))
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  if (vetorNotas != null) {

    var table3 = document.getElementsByTagName('table')[2];

    var newRow = table3.insertRow(table3.rows.length);

    // add cells to the row
    vetorMedia.sort((a, b) => {
      let fa = a.nome.toLowerCase(),
        fb = b.nome.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    for (i = table3.rows.length - 1; i > 1; i--) {
      table3.deleteRow(i)
    }
    vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  }
  l = 0
  for (i = 0; i < vetorMedia.length; i++) {
    if (vetorMedia[i].escola == documentEscolaMedia.value && vetorMedia[i].turma == documentTurmaMedia.value && vetorMedia[i].uc == documentucMedia.value && vetorMedia[i].semestre == documentSemestreMedia.value) {
      var newRow = table3.insertRow(table3.rows.length);
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      cel1.innerHTML = vetorMedia[i].nome;

      cel2.innerHTML = vetorMedia[i].nota

    }
  }
}
function ExcluirTurmaLecionada() {
  objetoTemporario = { escola: "", Professor: "", uc: "", turmas: "" }
  // event.target will be the input element.
  TurmasLecionadas = JSON.parse(localStorage.getItem("TurmasLecionadas"))
  var table2 = document.getElementsByTagName('table')[1];
  btndel = document.getElementsByClassName("botaoExcluir")
  if (typeof (btndel) == "object") {
    indice = $(btndel).closest("tr").index()
    verificarExcluido = false
    objetoTemporario.escola = table2.rows[indice].cells[0].innerHTML
    objetoTemporario.Professor = table2.rows[indice].cells[1].innerHTML
    objetoTemporario.uc = table2.rows[indice].cells[2].innerHTML
    objetoTemporario.turmas = table2.rows[indice].cells[3].innerHTML
    vetorExcluir = []
    for (i = 0; i < TurmasLecionadas.length; i++) {
      if (TurmasLecionadas[i].escola == objetoTemporario.escola && TurmasLecionadas[i].Professor == objetoTemporario.Professor && TurmasLecionadas[i].uc == objetoTemporario.uc && TurmasLecionadas[i].turmas == objetoTemporario.turmas) {
        verificarExcluido = true
        vetorExcluir.push(i)


        posicao = i
      }
    }
    if (verificarExcluido == true) {
      for (i = vetorExcluir.length - 1; i >= 0; i--) {
        TurmasLecionadas.splice(vetorExcluir[i], 1)
      }
      localStorage.setItem("TurmasLecionadas", JSON.stringify(TurmasLecionadas))

      /*

      
      if (verificarExcluido == true) {
    vetorEliminar = []
    alert(salvarNome)
    for(i = 0;i < vetorNotas.length;i++){
      if(vetorNotas[i].nome == salvarNome){
        vetorEliminar.push(i)
       
       
               
        posicaoExcluir2 = i
        //TurmasLecionadas.splice(posicaoExcluir2, 1)

        
      
      }
    }
    for(i = vetorEliminar.length -1;i >= 0;i--){
      vetorNotas.splice(vetorEliminar[i], 1)
    }*/
    }
    $(btndel).closest("tr").remove();
    ListarTurmasLecionadas()
  }
  else {
    return false;
  }

}
function ListarTurma() {


  vetorEscolas = JSON.parse(localStorage.getItem("escolas"))
  // get input values
  // var fname = document.getElementById('fname').value;
  // var lname = document.getElementById('lname').value;
  //var age = document.getElementById('age').value;

  // get the html table
  // 0 = the first table
  var table = document.getElementsByTagName('table')[0];
  //  tableTamanho = document.getElementById('table')
  // add new empty row to the table
  // 0 = in the top 
  // table.rows.length = the end
  // table.rows.length/2+1 = the center
  table2 = document.getElementById('table')
  var newRow = table.insertRow(table.rows.length);

  // add cells to the row
  if (vetorEscolas != null) {
    vetorEscolas.sort((a, b) => {
      let fa = a.colegio.toLowerCase(),
        fb = b.colegio.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    for (i = table.rows.length - 1; i > 1; i--) {
      table.deleteRow(i)
    }
    for (i = 0; i < vetorEscolas.length; i++) {

      var newRow = table.insertRow(table.rows.length);
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      cel1.innerHTML = vetorEscolas[i].colegio;
      cel2.innerHTML = vetorEscolas[i].turmaEscola

    }
  }
  AtivarListagem()

}

let posicao

function VerificarCadastroTurma() {
  flagTurmaJaCadastrada = false
  flagVerificarEscola = false
  listaEscolas = JSON.parse(localStorage.getItem("escolas"))
  caixaEscolas = document.getElementById("criarturma").value
  numeroTurma = document.getElementById("numeroturma").value

  for (i = 0; i < listaEscolas.length; i++) {
    if (listaEscolas[i].colegio == caixaEscolas) {
      flagVerificarEscola = true
      posicaoEscola = i
      break
    }
  }
  if (flagVerificarEscola == true) {
    for (i = 0; i < listaEscolas[posicaoEscola].turmaEscola.length; i++) {
      if (listaEscolas[posicaoEscola].turmaEscola[i] == numeroTurma) {
        flagTurmaJaCadastrada = true
        break
      }
    }
  }
  if (flagTurmaJaCadastrada == true) {
    alert("turma já cadastrada!")
    return true
  }
  else {
    return false
  }

}
function CadastrarTurma() {

  turma = JSON.parse(localStorage.getItem("escolas"))

  if (VerificarCadastroTurma() == false) {
    if (turma == null) {
      turma = []


      for (i = 0; i < turma.length; i++) {

        if (turma[i].colegio == document.getElementById("criarturma").value) {

          turma[i].turmaEscola.push(document.getElementById("numeroturma").value)
          localStorage.setItem("escolas", JSON.stringify(turma))
          ListarTurma()
          break
        }
      }
    }
    else {
      for (i = 0; i < turma.length; i++) {
        if (turma[i].colegio == document.getElementById("criarturma").value) {
          turma[i].turmaEscola.push(document.getElementById("numeroturma").value)
          localStorage.setItem("escolas", JSON.stringify(turma))
          ListarTurma()
          break
        }
      }

    }
  }

}






/*function Professor(nomeProfessor, materiaProfessor) {
  this.nomeProfessor = nomeProfessor
  this.materiaProfessor = materiaProfessor
}*/
function codeAddresss() {
  EscolaEditarTurma = document.getElementById("EscolaEditarTurma")
  escolas = JSON.parse(localStorage.getItem("escolas"))
  if (escolas != null) {
    for (i = 0; i < escolas.length; i++) {
      $('#criarturma').children().remove().end()
    }
  }
  if (escolas != null) {
    for (i = 0; i < escolas.length; i++) {
      $('#EscolaEditarTurma').children().remove().end()
    }
  }

  if (escolas != null && select != null) {
    for (i = 0; i < escolas.length; i++) {
      option = document.createElement("option")
      option.text = escolas[i].colegio
      option.value = escolas[i].colegio
      select.add(option)
    }
    escolas = JSON.parse(localStorage.getItem("escolas"))
  }
  if (escolas != null && EscolaEditarTurma != null) {
    for (i = 0; i < escolas.length; i++) {
      option = document.createElement("option")
      option.text = escolas[i].colegio
      option.value = escolas[i].colegio
      EscolaEditarTurma.add(option)
    }
  }
}

let selecionarClasse
function CarregarDadosEditar() {
  nomeTemporario = document.getElementById("editarEmail").value
  alunos = JSON.parse(localStorage.getItem("usuario"))

  // document.getElementById("escolaEditar").selectedIndex = 1;
  //document.getElementById("escolaEditar").value = 'Leonor';
  //document.getElementById("escolaEditar").text()
  // $("#escolaEditar[id='1']").html('Leonor')
  // document.getElementById("escolaEditar").html('Leonor')

  if (alunos != null) {
    for (i = 0; i < alunos.length; i++) {
      if (nomeTemporario == alunos[i].nomeUsuario) {
        document.getElementById("nomeEditar").value = alunos[i].nome
        document.getElementById("passEditar").value = alunos[i].senha
        document.getElementById("rfidEditar").value = alunos[i].rfid
        mudarEscola()//selectEditarEscola.remove(option)
        break
        //mudarEscola()
        //changeSelected
        //changeSelected2
      }

    }
  }
}
function CadastrarProfessor() {

  nome = document.getElementById("nomeProfessor").value
  user = document.getElementById("userProfessor").value
  pass = document.getElementById("passProfessor").value
  passConfirm = document.getElementById("passconfirmProfessor").value
  uc = document.getElementById("uc")
  rfid = document.getElementById("rfid-tag").value
  selecionarClasse = document.getElementById("selecionarclasseProfessor").value
  escola = document.getElementById("escolaProfessor").value
  escolaTeste = document.getElementById("escolaProfessor")
  usersVetor = JSON.parse(localStorage.getItem("usuario"))
  //turma = document.getElementById("turmaProfessor").value
  vetorUC = []
  stringUC = ''
  vetorEscolasTeste = []
  vetorEscolas = []
  escolaLecionada = document.getElementById("EscolaLecionada")
  Professor = document.getElementById("Professor")
  turmaLecionada = document.getElementById("TurmaLecionada")
  selectTurmaAluno = document.getElementById("turmaAluno")
  escolas = JSON.parse(localStorage.getItem("escolas"))
  selectEscolaProfessor = document.getElementById("escolaProfessor")
  usuarios = JSON.parse(localStorage.getItem("usuario"))
  uclecionada = document.getElementById("uclecionada")
  var values = $('#escolaProfessor').val();
  for (i = 0; i < values.length; i++) {
    vetorEscolas.push(values[i])
  }

  if (uc != null) {
    for (i = 0; i < uc.length; i++) {
      vetorUC.push(uc[i].value)
    }

  }
  /*if (uc != null) {
    for (i = 0; i < uc.length; i++) {
      if (uc[i] != ",") {
        stringUC += uc[i]
      }
      if (uc[i] == "," || i == uc.length - 1) {

        vetorUC.push(stringUC)
        stringUC = ""
      }
    }
  }*/

  stringEscolas = ""

  let usuario = new UserProfessor(nome, user, pass, selecionarClasse, rfid, vetorEscolas, vetorUC)



  if (usersVetor == null) {
    if (isEmpty(user) || isEmpty(pass)) {
      alert("favor preencher corretamente os campos!")
    }
    else if (!user.match(pattern)) {
    }
    else if (isEmpty(nome)) {
      alert("favor preencher os campos corretamente!")
    }
    else if (vetorUC.length < 1) {
      alert("favor preencher os campos corretamente!")
    }
    else if (selectEscolaProfessor == null) {
      alert("O campo nao pode estar vazio!")
    }
    else if (VerificarProfessor()) {
      alert("usuario ja cadastrado!")
    }
    else if (pass != passConfirm) {
      alert("as senhas nao coincidem!")
    }
    else {
      usersVetor = []
      usersVetor.push(usuario)
      localStorage.setItem("usuario", JSON.stringify(usersVetor))
      ListarProfessores()
      CarregarEscolasLecionadas()
    }
  }
  else {

    if (isEmpty(user) || isEmpty(pass)) {
      alert("favor preencher corretamente os campos!")
    }
    else if (!user.match(pattern)) {
    }
    else if (isEmpty(nome)) {
      alert("favor preencher os campos corretamente!")
    }
    else if (vetorUC.length < 1) {
      alert("favor preencher os campos corretamente!")
    }
    else if (selectEscolaProfessor == null) {
      alert("O campo nao pode estar vazio!")
    }
    else if (VerificarProfessor()) {
      alert("usuario ja cadastrado!")
    }
    else if (pass != passConfirm) {
      alert("as senhas nao coincidem!")
    }
    else {
      usersVetor.push(usuario)
      localStorage.setItem("usuario", JSON.stringify(usersVetor))
      ListarProfessores()
      CarregarEscolasLecionadas()
    }
  }

}
function ApagarSession() {
  Apagar = JSON.parse(localStorage.getItem("CurrentSession"))
  Apagar = []
  localStorage.setItem("CurrentSession", JSON.stringify(Apagar))
}
function EditarProfessor() {
  nome = document.getElementById("nomeProfessor").value
  user = document.getElementById("userProfessor").value
  pass = document.getElementById("passProfessor").value
  passConfirm = document.getElementById("passconfirmProfessor").value
  uc = document.getElementById("uc").value
  rfid = document.getElementById("rfidProfessor").value
  selecionarClasse = document.getElementById("selecionarclasseProfessor").value
  escola = document.getElementById("escolaProfessor").value
  escolaTeste = document.getElementById("escolaProfessor")
  usersVetor = JSON.parse(localStorage.getItem("usuario"))
  //turma = document.getElementById("turmaProfessor").value
  vetorUC = []
  stringUC = ''
  vetorEscolasTeste = []
  vetorEscolas = JSON.parse(localStorage.getItem("escolas"))

  var values = $('#escolaProfessor').val();

  for (i = 0; i < values.length; i++) {
    vetorEscolasTeste.push(values[i])
  }

  let posicaoExcluir
  let posicaoExcluir2
  let posicao
  if (uc != null) {
    for (i = 0; i < uc.length; i++) {
      vetorUC.push(uc[i].value)
    }

  }
  nome = document.getElementById("nomeProfessor").value
  user = document.getElementById("userProfessor").value
  pass = document.getElementById("passProfessor").value
  passConfirm = document.getElementById("passconfirmProfessor").value
  verificar4 = false
  rfid = document.getElementById("rfidProfessor").value
  selecionarClasse = document.getElementById("selecionarclasseProfessor").value
  escola = document.getElementById("escolaProfessor").value
  usersVetor = JSON.parse(localStorage.getItem("usuario"))
  TurmasLecionadas = JSON.parse(localStorage.getItem("TurmasLecionadas"))
  if (isEmpty(user) || isEmpty(pass)) {
    alert("favor preencher corretamente os campos!")
  }
  else if (!user.match(pattern)) {
  }
  else if (isEmpty(nome)) {
    alert("favor preencher os campos corretamente!")
  }
  else if (vetorUC.length < 1) {
    alert("favor preencher os campos corretamente!")
  }
  else if (selectEscolaProfessor == null) {
    alert("O campo nao pode estar vazio!")
  }
  else if (pass != passConfirm) {
    alert("as senhas nao coincidem!")
  }
  else {
    for (i = 0; i < usersVetor.length; i++) {
      if (usersVetor[i].nomeUsuario == user) {
        usersVetor[i].nome = nome
        usersVetor[i].senha = pass
        usersVetor[i].rfid = rfid
        usersVetor[i].escola = vetorEscolasTeste
        usersVetor[i].unidadeCurricular = vetorUC
        verificar4 = true
        //usersVetor[i].turmaEscola = turma
      }
    }
    let salvarPosicao = []
    if (verificar4 == false) {
      alert("Este usuário não existe!")
    }

    localStorage.setItem("usuario", JSON.stringify(usersVetor))
    localStorage.setItem("TurmasLecionadas", JSON.stringify(TurmasLecionadas))

    CarregarEscolasLecionadas()
  }


}




function Editar() {
  nome = document.getElementById("nomeEditar").value
  user = document.getElementById("editarEmail").value
  pass = document.getElementById("passEditar").value
  rfid = document.getElementById("rfidEditar").value
  escola = document.getElementById("escolaEditar").value
  turma = document.getElementById("turmaAlunoEditar").value

  usersVetor = JSON.parse(localStorage.getItem("usuario"))
  for (i = 0; i < usersVetor.length; i++) {
    if (usersVetor[i].nomeUsuario == user) {
      usersVetor[i].nome = nome
      usersVetor[i].senha = pass
      usersVetor[i].rfid = rfid
      usersVetor[i].escola = escola
      usersVetor[i].turmaEscola = turma
      break
    }
  }
  localStorage.setItem("usuario", JSON.stringify(usersVetor))
  Listar()
}
function Cadastrar() {

  let user = document.getElementById("user")
  let pass = document.getElementById("pass")
  let classe = document.getElementById("selecionarclasse")
  let escola = document.getElementById("escola")
  nome = document.getElementById("nome")
  usersVetor = JSON.parse(localStorage.getItem("usuario"))
  rfid = document.getElementById("rfid-tag")
  turma = document.getElementById("turmaAluno")
  let usuario = new User(nome.value, user.value, pass.value, classe.value, rfid.value, escola.value, turma.value)


  if (usersVetor == null) {
    if (isEmpty(user.value) || isEmpty(pass.value)) {
      alert("favor preencher corretamente os campos!")
    }
    else if (!user.value.match(pattern)) {
    }
    else if (isEmpty(nome.value)) {

    }
    else if (Verificar()) {
      alert("usuario ja cadastrado!")
    }
    else if (document.getElementById("pass").value != document.getElementById("passconfirm").value) {
      alert("as senhas nao coincidem!")
    }
    else if (turma.options.length == 0) {
      alert("nao pode estar vazio!")
    }
    else {
      usersVetor = []
      usersVetor.push(usuario)
      localStorage.setItem("usuario", JSON.stringify(usersVetor))



      if (usersVetor != null) {
        for (i = 0; i < escolas.length; i++) {
          $('#editarEmail').children().remove().end()
        }
        for (i = 0; i < usersVetor.length; i++) {
          if (usersVetor[i].classe == "Aluno") {
            option = document.createElement("option")
            option.text = usersVetor[i].nomeUsuario
            option.value = usersVetor[i].nomeUsuario
            selectEditarEmail.add(option)
          }

        }

      }
      codeAddresss()
      CarregarDadosEditar()
      Listar()
      document.getElementById("nome").value = ""
      document.getElementById("user").value = ""
      document.getElementById("pass").value = ""
      document.getElementById("passconfirm").value = ""
      document.getElementById("rfid").value = ""
    }
  }
  else {

    if (isEmpty(user.value) || isEmpty(pass.value)) {
      alert("favor preencher corretamente os campos!")
    }
    else if (!user.value.match(pattern)) {
    }
    else if (isEmpty(nome.value)) {

    }
    else if (Verificar()) {
      alert("usuario ja cadastrado!")
    }
    else if (document.getElementById("pass").value != document.getElementById("passconfirm").value) {
      alert("as senhas nao coincidem!")
    }
    else if (turma.options.length == 0) {
      alert("nao pode estar vazio!")
    }
    else {
      usersVetor.push(usuario)
      localStorage.setItem("usuario", JSON.stringify(usersVetor))

      if (usersVetor != null) {
        for (i = 0; i < escolas.length; i++) {
          $('#editarEmail').children().remove().end()
        }
        for (i = 0; i < usersVetor.length; i++) {
          if (usersVetor[i].classe == "Aluno") {
            option = document.createElement("option")
            option.text = usersVetor[i].nomeUsuario
            option.value = usersVetor[i].nomeUsuario
            selectEditarEmail.add(option)
          }

        }

      }
      codeAddresss()
      CarregarDadosEditar()
      Listar()
    }

  }
}

function Logar() {
  valorCaixaUsuario = document.getElementById("userLog")
  valorCaixaSenha = document.getElementById("senhaLog")
  let x = {};
  flagLoginEfetuado = false

  usersVetor = JSON.parse(localStorage.getItem("usuario"))

  for (i = 0; i < usersVetor.length; i++) {
    if (valorCaixaUsuario.value == usersVetor[i].nomeUsuario && valorCaixaSenha.value == usersVetor[i].senha && usersVetor[i].classe == "Aluno") {
      flagLoginEfetuado = true
      x = { nomeUsuario: usersVetor[i].nomeUsuario, escola: usersVetor[i].escola, turma: usersVetor[i].turmaEscola, nome: usersVetor[i].nome }
      break
    }
    else {
      flagLoginEfetuado = false
    }
  }
  if (flagLoginEfetuado == true) {
    alert("login efetuado com sucesso!")
    localStorage.setItem("CurrentSession", JSON.stringify(x))
    window.location.href = "AlunoTELA.html#?"
  }
  else {
    alert("Login Falhou!")
  }
}
function Excluir() {
  verificarExcluido = false
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  user = JSON.parse(localStorage.getItem("usuario"))
  let salvarNome = ''
  if (vetorNotas == null) {
    vetorNotas = []
  }
  nomeExcluir = document.getElementById("excluir")
  if (user != null) {
    for (i = 0; i < user.length; i++) {
      if (nomeExcluir.value == user[i].nomeUsuario && user[i].classe == "Aluno") {

        posicaoExcluir = i
        salvarNome = user[posicaoExcluir].nome
        user.splice(posicaoExcluir, 1)
        alert("Usuário excluído!")
        localStorage.setItem("usuario", JSON.stringify(user))
        Listar()
        //codeAddresss()
        verificarExcluido = true

        break;

      }
    }
    document.getElementById("excluir").value = ''
  }
  codeAddresss()
  if (usersVetor != null) {
    for (i = 0; i < escolas.length; i++) {
      $('#editarEmail').children().remove().end()
    }
    for (i = 0; i < usersVetor.length; i++) {
      if (usersVetor[i].classe == "Aluno") {
        option = document.createElement("option")
        option.text = usersVetor[i].nomeUsuario
        option.value = usersVetor[i].nomeUsuario
        selectEditarEmail.add(option)
      }

    }
  }
  if (verificarExcluido == true) {
    vetorEliminar = []
    alert(salvarNome)
    for (i = 0; i < vetorNotas.length; i++) {
      if (vetorNotas[i].nome == salvarNome) {
        vetorEliminar.push(i)



        posicaoExcluir2 = i
        //TurmasLecionadas.splice(posicaoExcluir2, 1)



      }
    }
    for (i = vetorEliminar.length - 1; i >= 0; i--) {
      vetorNotas.splice(vetorEliminar[i], 1)
    }
    localStorage.setItem("Notas", JSON.stringify(vetorNotas))
  }
  document.getElementById("excluir").value = ''

  if (selectEditarEmail == null) {
    document.getElementById("nomeEditar").value = ''
    document.getElementById("passEditar").value = ''
    document.getElementById("rfidEditar").value = ''
  }







}
function ExcluirProfessor() {
  let user = JSON.parse(localStorage.getItem("usuario"));
  let TurmasLecionadas = JSON.parse(localStorage.getItem("TurmasLecionadas"));
  let nomeExcluir = document.getElementById("excluirProfessor")
  let posicaoExcluir
  let verificarExcluido = false

  let salvarNome = ""
  if (user != null) {
    for (i = 0; i < user.length; i++) {
      if (nomeExcluir.value == user[i].nomeUsuario && user[i].classe == "Professor") {

        posicaoExcluir = i
        salvarNome = user[i].nome
        user.splice(posicaoExcluir, 1)
        alert("Usuário excluído!")
        localStorage.setItem("usuario", JSON.stringify(user))
        ListarProfessores()
        //codeAddresss()
        verificarExcluido = true

        break;

      }
    }
    document.getElementById("excluirProfessor").value = ''
  }
  if (verificarExcluido == true) {
    vetorEliminar = []
    for (i = 0; i < TurmasLecionadas.length; i++) {
      if (TurmasLecionadas[i].Professor == salvarNome) {
        vetorEliminar.push[i]
        TurmasLecionadas.splice(posicaoExcluir2, 1)
        localStorage.setItem("TurmasLecionadas", JSON.stringify(TurmasLecionadas))
      }
    }
    for (i = vetorEliminar.length - 1; i >= 0; i--) {
      TurmasLecionadas.splice(vetorEliminar[i], 1)
    }
    /*
    if (verificarExcluido == true) {
    vetorEliminar = []
    alert(salvarNome)
    for(i = 0;i < vetorNotas.length;i++){
      if(vetorNotas[i].nome == salvarNome){
        vetorEliminar.push(i)
       
       
               
        posicaoExcluir2 = i
        //TurmasLecionadas.splice(posicaoExcluir2, 1)

        
      
      }
    }
    for(i = vetorEliminar.length -1;i >= 0;i--){
      vetorNotas.splice(vetorEliminar[i], 1)
    }*/



  }
  CarregarEscolasLecionadas2()
  ListarTurmasLecionadas()

}
function codeAddressColegios() {
  if (escolas != null) {
    for (i = 0; i < escolas.length; i++) {
      $('#criarturma').children().remove().end()
    }
  }
  escolas = JSON.parse(localStorage.getItem("escolas"))
  if (escolas != null) {
    for (i = 0; i < escolas.length; i++) {
      option = document.createElement("option")
      option.text = escolas[i].colegio
      option.value = escolas[i].colegio
      select.add(option)
    }
    escolas = JSON.parse(localStorage.getItem("escolas"))
  }
  if (escolas != null) {
    for (i = 0; i < escolas.length; i++) {
      option = document.createElement("option")
      option.text = escolas[i].colegio
      option.value = escolas[i].colegio
      EscolaEditarTurma.add(option)
    }
  }
  AtivarListagem()
  document.getElementById("lista").style.display = "none"
  ListarTurma()
}
function CarregarEscolasLecionadas2() {
  escolaLecionada = document.getElementById("EscolaLecionada")
  Professor = document.getElementById("Professor")
  turmaLecionada = document.getElementById("TurmaLecionada")
  selectTurmaAluno = document.getElementById("turmaAluno")
  escolas = JSON.parse(localStorage.getItem("escolas"))
  selectEscolaProfessor = document.getElementById("escolaProfessor")
  usuarios = JSON.parse(localStorage.getItem("usuario"))
  uclecionada = document.getElementById("uclecionada")





  for (i = 0; i < Professor.length; i++) {
    $('#Professor').children().remove().end()
  }

  if (uclecionada != null && usuarios != null) {
    for (i = 0; i < uclecionada.length; i++) {
      $('#uclecionada').children().remove().end()
    }

  }
  if (turmaLecionada != null) {

    for (i = 0; i < turmaLecionada.length; i++) {
      $('#TurmaLecionada').children().remove().end()

    }
  }
  for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i].classe == "Professor") {
      posicaoLegal = i
      for (j = 0; j < usuarios[i].escola.length; j++) {
        if (usuarios[i].escola[j] == escolaLecionada.value) {
          option = document.createElement("option")
          option.text = usuarios[i].nome
          option.value = usuarios[i].nome
          Professor.add(option)
        }
      }
    }

  }

  verificar2 = false
  verificar3 = false
  let salvarposicao2
  let salvarPosicao
  if (uclecionada != null && usuarios != null) {
    for (i = 0; i < uclecionada.length; i++) {
      $('#uclecionada').children().remove().end()
    }
    for (i = 0; i < usuarios.length; i++) {
      if (usuarios[i].nome == Professor.value) {
        salvarPosicao = i
        verificar2 = true
        break
      }
    }
    if (verificar2 == true) {
      for (j = 0; j < usuarios[salvarPosicao].unidadeCurricular.length; j++) {
        option = document.createElement("option")
        option.text = usuarios[salvarPosicao].unidadeCurricular[j]
        option.value = usuarios[salvarPosicao].unidadeCurricular[j]
        uclecionada.add(option)

      }
    }
  }
  if (turmaLecionada != null) {

    for (i = 0; i < turmaLecionada.length; i++) {
      $('#TurmaLecionada').children().remove().end()

    }
  }
  if (escolas != null) {
    for (i = 0; i < escolas.length; i++) {
      if (escolas[i].colegio == escolaLecionada.value) {
        salvarposicao2 = i
        verificar3 = true
      }
    }
  }
  if (verificar3 == true) {
    for (i = 0; i < escolas[salvarposicao2].turmaEscola.length; i++) {
      option = document.createElement("option")
      option.text = escolas[salvarposicao2].turmaEscola[i]
      option.value = escolas[salvarposicao2].turmaEscola[i]
      turmaLecionada.add(option)
    }
  }
}


function CarregarEditarChamada() {
  vetorPresenca = JSON.parse(localStorage.getItem("Presenca"))
  var table2 = document.getElementsByTagName('table')[1];
  if (vetorPresenca == null) {
    vetorPresenca = []
  }
  //  tableTamanho = document.getElementById('table')
  // add new empty row to the table
  // 0 = in the top 
  // table.rows.length = the end
  // table.rows.length/2+1 = the center
  //table2 = document.getElementById('table')
  var newRow = table2.insertRow(table2.rows.length);
  // add cells to the row
  vetorPresenca.sort((a, b) => {
    let fa = a.aluno.toLowerCase(),
      fb = b.aluno.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  for (i = table2.rows.length - 1; i > 1; i--) {
    table2.deleteRow(i)
  }

  documentEscolaEditar = document.getElementById("escolaEditar")
  documentEditarTurma = document.getElementById("turmaEditar")
  documentEditarUC = document.getElementById("ucEditar")
  selectEditarData = document.getElementById("dataEditar")
  vetorPresenca = JSON.parse(localStorage.getItem("Presenca"))
  if (vetorPresenca == null) {
    vetorPresenca = []
  }
  for (i = 0; i < vetorPresenca.length; i++) {
    if (vetorPresenca[i].escola == documentEscolaEditar.value && vetorPresenca[i].data == selectEditarData.value && vetorPresenca[i].turma == documentEditarTurma.value && vetorPresenca[i].uc == documentEditarUC.value) {
      var newRow = table2.insertRow(table2.rows.length);
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);


      cel1.innerHTML = vetorPresenca[i].aluno
      if (vetorPresenca[i].presenca == "presente") {
        cel2.innerHTML = "<input type='checkbox' checked>"
      }
      else {
        cel2.innerHTML = "<input type='checkbox'>"
      }

    }
  }
}

function CarregarData() {
  vetorUsuarios = JSON.parse(localStorage.getItem("usuario"))
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  selectEditarData = document.getElementById("dataEditar")
  vetorPresenca = vetorUsuarios = JSON.parse(localStorage.getItem("Presenca"))
  if (vetorPresenca == null) {
    vetorPresenca = []
  }/*$('#turma').children().remove().end()
} selectEditarData = document.getElementById("dataEditar")
        vetorPresenca = vetorUsuarios = JSON.parse(localStorage.getItem("Presenca"))
        for(i = 0;i < vetorPresenca.length;i++){
          option = document.createElement("option")
              option.text = vetorPresenca[i].data
              option.value = vetorPresenca[i].data
              selectEditarData.add(option)


          }
          for(i = 0;i < selectEditarData.length;i++){
            $("#dataEditar option").each(function () {
          $(this).siblings('[value="' + this.value + '"]').remove();
        });
          }*/
  for (i = 0; i < selectEditarData.length; i++) {
    $('#dataEditar').children().remove().end()
  }
  for (i = 0; i < vetorPresenca.length; i++) {
    option = document.createElement("option")
    option.text = vetorPresenca[i].data
    option.value = vetorPresenca[i].data
    selectEditarData.add(option)


  }
  for (i = 0; i < selectEditarData.length; i++) {
    $("#dataEditar option").each(function () {
      $(this).siblings('[value="' + this.value + '"]').remove();
    });
  }
}
function CadastrarPresenca() {
  var table2 = document.getElementsByTagName('table')[0];
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  documentEditarTurma = document.getElementById("turmaEditar")
  documentEditarUC = document.getElementById("ucEditar")
  documentEscolaEditar = document.getElementById("escolaEditar")
  tempObjeto = { aluno: "", presenca: "" }
  VetorPresenca = JSON.parse(localStorage.getItem("Presenca"))
  VetorBacklog = JSON.parse(localStorage.getItem("backlog"))
  if (VetorBacklog == null) {
    VetorBacklog = []
  }
  selectData = document.getElementById("data")
  if (VetorPresenca == null) {
    VetorPresenca = []
  }
  // alert(table2.rows[2].cells[].innerHTML)
  PresencaJaFeita = false
  for (i = 0; i < VetorPresenca.length; i++) {
    if (VetorPresenca[i].data == selectData.value && VetorPresenca[i].escola == documentEscola.value && VetorPresenca[i].turma == documentTurma.value && VetorPresenca[i].uc == documentuc.value) {
      PresencaJaFeita = true
    }
  }
  if (PresencaJaFeita == false) {
    for (i = 2; i < table2.rows.length; i++) {
      tempObjeto.aluno = table2.rows[2].cells[0].innerHTML
      tempObjeto.turma = documentTurma.value
      tempObjeto.escola = documentEscola.value
      tempObjeto.uc = documentuc.value
      tempObjeto.data = selectData.value
      if (table2.rows[i].cells[1].firstChild.checked == true) {
        tempObjeto.presenca = "presente"
      }
      else {
        tempObjeto.presenca = "nao presente"
      }
      VetorPresenca.push(tempObjeto)
      tempObjeto = { aluno: "", presenca: "" }
    }

    localStorage.setItem("Presenca", JSON.stringify(VetorPresenca))
    frase = `O Professor ${CurrentSession.nome}  fez a chamada para a turma ${documentTurma.value} da escola ${documentEscola.value}`
    VetorBacklog.push(frase)
    localStorage.setItem("backlog", JSON.stringify(VetorBacklog))

  }
  else {
    alert("A Chamada de hoje já foi feita!")
  }

  CarregarData()
  CarregarEditarChamada()
}
function ExcluirColegio() {
  colegioexcluir = document.getElementById("adicionarcolegio").value
  excluircolegio = JSON.parse(localStorage.getItem("escolas"))
  let posicaoExcluir

  for (i = 0; i < excluircolegio.length; i++) {
    if (colegioexcluir == excluircolegio[i].colegio) {
      posicaoExcluir = i
      excluircolegio.splice(posicaoExcluir, 1)
      alert("Colegio excluido!")
      localStorage.setItem("escolas", JSON.stringify(excluircolegio))
      ListarTurma()
      codeAddressColegios()
    }
  }
  document.getElementById("adicionarcolegio").value = ''
}

function ListarColegios() {
  lista = ""
  colegios = JSON.parse(localStorage.getItem("escolas"))
  for (i = 0; i < colegios.length; i++) {
    if (colegios[i]) {
      lista += colegios[i].colegio + "<br>"
    }
  }

  document.getElementById("listacolegios").innerHTML = lista
}

/*function Pesquisar() {
  user = JSON.parse(localStorage.getItem("usuario"));
  nomePesquisar = document.getElementById("userPesquisa")

  let encontrou = 0

  for (i = 0; i < user.length; i++) {
    if (nomePesquisar.value == user[i].nomeUsuario) {
      encontrou = 1
      posicaoPesquisar = i
    }
  }
  if (encontrou == 1) {
    document.getElementById("userPesquisa").value = user[posicaoPesquisar].nomeUsuario
    document.getElementById("passPesquisa").value = user[posicaoPesquisar].senha
  } else {
    alert("Usuário não encontrado!")
    document.getElementById("userPequisa").value = ''
  }
}
*/
function PesquisarProfessor() {
  usersVetor = JSON.parse(localStorage.getItem("usuario"))
  var table = document.getElementsByTagName('table')[0];
  //  tableTamanho = document.getElementById('table')
  // add new empty row to the table
  // 0 = in the top 
  // table.rows.length = the end
  // table.rows.length/2+1 = the center
  pesquisado = false
  //table2 = document.getElementById('table')
  var newRow = table.insertRow(table.rows.length);

  // add cells to the row
  if (usersVetor != null) {
    usersVetor.sort((a, b) => {
      let fa = a.nome.toLowerCase(),
        fb = b.nome.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })
  };
  // add cells to the row
  for (i = table.rows.length - 1; i > 1; i--) {
    table.deleteRow(i)
  }
  if (usersVetor != null) {
    for (i = 0; i < usersVetor.length; i++) {
      if (usersVetor[i].nome == document.getElementById("userPesquisa").value || usersVetor[i].nomeUsuario == document.getElementById("userPesquisa").value || usersVetor[i].turmaEscola == document.getElementById("userPesquisa").value || usersVetor[i].escola == document.getElementById("userPesquisa").value && usersVetor[i].classe == "Professor") {
        var newRow = table.insertRow(table.rows.length);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);
        cel1.innerHTML = usersVetor[i].escola

        cel2.innerHTML = usersVetor[i].nome;
        cel3.innerHTML = usersVetor[i].nomeUsuario
        cel4.innerHTML = usersVetor[i].rfid
        cel5.innerHTML = usersVetor[i].senha
        cel6.innerHTML = usersVetor[i].unidadeCurricular
        pesquisado = true
      }

    }

  }
  if (pesquisado == false && isEmpty(document.getElementById("userPesquisa").value)) {
    ListarProfessores()
  }
  AtivarListagem()
}


function Pesquisar() {
  usersVetor = JSON.parse(localStorage.getItem("usuario"))
  var table = document.getElementsByTagName('table')[0];
  //  tableTamanho = document.getElementById('table')
  // add new empty row to the table
  // 0 = in the top 
  // table.rows.length = the end
  // table.rows.length/2+1 = the center

  //table2 = document.getElementById('table')
  var newRow = table.insertRow(table.rows.length);
  pesquisado = false
  // add cells to the row
  if (usersVetor != null) {
    usersVetor.sort((a, b) => {
      let fa = a.nome.toLowerCase(),
        fb = b.nome.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })
  };
  // add cells to the row
  for (i = table.rows.length - 1; i > 1; i--) {
    table.deleteRow(i)
  }
  if (usersVetor != null) {
    for (i = 0; i < usersVetor.length; i++) {
      if (usersVetor[i].nome == document.getElementById("userPesquisa").value || usersVetor[i].nomeUsuario == document.getElementById("userPesquisa").value || usersVetor[i].turmaEscola == document.getElementById("userPesquisa").value || usersVetor[i].escola == document.getElementById("userPesquisa").value) {
        var newRow = table.insertRow(table.rows.length);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);
        cel1.innerHTML = usersVetor[i].nome;
        cel2.innerHTML = usersVetor[i].nomeUsuario;
        cel3.innerHTML = usersVetor[i].senha
        cel4.innerHTML = usersVetor[i].rfid
        cel5.innerHTML = usersVetor[i].escola
        cel6.innerHTML = usersVetor[i].turmaEscola
        pesquisado = true
      }

    }
  }
  if (pesquisado == false && isEmpty(document.getElementById("userPesquisa").value)) {
    Listar()
  }
  AtivarListagem()
}
function PesquisarTurmaLecionada() {
  TurmasLecionadas = JSON.parse(localStorage.getItem("TurmasLecionadas"))
  var table2 = document.getElementsByTagName('table')[1];
  //  tableTamanho = document.getElementById('table')
  // add new empty row to the table
  // 0 = in the top 
  // table.rows.length = the end
  // table.rows.length/2+1 = the center
  pesquisado = false
  //table2 = document.getElementById('table')
  var newRow = table2.insertRow(table2.rows.length);

  // add cells to the row
  if (TurmasLecionadas != null) {
    TurmasLecionadas.sort((a, b) => {
      let fa = a.nome.toLowerCase(),
        fb = b.nome.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })
  };
  // add cells to the row
  for (i = table2.rows.length - 1; i > 1; i--) {
    table2.deleteRow(i)
  }
  vetorNotas = JSON.parse(localStorage.getItem("Notas"))
  if (TurmasLecionadas != null) {
    for (i = 0; i < TurmasLecionadas.length; i++) {
      if (TurmasLecionadas[i].escola == document.getElementById("turmaLecionadaPesquisa").value || usersVetor[i].Professor == document.getElementById("turmaLecionadaPesquisa").value || usersVetor[i].uc == document.getElementById("turmaLecionadaPesquisa").value) {
        var newRow = table2.insertRow(table2.rows.length);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        cel1.innerHTML = TurmasLecionadas[i].escola;
        cel2.innerHTML = TurmasLecionadas[i].Professor
        cel3.innerHTML = TurmasLecionadas[i].uc
        cel4.innerHTML = TurmasLecionadas[i].turmas
        cel5.innerHTML = "<button class='botaoExcluir' onclick='ExcluirTurmaLecionada()'>Excluir</button>";
        pesquisado2 = true
      }

    }

  }
  if (pesquisado2 == false && isEmpty(document.getElementById("turmaLecionadaPesquisa").value)) {
    ListarTurmasLecionadas()
  }
  AtivarListagemTurmasLecionadas()
}
function PesquisarTurma() {
  escolas = JSON.parse(localStorage.getItem("escolas"))
  var table = document.getElementsByTagName('table')[0];
  //  tableTamanho = document.getElementById('table')
  // add new empty row to the table
  // 0 = in the top 
  // table.rows.length = the end
  // table.rows.length/2+1 = the center

  //table2 = document.getElementById('table')
  var newRow = table.insertRow(table.rows.length);

  // add cells to the row
  if (usersVetor != null) {
    usersVetor.sort((a, b) => {
      let fa = a.nome.toLowerCase(),
        fb = b.nome.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })
  };
  // add cells to the row

  for (i = table.rows.length - 1; i > 1; i--) {
    table.deleteRow(i)
  }

  let pesquisado = false
  if (escolas != null) {
    for (i = 0; i < escolas.length; i++) {
      if (escolas[i].colegio == document.getElementById("userPesquisa").value) {
        var newRow = table.insertRow(table.rows.length);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        cel1.innerHTML = escolas[i].colegio;

        if (escolas[i].turmaEscola == null) {
          cel2.innerHTML = ""
        }
        else {
          cel2.innerHTML = escolas[i].turmaEscola;
        }
        pesquisado = true


      }
      if (pesquisado == false && isEmpty(document.getElementById("userPesquisa").value)) {
        ListarTurma()
      }

    }
    //AtivarListagem()
  }
}
function LogarProfessor() {
  valorCaixaUsuario = document.getElementById("userLog")
  valorCaixaSenha = document.getElementById("senhaLog")

  flagLoginEfetuado = false
  let x;
  usersVetor = JSON.parse(localStorage.getItem("usuario"))

  for (i = 0; i < usersVetor.length; i++) {
    if (valorCaixaUsuario.value == usersVetor[i].nomeUsuario && valorCaixaSenha.value == usersVetor[i].senha && usersVetor[i].classe == "Professor") {
      x = { nomeUsuario: usersVetor[i].nomeUsuario, escola: usersVetor[i].escola, turma: usersVetor[i].turma, nome: usersVetor[i].nome }
      flagLoginEfetuado = true
      break
    }
    else {
      flagLoginEfetuado = false
    }
  }
  if (flagLoginEfetuado == true) {
    alert("login efetuado com sucesso!")
    localStorage.setItem("CurrentSession", JSON.stringify(x))
    window.location.href = "ProfessorTELA.html#?"
  }
  else {
    alert("Login Falhou!")
  }
}
function LogarAdmin() {
  valorCaixaUsuario = document.getElementById("userLog")
  valorCaixaSenha = document.getElementById("senhaLog")

  flagLoginEfetuado = false

  usersVetor = JSON.parse(localStorage.getItem("usuario"))

  /*for (i = 0; i < usersVetor.length; i++) {
    if (valorCaixaUsuario.value == usersVetor[i].nomeUsuario && valorCaixaSenha.value == usersVetor[i].senha && usersVetor[i].classe == "Professor") {
      flagLoginEfetuado = true
      break
    }
    else {
      flagLoginEfetuado = false
    }
  }
  */
  if (valorCaixaUsuario.value == "admin" && valorCaixaSenha.value == "admin123") {
    alert("login efetuado com sucesso!")
    window.location.href = `gerenciarColegios.html#?`
  }
  else {
    alert("Login Falhou!")
  }
}
function Atualizar() {
  user = JSON.parse(localStorage.getItem("usuario"));
  for (i = 0; i < user.length; i++) {
    if (user[i].nome == document.getElementById("userPesquisa").value) {
      user[i].senha = document.getElementById("passPesquisa").value
    }
  }
  localStorage.setItem("usuario", JSON.stringify(user))
  document.getElementById("userPesquisa").value = ""
  document.getElementById("passPesquisa").value = ""

  alert("Dados atualizados!")

}
function ExcluirTurma() {
  escolas = JSON.parse(localStorage.getItem("escolas"))
  turmaexcluir = document.getElementById("numeroturma").value
  selectTurmas = document.getElementById("criarturma").value
  let posicaoExcluir
  flag = false;
  for (i = 0; i < escolas.length; i++) {
    if (escolas[i].colegio == selectTurmas) {
      flag = true
      posicaoExcluir = i

    }
  }
  if (flag == true) {
    for (i = 0; i < escolas[posicaoExcluir].turmaEscola.length; i++) {
      if (escolas[posicaoExcluir].turmaEscola[i] == turmaexcluir) {
        escolas[posicaoExcluir].turmaEscola.splice(posicaoExcluir, 1)
        alert("Turma excluida!")
        localStorage.setItem("escolas", JSON.stringify(escolas))
        ListarTurma()
      }
    }
  }
}
/*
escolas[i].turmaEscola.splice(posicaoExcluir, 1)
      alert("Turma excluida!")
      localStorage.setItem("escolas", JSON.stringify(escolas))
}
*/

function Verificar() {
  usuariozada = JSON.parse(localStorage.getItem("usuario"));
  if (usuariozada == null) {
  }
  else {
    flagVerificarUsuarioCadastrado = false;
    for (i = 0; i < usuariozada.length; i++) {

      if (usuariozada[i].nomeUsuario == document.getElementById("user").value) {
        flagVerificarUsuarioCadastrado = true;

      }
    }
    if (flagVerificarUsuarioCadastrado == true) {
      return true
    }
    else {
      return false
    }

  }
}
function VerificarProfessor() {
  usuariozada = JSON.parse(localStorage.getItem("usuario"));

  if (usuariozada == null) {
  }
  else {
    flagVerificarUsuarioCadastrado = false;
    for (i = 0; i < usuariozada.length; i++) {

      if (usuariozada[i].nomeUsuario == document.getElementById("userProfessor").value) {
        flagVerificarUsuarioCadastrado = true;

      }
    }
    if (flagVerificarUsuarioCadastrado == true) {
      return true
    }
    else {
      return false
    }

  }
}
vetorEscola = []

function adicionarEscola() {
  escola = document.getElementById("adicionarcolegio").value
  vetorEscola = JSON.parse(localStorage.getItem("escolas"))
  let x = false
  if (vetorEscola != null) {
    for (i = 0; i < vetorEscola.length; i++) {
      if (vetorEscola[i].colegio == escola)
        x = true
    }
  }
  if (isEmpty(escola)) {
    alert("a caixa nao pode estar vazia!")
  }
  else if (x == true) {
    alert("escola ja cadastrada!")
  }
  else {
    if (vetorEscola == null) {
      vetorEscola = []
      x = new Object
      x.colegio = escola
      x.turmaEscola = []
      vetorEscola.push(x)

      localStorage.setItem("escolas", JSON.stringify(vetorEscola))
      ListarTurma()

    }
    else {
      x = new Object
      x.colegio = escola
      x.turmaEscola = []
      vetorEscola.push(x)
      localStorage.setItem("escolas", JSON.stringify(vetorEscola))
      ListarTurma()

    }

    codeAddresss()
  }
}

let vetorTurmasLecionadas = []
function CadastrarTurmaLecionada() {
  /*function NovaTurmaLecionada(escola,Professor,uc,turmas){
  
    this.escola
    this.Professor
    this.uc
    this.turmas 
  }*/
  /*       if (turma == null) {
  turma = []


  for (i = 0; i < turma.length; i++) {

    if (turma[i].colegio == document.getElementById("criarturma").value) {

      turma[i].turmaEscola.push(document.getElementById("numeroturma").value)
      localStorage.setItem("escolas", JSON.stringify(turma))
      ListarTurma()
      break
    }
  }
}*/
  TurmasLecionadasLocalStorage = JSON.parse(localStorage.getItem("TurmasLecionadas"))
  escolaLecionada = document.getElementById("EscolaLecionada")
  Professor = document.getElementById("Professor")
  turmaLecionada = document.getElementById("TurmaLecionada")
  selectTurmaAluno = document.getElementById("turmaAluno")
  escolas = JSON.parse(localStorage.getItem("escolas"))
  selectEscolaProfessor = document.getElementById("escolaProfessor")
  usuarios = JSON.parse(localStorage.getItem("usuario"))
  uclecionada = document.getElementById("uclecionada")
  verificarTurmaLecionada = false
  vetorTurmasLecionadas = []

  var values = $('#TurmaLecionada').val();

  for (i = 0; i < values.length - 1; i++) {

    vetorTurmasLecionadas.push(values[i])

  }

  if (TurmasLecionadasLocalStorage != null) {
    for (i = 0; i < TurmasLecionadasLocalStorage.length; i++) {
      if (escolaLecionada.value == TurmasLecionadasLocalStorage[i].escola && Professor.value == TurmasLecionadasLocalStorage[i].Professor && uclecionada.value == TurmasLecionadasLocalStorage[i].uc) {
        verificarTurmaLecionada = true
        break
      }
      else {
        verificarTurmaLecionada = false
      }
    }
  }
  var values = $('#TurmaLecionada').val();

  for (i = 0; i < values.length; i++) {

    vetorTurmasLecionadas.push(values[i])

  }
  if (TurmasLecionadasLocalStorage != null) {
    for (i = 0; i < TurmasLecionadasLocalStorage.length; i++) {
      if (TurmasLecionadasLocalStorage[i].escola == escolaLecionada.value && TurmasLecionadasLocalStorage[i].Professor == Professor.value && TurmasLecionadasLocalStorage[i].uc == uclecionada.value) {
        TurmasLecionadasLocalStorage[i].turmas = vetorTurmasLecionadas
      }
    }
  }
  if (isEmpty(escolaLecionada.value) || isEmpty(Professor.value) || isEmpty(uclecionada.value) || isEmpty(turmaLecionada.value)) {
    alert("Nao pode estar vazio!")
  }
  else if (verificarTurmaLecionada == true) {
    alert("Turma ja esta sendo lecionada")
  }
  else {


    if (TurmasLecionadasLocalStorage == null) {

      TurmasLecionadasLocalStorage = []
      x = new NovaTurmaLecionada(escolaLecionada.value, Professor.value, uclecionada.value, vetorTurmasLecionadas)
      TurmasLecionadasLocalStorage.push(x)

      localStorage.setItem("TurmasLecionadas", JSON.stringify(TurmasLecionadasLocalStorage))
      ListarTurmasLecionadas()
    }
    else {
      x = new NovaTurmaLecionada(escolaLecionada.value, Professor.value, uclecionada.value, vetorTurmasLecionadas)
      TurmasLecionadasLocalStorage.push(x)
      localStorage.setItem("TurmasLecionadas", JSON.stringify(TurmasLecionadasLocalStorage))
      ListarTurmasLecionadas()

    }
  }
}
function RodarLista() {
  tabela = document.getElementById("listas")
  novaLinha = tabela.insertRow(-1);

  let newCell = novaLinha.insertCell(0);
  let newText = document.createTextNode('New bottom row');
  newCell.appendChild(newText);
  novaLinha.appendChild(newText);
}
/*function Listar() {

  /*function Produto(codigo, nome, marca, valor, quantidade){

  this.codigo = codigo
  this.nome = nome
  this.marca = marca
  this.valor = valor
  this.quantidade = quantidade

}
function User(nome,nomeUsuario, senhaUsuario, classeUsuario, rfid, escola,turma ) {
this.nome = nome
this.nomeUsuario = nomeUsuario
this.senha = senhaUsuario
this.classe = classeUsuario
this.rfid = rfid
this.escola = escola
this.turmaEscola = turma
}


  lista = []


  lista = JSON.parse(localStorage.getItem("usuario"))


  let divList = document.getElementById("lista")

  let produtoLista, produtoDiv


  while (divList.firstChild) {


    divList.removeChild(divList.firstChild);

  }


  for (i = 0; i < lista.length; i++) {
    if (lista[i].classe != "Professor") {
      nome = document.createTextNode(lista[i].nome)
      nomeUsuario = document.createTextNode(lista[i].nomeUsuario)
      senha = document.createTextNode(lista[i].senha)
      rfid = document.createTextNode(lista[i].rfid)
      escola = document.createTextNode(lista[i].escola)
      turma = document.createTextNode(lista[i].turmaEscola)


      produtoLista = document.createElement('div')

      divList.appendChild(produtoLista)

      produtoLista.classList = ('Alunos')

      produtoLista.id = (`Aluno${i}`)


      for (j = 0; j < 6; j++) {


        produtoDiv = document.createElement('div')

        produtoLista.appendChild(produtoDiv)

        produtoDiv.classList = ('Divs')


        switch (j) {

          case 0:
            /*
            nome = document.createTextNode(lista[i].nome)
  nomeUsuario = document.createTextNode(produtos[i].nomeUsuario)
  senha = document.createTextNode(produtos[i].senha)
  rfid = document.createTextNode(produtos[i].rfid)
  escola = document.createTextNode(produtos[i].escola)
  turma 
            // Adiciona o valor da propriedade código na sub-div
            produtoDiv.appendChild(nome)
            break

          case 1:

            // Adiciona o valor da propriedade nome na sub-div
            produtoDiv.appendChild(nomeUsuario)
            break

          case 2:

            // Adiciona o valor da propriedade marca na sub-div
            produtoDiv.appendChild(senha)
            break

          case 3:

            // Adiciona o valor da propriedade valor na sub-div
            produtoDiv.appendChild(rfid)
            break

          case 4:

            // Adiciona o valor da propriedade quantidade na sub-div
            produtoDiv.appendChild(escola)
            break
          case 5:
            produtoDiv.appendChild(turma)
            break

        }

      }

    }
  }
}
*/
function AtivarListagem() {
  const targetDiv = document.getElementById("lista");
  const btn = document.getElementById("toggle");
  btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
      targetDiv.style.display = "none";
    } else {
      targetDiv.style.display = "block";
    }
  };
}
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
function AtivarListagemTurmasLecionadas() {
  const targetDiv2 = document.getElementById("lista2");
  const btn2 = document.getElementById("toggle2");
  btn2.onclick = function () {
    if (targetDiv2.style.display !== "none") {
      targetDiv2.style.display = "none";
    } else {
      targetDiv2.style.display = "block";
    }
  };
}
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
function Listar() {

  vetorAlunos = JSON.parse(localStorage.getItem("usuario"))
  // get input values
  // var fname = document.getElementById('fname').value;
  // var lname = document.getElementById('lname').value;
  //var age = document.getElementById('age').value;

  // get the html table
  // 0 = the first table
  var table = document.getElementsByTagName('table')[0];
  //  tableTamanho = document.getElementById('table')
  // add new empty row to the table
  // 0 = in the top 
  // table.rows.length = the end
  // table.rows.length/2+1 = the center
  table2 = document.getElementById('table')
  var newRow = table.insertRow(table.rows.length);

  // add cells to the row
  if (vetorAlunos != null) {
    vetorAlunos.sort((a, b) => {
      let fa = a.nome.toLowerCase(),
        fb = b.nome.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })
  };
  for (i = table.rows.length - 1; i > 1; i--) {
    table.deleteRow(i)
  }
  if (vetorAlunos != null) {
    for (i = 0; i < vetorAlunos.length; i++) {
      if (vetorAlunos[i].classe == "Aluno") {
        var newRow = table.insertRow(table.rows.length);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);
        cel1.innerHTML = vetorAlunos[i].nome;
        cel2.innerHTML = vetorAlunos[i].nomeUsuario;
        cel3.innerHTML = vetorAlunos[i].senha
        cel4.innerHTML = vetorAlunos[i].rfid
        cel5.innerHTML = vetorAlunos[i].escola
        cel6.innerHTML = vetorAlunos[i].turmaEscola

      }

    }
  }
  AtivarListagem()
}


function EditarTurmaLecionada() {
  TurmasLecionadasLocalStorage = JSON.parse(localStorage.getItem("TurmasLecionadas"))
  escolaLecionada = document.getElementById("EscolaLecionada")
  Professor = document.getElementById("Professor")
  turmaLecionada = document.getElementById("TurmaLecionada")
  selectTurmaAluno = document.getElementById("turmaAluno")
  escolas = JSON.parse(localStorage.getItem("escolas"))
  selectEscolaProfessor = document.getElementById("escolaProfessor")
  usuarios = JSON.parse(localStorage.getItem("usuario"))
  uclecionada = document.getElementById("uclecionada")
  vetorTurmasLecionadas = []
  var values = $('#TurmaLecionada').val();
  if (TurmasLecionadasLocalStorage != null) {
    for (i = 0; i < values.length; i++) {

      vetorTurmasLecionadas.push(values[i])

    }
    for (i = 0; i < TurmasLecionadasLocalStorage.length; i++) {
      if (TurmasLecionadasLocalStorage[i].escola == escolaLecionada.value && TurmasLecionadasLocalStorage[i].Professor == Professor.value && TurmasLecionadasLocalStorage[i].uc == uclecionada.value) {
        TurmasLecionadasLocalStorage[i].turmas = vetorTurmasLecionadas
      }
    }

    localStorage.setItem("TurmasLecionadas", JSON.stringify(TurmasLecionadasLocalStorage))
    ListarTurmasLecionadas()
  }
}

function CarregarEscolasLecionadas() {
  escolaLecionada = document.getElementById("EscolaLecionada")
  Professor = document.getElementById("Professor")
  turmaLecionada = document.getElementById("TurmaLecionada")
  selectTurmaAluno = document.getElementById("turmaAluno")
  escolas = JSON.parse(localStorage.getItem("escolas"))
  selectEscolaProfessor = document.getElementById("escolaProfessor")
  usuarios = JSON.parse(localStorage.getItem("usuario"))
  uclecionada = document.getElementById("uclecionada")

  if (escolas != null) {
    for (i = 0; i < escolas.length; i++) {
      $('#EscolaLecionada').children().remove().end()
    }
    for (i = 0; i < escolas.length; i++) {

      option = document.createElement("option")
      option.text = escolas[i].colegio
      option.value = escolas[i].colegio
      escolaLecionada.add(option)

    }

  }
  verificar = false
  if (Professor != null && usuarios != null) {

    for (i = 0; i < Professor.length; i++) {
      $('#Professor').children().remove().end()
    }
    for (i = 0; i < usuarios.length; i++) {
      if (usuarios[i].classe == "Professor") {
        posicaoLegal = i
        for (j = 0; j < usuarios[i].escola.length; j++) {
          if (usuarios[i].escola[j] == escolaLecionada.value) {
            option = document.createElement("option")
            option.text = usuarios[i].nome
            option.value = usuarios[i].nome
            Professor.add(option)
          }
        }
      }

    }
  }
  verificar2 = false
  verificar3 = false
  let salvarposicao2
  let salvarPosicao
  if (uclecionada != null && usuarios != null) {
    for (i = 0; i < uclecionada.length; i++) {
      $('#uclecionada').children().remove().end()
    }
    for (i = 0; i < usuarios.length; i++) {
      if (usuarios[i].nome == Professor.value) {
        salvarPosicao = i
        verificar2 = true
        break
      }
    }
    if (verificar2 == true) {
      for (j = 0; j < usuarios[salvarPosicao].unidadeCurricular.length; j++) {
        option = document.createElement("option")
        option.text = usuarios[salvarPosicao].unidadeCurricular[j]
        option.value = usuarios[salvarPosicao].unidadeCurricular[j]
        uclecionada.add(option)

      }
    }
  }
  if (turmaLecionada != null) {

    for (i = 0; i < turmaLecionada.length; i++) {
      $('#TurmaLecionada').children().remove().end()

    }
  }
  if (escolas != null) {
    for (i = 0; i < escolas.length; i++) {
      if (escolas[i].colegio == escolaLecionada.value) {
        salvarposicao2 = i
        verificar3 = true
      }
    }
  }
  if (verificar3 == true) {
    for (i = 0; i < escolas[salvarposicao2].turmaEscola.length; i++) {
      option = document.createElement("option")
      option.text = escolas[salvarposicao2].turmaEscola[i]
      option.value = escolas[salvarposicao2].turmaEscola[i]
      turmaLecionada.add(option)
    }
  }

}



/*function uga() {
  verificar2 = false
for (i = 0; i < selectTurmaEditar.length; i++) {
  option2 = document.createElement("option")
  $('#turmaAlunoEditar').children().remove().end()

}

escolas = JSON.parse(localStorage.getItem("escolas"))
for (i = 0; i < escolas.length; i++) {
  option2 = document.createElement("option")
  if (selectEditarEscola.value == escolas[i].colegio) {
      posicao2 = i
      verificar2 = true;
  }
}
if (verificar2 == true) {
  for (i = 0; i < escolas[posicao2].turmaEscola.length; i++) {
      option2 = document.createElement("option")
      option2.text = escolas[posicao2].turmaEscola[i]
      option2.value = escolas[posicao2].turmaEscola[i]
      
      selectTurmaEditar.add(option2)
  }

}
*/

function EditarEscola() {
  colegioAntigo = document.getElementById("ColegioAntigo")
  colegioNovo = document.getElementById("ColegioNovo")
  TurmasLecionadas = JSON.parse(localStorage.getItem("TurmasLecionadas"))
  usuario = JSON.parse(localStorage.getItem("usuario"))
  let colegioTemp
  verificar = false;
  for (i = 0; i < escolas.length; i++) {
    if (escolas[i].colegio == colegioAntigo.value) {
      colegioTemp = colegioNovo.value
    }

  }
  for (i = 0; i < escolas.length; i++) {
    if (colegioTemp == escolas[i].colegio) {
      alert("Escola já cadastrada!")
      verificar = true
      break
    }
  }
  if (verificar != true) {
    for (i = 0; i < escolas.length; i++) {
      if (escolas[i].colegio == colegioAntigo.value) {
        escolas[i].colegio = colegioNovo.value
        localStorage.setItem("escolas", JSON.stringify(escolas))
        break
      }
    }
  }
  if (verificar != true && usuario != null) {
    for (i = 0; i < usuario.length; i++) {
      if (usuario[i].escola == colegioAntigo.value && usuario[i].classe == "Professor") {
        for (j = 0; j < usuario[i].escola.length; j++) {
          if (usuario[i].escola[j] == colegioAntigo.value) {
            usuario[i].escola[j] = colegioNovo.value
          }
        }
      }
      if (usuario[i].classe == "Aluno" && usuario[i].escola == colegioAntigo.value) {
        usuario[i].escola = colegioNovo.value
      }
    }



    localStorage.setItem("usuario", JSON.stringify(usuario))
  }

  if (verificar != true && TurmasLecionadas != null) {
    for (i = 0; i < TurmasLecionadas.length; i++) {
      if (TurmasLecionadas[i].escola == colegioAntigo.value) {
        TurmasLecionadas[i].escola = colegioNovo.value

      }
    }

    localStorage.setItem("TurmasLecionadas", JSON.stringify(TurmasLecionadas))
  }

}


function EditarTurma() {
  turmaAntiga = document.getElementById("TurmaAntiga")
  TurmaNova = document.getElementById("TurmaNova")
  let turmaTemp
  alunos = document.getElementById("")
  verificar = false
  EscolaEditarTurma = document.getElementById("EscolaEditarTurma")
  verificar = false;
  alunos = JSON.parse(localStorage.getItem("usuario"))
  TurmasLecionadas = JSON.parse(localStorage.getItem("TurmasLecionadas"))
  if (escolas.length > 0) {
    for (i = 0; i < escolas.length; i++) {
      if (escolas[i].colegio == EscolaEditarTurma.value) {
        posicao = i
        verificar = true
      }
    }
    for (i = 0; i < escolas[posicao].turmaEscola.length; i++) {
      if (TurmaNova.value == escolas[posicao].turmaEscola) {
        verificar = false
      }
    }
    if (verificar == true) {
      for (i = 0; i < escolas[posicao].turmaEscola.length; i++) {
        if (escolas[posicao].turmaEscola[i] == turmaAntiga.value) {
          escolas[posicao].turmaEscola[i] = TurmaNova.value
          localStorage.setItem("escolas", JSON.stringify(escolas))
          break
        }
      }
    }
    if (verificar == true) {
      for (i = 0; i < alunos.length; i++) {
        if (alunos[i].escola == EscolaEditarTurma.value && alunos[i].turmaEscola == turmaAntiga.value) {
          alunos[i].turmaEscola = TurmaNova.value
        }

      }

    }
    localStorage.setItem("usuario", JSON.stringify(alunos))

    for (i = 0; i < TurmasLecionadas.length; i++) {
      for (j = 0; j < TurmasLecionadas[i].turmas.length; j++) {
        if (TurmasLecionadas[i].escola == EscolaEditarTurma.value && TurmasLecionadas[i].turmas[j] == turmaAntiga.value) {
          TurmasLecionadas[i].turmas[j] = TurmaNova.value;
        }
      }
    }

    localStorage.setItem("TurmasLecionadas", JSON.stringify(TurmasLecionadas))
  }
}
  /*function Listar() {

lista = ""
cadastrados = JSON.parse(localStorage.getItem("usuario"))
for (i = 0; i < cadastrados.length; i++) {
if (cadastrados[i]) {
lista += cadastrados[i].classe + " | " + cadastrados[i].escola + " | " + cadastrados[i].nome + " | " + cadastrados[i].senha + "<br>"
}
}

document.getElementById("lista").innerHTML = lista

}

function AbrirJanelaLogin() {
window.location.href = "LoginTELA.html"
}
function AbrirJanelaCadastro() {
window.location.href = "CadastroTELA.html"
}
function AbrirJanelaAdmin() {
window.location.href = "AdminTELA.html"
}
function AbrirJanelaAluno() {
window.location.href = "AlunoTELA.html"
}
function AbrirJanelaProfessor() {
window.location.href = "ProfessorTELA.html"
}
function AbrirJanelaSobreNos() {
window.location.href = "SobreNosTELA.html"
}
function logoIndex() {
window.location.href = "Index.html"
}*/
