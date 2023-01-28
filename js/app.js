// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// JS FOR NAVBAR
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > 0) {
    navbar.classList.add("fixed-top");
    navbar.classList.add("bg-white");
    navbar.classList.add("box-shadow");
    navbar.classList.add("scroll");
    navbar.classList.add("navbar-color");
  } else {
    navbar.classList.remove("fixed-top");
    navbar.classList.remove("bg-white");
    navbar.classList.remove("box-shadow");
    navbar.classList.remove("navbar-color");
  }
});
