const themeSwitch = document.getElementById("themeSwitch");
const darkModeCheckbox = document.getElementById("darkmode");
const themeStylesheet = document.getElementById("theme-stylesheet");
darkModeCheckbox.checked = true;

darkModeCheckbox.addEventListener("change", function () {
  if (darkModeCheckbox.checked) {
    // Se il checkbox è selezionato, carica il file CSS per il tema scuro.
    themeStylesheet.href = "assets/css/minimalist-dark.css";
  } else {
    // Altrimenti, carica il file CSS per il tema chiaro.
    themeStylesheet.href = "assets/css/minimalist.css";
  }
});

// Puoi anche inizializzare il tema in base al valore predefinito del checkbox all'avvio della pagina.
if (darkModeCheckbox.checked) {
  themeStylesheet.href = "assets/css/minimalist-dark.css";
}
