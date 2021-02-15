(function () {
  // Objeto con métodos de formulario

  var metFormulario = {
    inicio: function () {
      if (
        document.querySelectorAll(".input-group") == "text" ||
        document.querySelector(".input-group") == "email"
      ) {
        document
          .querySelector(".input-group")
          .addEventListener("focus", metFormulario.focusInput);
        document
          .querySelector(".input-group")
          .addEventListener("blur", metFormulario.blurInput);
      }
    },

    focusInput: function () {
      this.parentElement.children[1].className = "label active";
    },

    blurInput: function () {
      if (this.value == "") {
        this.parentElement.children[1].className = "label";
      }
    },
  };

  metFormulario.inicio();
})();
