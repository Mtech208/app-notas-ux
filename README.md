# App Notas – Rediseño Accesible y UX

Proyecto de rediseño accesible y auditoría de interfaz para la aplicación de notas personales. Realizado aplicando las 5 heurísticas de Nielsen, leyes de usabilidad (Fitts, Hick, Miller) y las pautas de accesibilidad WCAG 2.2 AA.

## 🔗 Enlaces del Proyecto

- **Repositorio en GitHub:** [https://github.com/Mtech208/app-notas-ux](https://github.com/Mtech208/app-notas-ux)
- **Página Publicada (GitHub Pages):** [https://mtech208.github.io/app-notas-ux/](https://mtech208.github.io/app-notas-ux/)
- **Auditoría UX completa:** [Ver docs/AUDITORIA-UX.md](docs/AUDITORIA-UX.md)

---

## 🚀 Cambios Principales Aplicados

| Aspecto | Antes (Original) | Después (Rediseñado) |
|---|---|---|
| **Accesibilidad (Lighthouse)** | Puntaje bajo (56/100) | **100/100** en verde |
| **Visibilidad del estado** | Sin mensajes de acción | Mensajes claros en tiempo real (`role="status"`) |
| **Control y Libertad** | Borraba notas al instante | **Botón "Deshacer"** para recuperar notas eliminadas |
| **Prevención de errores** | Permitía crear notas vacías | Botón "Agregar nota" desactivado hasta escribir texto |
| **Reconocer antes que recordar** | Solo usaba placeholders | Etiquetas `<label>` visibles y asociadas |
| **Ley de Fitts** | Botones diminutos (<20px) | Botones táctiles adaptables de **44px de alto** |
| **Ley de Hick** | Opciones ambiguas ("a", "b", "c") | Categorías estructuradas ("Estudio", "Trabajo", "Personal") |
| **Foco visible** | `outline: none` (inaccesible) | Resaltado en naranja brillante (`:focus-visible`) |

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica, uso de `fieldset`, `legend`, `label` y atributos ARIA.
- **CSS3:** Variables globales en `:root`, sistema de espaciado, contraste AA/AAA y diseño adaptable.
- **JavaScript (ES6):** Manipulación del DOM, validación en tiempo real y lógica de estado/deshacer.
- **Auditoría:** Google Lighthouse (DevTools).

---

## 👨‍💻 Autor

- **Nombre:** Matias Leonardo Manrique Carrillo
- **Curso:** Diseño de Interfaces de Programación Avanzado
- **Institución:** Tecsup