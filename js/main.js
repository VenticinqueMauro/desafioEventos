// Variables 

const btn = document.getElementById("btn");
const div3 = document.getElementById("div3");
const btnReset = document.getElementById("btnReset");
const form2 = document.getElementById("form2");
const input = document.getElementsByClassName("input");
const resp = document.getElementsByClassName("resp");


// Se traslada el texto introducido en los Input(preguntas) hacia los P (respuestas)

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("change" , (e) => {
    resp[i].textContent = e.target.value;
    });
}

// Al realizar click en el boton `Enviar Respuestas` se genera un h3 con un msj de agradecimiento

btn.addEventListener("click", () => {
    div3.innerHTML = 
    `
    <h3 style="font-size:60px; margin-top: 20px; padding:20px;" class="animate__animated animate__zoomIn"> Gracias por tus respuestas! </h3>
    `
})

// Al realizar click en el boton `reset` se resetean los valores del formulario preguntas y del msj de agradecimiento en caso que estuviese activo. 


btnReset.addEventListener("click", () => {
    form2.textContent = "";
    div3.textContent = "";
    window.location.reload() // Si se quita esta funcion, al volver a rellenar los campos ya no se ven reflejados en `respuestas` ya que el codigo solo se ejecuta una sola vez. Por eso considere necesario recargar la web hasta conocer otra posible solucion. 
})

// contador de caracteres 





