(function() {
  var ex1_button = document.getElementById('ex1_button');

  var ex1_content = document.getElementById('ex1_content');




  //Ex1

  ex1_button.onclick = function() {

    var tabela = []

    for (var i = 0; i <= 9; i++) {

      tabela.push(i);

    }

    ex1_content.innerHTML = tabela.toString();

  }

  //Ex2

  var ex2_text = document.getElementById('ex2_text');

  ex2_text.oninput = function() {
    const text = this.value;
    const content = document.getElementById('ex2_content');

    if (text.length !== 9) {
      content.textContent = "Długość numeru musi być równa 9";
      return;
    }
    if (/[a-zA-Z]/.test(text)) {
      content.textContent = "Numer nie może zawierać liter";
      return;
    }
    if (/[^0-9]/.test(text)) {
      content.textContent = "Numer nie może zawierać znaków specjalnych";
      return;
    }
    content.textContent = "Numer telefonu jest poprawny";
  }

  //Ex3

  var ex3_element = document.getElementById('ex3_element');

  ex3_element.ondragstart = function(event) {
    event.dataTransfer.setData("text", event.target.id);
  };


  function allowDrop(event) {
    event.preventDefault();
  }


  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }



  document.getElementById("ex3_two").ondragover = allowDrop;
  document.getElementById("ex3_two").ondrop = drop;

})();