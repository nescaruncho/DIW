window.addEventListener("scroll", function () {
  var header = document.getElementById("divHeader");
  if (window.scrollY > 50) {
    // Cambia el valor si prefieres otro umbral
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  // Elementos a mostrar
  const processArticle = document.getElementById("processArticle");
  const productsTitle = document.getElementById("productsTitle");
  const productSection = document.getElementById("productSection");

  // Ajuste de cuándo aparecerán los elementos
  const offset = 80;
  const offsetProduct = 300;
  const offsetProcess = 150;

  // Muestra processArticle cuando se desplaza a su posición
  if (processArticle) {
    const articlePosition =
      processArticle.getBoundingClientRect().top + window.scrollY;
    console.log(
      "ScrollY:",
      window.scrollY,
      "Article Position:",
      articlePosition
    ); // Verificar valores
    if (window.scrollY > articlePosition - window.innerHeight + offset) {
      processArticle.style.opacity = "1";
      processArticle.style.transform = "translateY(0)";
      console.log("#processArticle visible"); // Log para confirmar cambio de estilo
    }
  }

  // Muestra productsTitle y productSection cuando se desplaza a su posición
  if (processArticle && productsTitle) {
    // Calcula la posición inferior de processArticle
    const processArticleBottom =
      processArticle.getBoundingClientRect().bottom + window.scrollY;

    // Aparece productsTitle cuando se supera el borde inferior de processArticle
    if (window.scrollY > processArticleBottom - offsetProduct) {
      productsTitle.style.opacity = "1";
      productsTitle.style.transform = "translateY(0)";
    }

    if (productsTitle && productSection) {
      // Calcula la posición inferior de productsTitle
      const productsTitleBottom =
        productsTitle.getBoundingClientRect().bottom + window.scrollY;

      // Aparece productSection cuando se supera el borde inferior de productsTitle
      if (window.scrollY > productsTitleBottom - offsetProduct) {
        productSection.style.opacity = "1";
        productSection.style.transform = "translateY(0)";
      }
    }
  }
});

// Función para actualizar el texto de proceso según el tamaño de la pantalla
function updateProcessText() {
  const processText = document.getElementById("processText");

  // Rango de pantalla deseado
  if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    processText.innerHTML = `Descubre más sobre el proceso de creación de nuestras cervezas artesanales <a href="./sections/proceso.html">aquí</a>`;
  } else {
    // Texto completo para pantallas fuera del rango
    processText.innerHTML = `El proceso de elaboración de cerveza artesanal comienza con la mezcla de malta de cebada con agua caliente para extraer sus azúcares, lo que llamamos maceración. Luego, este líquido dulce (mosto) se hierve con lúpulo, que le da ese toque amargo y aroma tan especial. Una vez enfriado, se añade la levadura, que fermenta el azúcar en alcohol y CO2. Tras unos días de maduración, ¡ya tienes cerveza lista para disfrutar!<br>
      Si quieres saber más, puedes encontrarlo <a href="./sections/proceso.html">aquí</a>`;
  }
}

// Llama a la función en la carga y cada vez que la ventana cambia de tamaño
window.addEventListener("load", updateProcessText);
window.addEventListener("resize", updateProcessText);