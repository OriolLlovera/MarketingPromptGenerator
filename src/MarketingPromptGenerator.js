import React, { useState, useEffect } from "react";

const GeneradorDePromptsDeMarketing = () => {
  const [idioma, setIdioma] = useState("es");

  // UseEffect para establecer valores predeterminados según el idioma seleccionado
  useEffect(() => {
    if (idioma === "en") {
      setEntradas({
        nombre: "John Doe",
        nombreProducto: "Organic Coffee",
        nombreEmpresa: "Global Coffee",
        precio: "25",
        propuestaValor: "Premium quality coffee",
        mercadoObjetivo: "Coffee lovers",
        contexto: "",
      });
    } else {
      setEntradas({
        nombre: "Juan Pérez",
        nombreProducto: "Café Orgánico",
        nombreEmpresa: "Café del Mundo",
        precio: "20",
        propuestaValor: "Café de calidad premium",
        mercadoObjetivo: "Amantes del café",
        contexto: "",
      });
    }
  }, [idioma]);

  const [entradas, setEntradas] = useState({
    nombre: "Juan Pérez",
    nombreProducto: "Café Orgánico",
    nombreEmpresa: "Café del Mundo",
    precio: "20",
    propuestaValor: "Café de calidad premium",
    mercadoObjetivo: "Amantes del café",
    contexto: "",
  });

  const [tipoPrompt, setTipoPrompt] = useState("");
  const [prompts, setPrompts] = useState([]);

  const manejarCambio = (e) => {
    setEntradas({ ...entradas, [e.target.name]: e.target.value });
  };

  const manejarLimpiarCampos = () => {
    setEntradas({
      nombre: "",
      nombreProducto: "",
      nombreEmpresa: "",
      precio: "",
      propuestaValor: "",
      mercadoObjetivo: "",
      contexto: "",
    });
    setPrompts([]);
    setTipoPrompt("");
  };

  const generarPrompts = () => {
    const { nombre, nombreProducto, nombreEmpresa, precio, propuestaValor, mercadoObjetivo, contexto } = entradas;
    const contextoTexto = contexto ? ` Contexto: ${contexto}.` : "";

    if (!tipoPrompt) {
      alert(idioma === "es" ? "Selecciona un tipo de prompt." : "Select a prompt type.");
      return;
    }

    let nuevoPrompt = "";

    switch (tipoPrompt) {
      case "ventas":
        nuevoPrompt = idioma === "es"
          ? `Escribe un discurso de ventas convincente para el producto de ${nombre}, ${nombreProducto}, de ${nombreEmpresa}. Destaca el precio de $${precio}, la propuesta de valor '${propuestaValor}' y apela al ${mercadoObjetivo}.${contextoTexto}`
          : `Write a compelling sales pitch for ${nombre}'s product, ${nombreProducto}, by ${nombreEmpresa}. Highlight the price of $${precio}, the value proposition '${propuestaValor}', and appeal to the ${mercadoObjetivo}.${contextoTexto}`;
        break;

      case "anuncio":
        nuevoPrompt = idioma === "es"
          ? `Redacta un anuncio para redes sociales de ${nombreProducto} que enfatice su propuesta de valor '${propuestaValor}' y que esté dirigido al ${mercadoObjetivo}.${contextoTexto}`
          : `Draft a social media ad for ${nombreProducto} that emphasizes its value proposition '${propuestaValor}' and targets ${mercadoObjetivo}.${contextoTexto}`;
        break;

      case "eslogan":
        nuevoPrompt = idioma === "es"
          ? `Crea un eslogan para ${nombreProducto} de ${nombreEmpresa} que refleje su propuesta de valor y resuene con el ${mercadoObjetivo}.${contextoTexto}`
          : `Create a tagline for ${nombreProducto} by ${nombreEmpresa} that reflects its value proposition and resonates with ${mercadoObjetivo}.${contextoTexto}`;
        break;

      case "correo":
        nuevoPrompt = idioma === "es"
          ? `Escribe un correo electrónico profesional para promocionar ${nombreProducto} de ${nombreEmpresa} a ${mercadoObjetivo}. Asegúrate de incluir la propuesta de valor '${propuestaValor}' y detallar el precio de $${precio}.${contextoTexto}`
          : `Write a professional email promoting ${nombreProducto} by ${nombreEmpresa} to ${mercadoObjetivo}. Be sure to include the value proposition '${propuestaValor}' and detail the price of $${precio}.${contextoTexto}`;
        break;

      case "blog":
        nuevoPrompt = idioma === "es"
          ? `Redacta una entrada de blog sobre ${nombreProducto}, destacando sus beneficios, la propuesta de valor '${propuestaValor}', y cómo puede ayudar a los ${mercadoObjetivo}. Menciona también el precio de $${precio}.${contextoTexto}`
          : `Write a blog post about ${nombreProducto}, highlighting its benefits, the value proposition '${propuestaValor}', and how it can help ${mercadoObjetivo}. Also mention the price of $${precio}.${contextoTexto}`;
        break;

      case "testimonios":
        nuevoPrompt = idioma === "es"
          ? `Escribe una serie de testimonios ficticios de clientes satisfechos con ${nombreProducto} de ${nombreEmpresa}, destacando la propuesta de valor '${propuestaValor}' y cómo el producto satisface las necesidades de ${mercadoObjetivo}.${contextoTexto}`
          : `Write a series of fictional testimonials from satisfied customers about ${nombreProducto} by ${nombreEmpresa}, highlighting the value proposition '${propuestaValor}' and how the product meets the needs of ${mercadoObjetivo}.${contextoTexto}`;
        break;

      default:
        alert(idioma === "es" ? "Selecciona un tipo de prompt." : "Select a prompt type.");
        return;
    }

    setPrompts([nuevoPrompt]); // Generar solo el prompt seleccionado
  };

  const copiarAlPortapapeles = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => alert("Prompt copiado al portapapeles"))
      .catch((error) => alert("Hubo un error al copiar el prompt: ", error));
  };

  const cambiarIdioma = () => {
    setIdioma(idioma === "es" ? "en" : "es");
  };

  const textos = {
    es: {
      titulo: "Generador de Prompts de Marketing",
      nombre: "Tu Nombre",
      nombreProducto: "Nombre del Producto",
      nombreEmpresa: "Nombre de la Empresa",
      precio: "Precio",
      propuestaValor: "Propuesta de Valor",
      mercadoObjetivo: "Mercado Objetivo",
      contexto: "Describe la situación o contexto (opcional)",
      generar: "Generar Prompts",
      limpiar: "Limpiar Campos",
      promptsGenerados: "Prompts Generados",
      copiar: "Copiar",
      descargar: "Descargar Prompts",
      alertaCampos: "Todos los campos obligatorios deben ser llenados.",
      alertaPrecio: "El precio debe ser un número positivo.",
      alertaPropuestaValor: "La propuesta de valor debe tener al menos 10 caracteres.",
      modoOscuro: "Modo Oscuro",
      modoClaro: "Modo Claro",
      seleccionarPrompt: "Selecciona el tipo de Prompt",
    },
    en: {
      titulo: "Marketing Prompt Generator",
      nombre: "Your Name",
      nombreProducto: "Product Name",
      nombreEmpresa: "Company Name",
      precio: "Price",
      propuestaValor: "Value Proposition",
      mercadoObjetivo: "Target Market",
      contexto: "Describe the situation or context (optional)",
      generar: "Generate Prompts",
      limpiar: "Clear Fields",
      promptsGenerados: "Generated Prompts",
      copiar: "Copy",
      descargar: "Download Prompts",
      alertaCampos: "All required fields must be filled.",
      alertaPrecio: "Price must be a positive number.",
      alertaPropuestaValor: "The value proposition must have at least 10 characters.",
      modoOscuro: "Dark Mode",
      modoClaro: "Light Mode",
      seleccionarPrompt: "Select prompt type",
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{textos[idioma].titulo}</h1>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={cambiarIdioma} style={{ padding: "10px 20px", marginBottom: "20px" }}>
          {idioma === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
        </button>
      </div>

      <div>
        <label>{textos[idioma].nombre}</label>
        <input
          type="text"
          name="nombre"
          value={entradas.nombre}
          onChange={manejarCambio}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>{textos[idioma].nombreProducto}</label>
        <input
          type="text"
          name="nombreProducto"
          value={entradas.nombreProducto}
          onChange={manejarCambio}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>{textos[idioma].nombreEmpresa}</label>
        <input
          type="text"
          name="nombreEmpresa"
          value={entradas.nombreEmpresa}
          onChange={manejarCambio}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>{textos[idioma].precio}</label>
        <input
          type="number"
          name="precio"
          value={entradas.precio}
          onChange={manejarCambio}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>{textos[idioma].propuestaValor}</label>
        <input
          type="text"
          name="propuestaValor"
          value={entradas.propuestaValor}
          onChange={manejarCambio}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>{textos[idioma].mercadoObjetivo}</label>
        <input
          type="text"
          name="mercadoObjetivo"
          value={entradas.mercadoObjetivo}
          onChange={manejarCambio}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>{textos[idioma].contexto}</label>
        <input
          type="text"
          name="contexto"
          value={entradas.contexto}
          onChange={manejarCambio}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
      </div>

      <div>
        <label>{textos[idioma].seleccionarPrompt}</label>
        <select
          onChange={(e) => setTipoPrompt(e.target.value)}
          value={tipoPrompt}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        >
          <option value="">{textos[idioma].seleccionarPrompt}</option>
          <option value="ventas">{idioma === "es" ? "Discurso de Ventas" : "Sales Pitch"}</option>
          <option value="anuncio">{idioma === "es" ? "Anuncio" : "Ad"}</option>
          <option value="eslogan">{idioma === "es" ? "Eslogan" : "Tagline"}</option>
          <option value="correo">{idioma === "es" ? "Correo de Seguimiento" : "Follow-up Email"}</option>
          <option value="blog">{idioma === "es" ? "Entrada de Blog" : "Blog Post"}</option>
          <option value="testimonios">{idioma === "es" ? "Testimonios" : "Testimonials"}</option>
        </select>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={generarPrompts} style={{ padding: "10px 20px" }}>
          {textos[idioma].generar}
        </button>
        <button onClick={manejarLimpiarCampos} style={{ padding: "10px 20px" }}>
          {textos[idioma].limpiar}
        </button>
      </div>

      {prompts.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>{textos[idioma].promptsGenerados}</h3>
          {prompts.map((prompt, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p>{prompt}</p>
              <button onClick={() => copiarAlPortapapeles(prompt)} style={{ padding: "5px 10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>
                {textos[idioma].copiar}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GeneradorDePromptsDeMarketing;
