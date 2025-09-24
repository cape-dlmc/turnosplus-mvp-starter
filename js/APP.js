const form = document.getElementById("formCita");
const lista = document.getElementById("listaCitas");


// Creamos el arreglo donde se guardaran los datos de las citas
const citas =[];

// preparamos el listener del html
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    // contruyamos el arreglo de citas

    const cita ={
        id: crypto.randomUUID(),
        paciente: document.getElementById("paciente").value.trim(),
        profecional: document.getElementById("profecional").value.trim(),
        fecha: document.getElementById("fecha").value.trim(),
        hora: document.getElementById("hora").value.trim(),
        estado: "Programada"
    };

    citas.push(cita);
    renderCitas();
    form.reset();
} );

function renderCitas(){
    lista.innerHTML="";
    for (const c of citas){
        const li = document.createElement("li");
        li.textContent = `${c.fecha} ${c.hora} - ${c.paciente} con ${c.profesional} [${c.estado}]`;

        lista.appendChild(li);
    }
}