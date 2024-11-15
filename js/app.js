function showMenu() {
  document.getElementById("menu-container").classList.remove("hidden");
  document.getElementById("entrar-button").remove(); 
}

function hideMenu() {
  document.getElementById("menu-container").classList.add("hidden");
}

function goToCadastro(event) {
  event.preventDefault(); 
  document.querySelector(".first-content").classList.add("hidden");
  document.querySelector(".second-content").classList.remove("hidden");
  document.querySelector(".second-content").classList.add("active");
  document.getElementById("cadastro-form").classList.add("hidden");
  document.getElementById("cadastro-form").classList.remove("active");
  hideMenu(); 
}

function goToConsulta(event) {
  event.preventDefault(); 
  document.querySelector(".first-content").classList.add("hidden");
  document.querySelector(".third-content").classList.remove("hidden");
  document.querySelector(".third-content").classList.add("active");
  document.getElementById("cadastro-form").classList.add("hidden");
  document.getElementById("cadastro-form").classList.remove("active");
  hideMenu(); 
  document.querySelector(".container").style.height = "100%";
}

function openCadastroForm() {
  document.getElementById("cadastro-form").classList.remove("hidden");
  document.getElementById("cadastro-form").classList.add("active");
  document.querySelector(".first-content").classList.add("hidden");
  hideMenu();
  document.querySelector(".container").style.height = "100%";
}

function salvarPaciente() {
  // Coleta os dados do formulário
  let codigo = document.getElementById("codigo").value;
  let nome = document.getElementById("nome").value;
  let dataNascimento = document.getElementById("data-nascimento").value;
  let sexo = document.getElementById("sexo").value;
  let naturalidade = document.getElementById("naturalidade").value;
  let profissao = document.getElementById("profissao").value;
  let tipoSanguineo = document.getElementById("tipo-sanguineo").value;
  let estadoCivil = document.getElementById("estado-civil").value;
  let raca = document.getElementById("raca").value;

  // Cria a mensagem de alerta com os dados
  let mensagem = "Paciente salvo com sucesso! \n";
  mensagem += "Código: " + codigo + "\n";
  mensagem += "Nome: " + nome + "\n";
  mensagem += "Data de Nascimento: " + dataNascimento + "\n";
  mensagem += "Sexo: " + sexo + "\n";
  mensagem += "Naturalidade: " + naturalidade + "\n";
  mensagem += "Profissão: " + profissao + "\n";
  mensagem += "Tipo Sanguíneo: " + tipoSanguineo + "\n";
  mensagem += "Estado Civil: " + estadoCivil + "\n";
  mensagem += "Raça: " + raca;

  // Exibe o alerta
  alert(mensagem);

  // Oculta o formulário
  document.getElementById("cadastro-form").classList.add("hidden");
  document.getElementById("cadastro-form").classList.remove("active");
}

function pesquisarPacientes() {
  let pesquisa = document.getElementById("pesquisa").value;
  alert("Pesquisando pacientes por: " + pesquisa);
}