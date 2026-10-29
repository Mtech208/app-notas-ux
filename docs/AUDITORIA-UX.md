# Auditoría UX/UI – App Notas

**Autor:** Matias Leonardo Manrique Carrillo · **Curso:** Diseño de Interfaces de Programación Avanzado
**Repositorio:** https://github.com/Mtech208/app-notas-ux
**Página publicada:** https://mtech208.github.io/app-notas-ux/

## 1. Resumen
Auditoría y rediseño de la aplicación app-notas aplicando las 5 heurísticas de Nielsen, leyes de usabilidad y pautas WCAG 2.2 AA.

## 2. Heurísticas de Nielsen
| Heurística | Problema en la pantalla original | Solución aplicada | Gravedad |
|---|---|---|---|
| Visibilidad del estado | Al agregar o borrar no mostraba mensajes. | Se añadió zona role="status" que notifica cada acción. | Alta |
| Coincidencia con el mundo real | Categorías sin sentido ("a", "b", "c"). | Categorías claras ("Estudio", "Trabajo", "Personal"). | Media |
| Control y libertad | Borraba al instante sin recuperación. | Botón "Deshacer" para restaurar notas eliminadas. | Alta |
| Prevención de errores | Permitía agregar notas vacías. | El botón Agregar está deshabilitado hasta llenar el texto. | Alta |
| Reconocer, no recordar | Solo usaba placeholders que desaparecían. | Se agregaron etiquetas <label> siempre visibles. | Media |

## 3. Leyes de usabilidad
| Ley | Cambio aplicado | Justificación |
|---|---|---|
| Fitts | Botones con min-height: 44px y ancho completo. | Facilita el clic y el toque en pantallas táctiles. |
| Hick | Categorías estructuradas en menú desplegable. | Reduce el tiempo de decisión al presentar opciones claras. |
| Miller | Formulario e historial organizados en 2 secciones. | Disminuye la carga cognitiva dividiendo la información. |

## 4. Lighthouse (Accesibilidad)
| Versión | Puntaje | Captura |
|---|---|---|
| Antes | 56 | ![Lighthouse Antes](img/lighthouse-antes.png) |
| Después | 100 | ![Lighthouse Después](img/lighthouse-despues.png) |

## 5. Antes y Después
| Antes | Después |
|---|---|
| ![App Antes](img/app-antes.png) | ![App Después](img/app-despues.png) |