// Definición del componente MoonIcon que renderiza un ícono SVG en forma de luna.
// Acepta un prop `fill` que determina el color de llenado del ícono. Por defecto, es blanco (`#fff`).
// También usa el operador rest para aceptar otros props adicionales mediante `...props`.

const MoonIcon = ({ fill = "#fff", ...props }) => {
    // Desestructuración de props:
    // - `fill` se extrae como un prop independiente y permite personalizar el color del ícono.
    // - `...props` captura el resto de los props que no han sido desestructurados.
    return (
        // El elemento <svg> es un contenedor para gráficos vectoriales escalables.
        // `...props` aplica todos los props adicionales al elemento, como `className` o `style`.
        <svg
            fill={fill} // Aplica el color de relleno especificado o usa el valor predeterminado.
            xmlns="http://www.w3.org/2000/svg" // Namespace XML requerido para que funcione el SVG.
            width="26" // Define el ancho del ícono en unidades SVG.
            height="26" // Define la altura del ícono en unidades SVG.
            {...props} // Pasa cualquier prop adicional, como estilos o clases CSS.
        >
            {/* 
                El elemento <path> dentro del SVG describe la forma del ícono.
                `fill` se aplica aquí para definir el color de relleno.
            */}
            <path
                fillRule="evenodd" // Define cómo se combinan áreas superpuestas en el path.
                d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                // `d` es un atributo SVG que define la forma del path mediante coordenadas y comandos de dibujo.
            />
        </svg>
    );
};

// Exportación del componente para que pueda usarse en otros archivos.
// Ejemplo: import MoonIcon from './MoonIcon';
export default MoonIcon;

/* 
**Conceptos explicados:**
1. Desestructuración:
- Extraemos `fill` directamente de los props pasados al componente.
- Permite configurar valores predeterminados como `fill = "#fff"`.

2. Rest operator (`...props`):
- Captura todos los props adicionales no desestructurados.
- Útil para manejar atributos como `className`, `style`, etc., sin necesidad de declararlos explícitamente.

3. Spread operator (`...props`):
- Se usa para expandir los props adicionales dentro del elemento <svg>.
- Aplica todos los atributos capturados con el operador rest.
*/
