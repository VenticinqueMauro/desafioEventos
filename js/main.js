// Variables 
const input1 = document.getElementById("pregunta1");
const input2 = document.getElementById("pregunta2");
const input3 = document.getElementById("pregunta3");
const resp1 = document.getElementById("respuesta1");
const resp2 = document.getElementById("respuesta2");
const resp3 = document.getElementById("respuesta3");
const btn = document.getElementById("btn");
const div3 = document.getElementById("div3");
const btnReset = document.getElementById("btnReset");
const form2 = document.getElementById("form2");

// Se traslada el texto introducido en los Input(preguntas) hacia los P (respuestas)

input1.addEventListener("change", (e) => {
    resp1.textContent = e.target.value;
})

input2.addEventListener("change", (e) => {
    resp2.textContent = e.target.value;
})

input3.addEventListener("change", (e) => {
    resp3.textContent = e.target.value;
})

// Al realizar click en el boton `Enviar Respuestas` se genera un h3 con un msj de agradecimiento

btn.addEventListener("click", () => {
    div3.innerHTML = 
    `
    <h3 style="font-size:60px; margin-top: 20px; padding:20px;"> Gracias por tus respuestas! </h3>
    `
})

// Al realizar click en el boton `reset` se resetean los valores del formulario preguntas y del msj de agradecimiento en caso que estuviese activo. 


btnReset.addEventListener("click", () => {
    form2.textContent = "";
    div3.textContent = "";
    window.location.reload() // Si se quita esta funcion, al volver a rellenar los campos ya no se ven reflejados en `respuestas` ya que el codigo solo se ejecuta una sola vez. Por eso considere necesario recargar la web hasta conocer otra posible solucion. 
})





