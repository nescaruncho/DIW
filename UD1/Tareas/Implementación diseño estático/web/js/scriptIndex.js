window.addEventListener("scroll", function() {
    var header = document.getElementById("divHeader");
    if (window.scrollY > 190) { // Cambia el valor si prefieres otro umbral
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function updateProcessText() {
    const processText = document.getElementById('processText');
    
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
  window.addEventListener('load', updateProcessText);
  window.addEventListener('resize', updateProcessText);
