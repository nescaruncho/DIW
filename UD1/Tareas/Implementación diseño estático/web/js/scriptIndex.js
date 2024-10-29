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
  const processArticle = document.getElementById("processArticle");
  const processTitleSection = document.getElementById("processTitleSection");

  // Ajuste de cuándo aparecerán (300px antes de llegar a la vista)
  const offset = 80;

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

  if (processTitleSection) {
    const titlePosition =
      processTitleSection.getBoundingClientRect().top + window.scrollY;
    console.log("ScrollY:", window.scrollY, "Title Position:", titlePosition); // Verificar valores
    if (window.scrollY > titlePosition - window.innerHeight + offset) {
      processTitleSection.style.opacity = "1";
      processTitleSection.style.transform = "translateY(0)";
      console.log("#processTitleSection visible"); // Log para confirmar cambio de estilo
    }
  }
});

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

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
        slide.style.opacity = "0";
        setTimeout(() => {
          slide.style.transition = "opacity 0.5s";
          slide.style.opacity = "1";
        }, 10); // Slight delay to ensure transition is applied
      } else {
        slide.classList.remove("active");
        slide.style.opacity = "0";
      }
    });
  }

  prevButton.addEventListener("click", function () {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
  });

  nextButton.addEventListener("click", function () {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
});