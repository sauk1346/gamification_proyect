import React, { useEffect } from "react";

const GeoGebraComponent = () => {
  useEffect(() => {
    // Asegurarse de que la biblioteca de GeoGebra esté cargada antes de ejecutarla
    const script = document.createElement("script");
    script.src = "https://www.geogebra.org/apps/deployggb.js";
    script.async = true;
    script.onload = () => {
      // Configuración del applet de GeoGebra
      const app = new window.GGBApplet(
        {
          filename: "./geotest.gbb", // Ruta al archivo .gbb
          showToolbar: true, // Mostrar barra de herramientas
          showMenuBar: true, // Mostrar barra de menús
          showAlgebraInput: true, // Mostrar entrada algebraica
          width: 800,
          height: 600,
        },
        true
      );

      // Inyectar GeoGebra en el contenedor
      app.inject("geogebra-container");
    };

    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ejemplo de integración de GeoGebra con React</h1>
      {/* Contenedor para la aplicación de GeoGebra */}
      <div id="geogebra-container"></div>
      <p>Este es un ejemplo de cómo integrar un archivo .gbb de GeoGebra en un componente React.</p>
    </div>
  );
};

export default GeoGebraComponent;
