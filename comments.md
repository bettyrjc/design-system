# STRUCTURE CSS

## ITCSS and atom design

```
├── settings

│ ├── tailwind imports

│ └── typography.css

├── tools

│ for moment we are no using tools

├── generic

│ └── scrollbar.css

├── elements

│ └── index.css - tags

├── objects

│ ├── flex.css

│ ├── positions.css

│ └── index.css

├── components

│ ├── atoms

│ │ ├── button.css

│ │ ├── input.css

│ │ └── label.css

│ ├── molecules

│ │ ├── card.css

│ │ └── form.css

│ └── organisms

│ ├── gallery.css

│ └── header.css

├── utilities (we name it shared because rule ! utilities)

│ └── error.css

└── index.scss

```

Quite description about organization.

## Settings and Tools

The first two levels are oriented towards preprocessors like Sass: defining color variables, typography, as well as mixins and functions. These two levels do not produce any output in our CSS.

## Generic

In this layer, we will put generic styles such as reset or normalize, and the definition of box-sizing. Here we start generating output in our CSS.

## Elements

We define the styles for HTML elements such as `h1`, `img`, `a`, etc. This is where we start applying our own styles that will change the appearance of our application.

## Objects

In this layer, we start creating classes. Until now, we have only worked with element selectors (which have less specificity). Objects are highly reusable classes that add structural patterns without adding decoration, such as `.container` or `.ui-list`.

## Components

Components are the bulk of our app. Here we will have all the classes that add styles beyond structure. Since they are more specific classes, they will be less reusable: a class `main-header` will be applied fewer times than `container`.

## Utilities

Utility classes like `is-error`, `is-centered`, etc., will always override previous styles when applied. Remember, this is the case where we can use `!important` without making our CSS less maintainable.

- CLASS IN COMPONENTS WILL BE WRITE WITH BEM ARCHITECTURE
- The class in components will write with BEM to identify block, element and modifier
- architecture block elements and must be separated (\*\*) and modifier (--)

example: block\*\*element--modifier

# STRUCTURE IN COMPONENTS

```

├── assets static elements and css

│ ├── icons - svg icons

│ ├── mocks - static data

│ └── ui - css styles

└── modules (organized for item)

├── Dropdown - fields to recolects user info

└── buttons
```

# how to run project (local)

- `npm run start`

# how deploy project to vercel

- `npm run build-storybook`
- `git add files`
- `git commit -m 'message commit'`
- `git push origin branch`

# how publish project to npm

- `git add files` (you must change version-tag)
- `git commit -m 'message commit'`
- `npm run build`
- `npm publish`

## visit link

[Link vercel](https://design-system-git-main-betty-jimenezs-projects.vercel.app/)

# Comments

Documenta aquellas cosas que te gustaron. Queremos entender porque tomaste las decisiones que tomaste.

Buena experiencia de usario:

-> que el usuario pueda escribir en el input es mas rapido que scroll.

-> Las animaciones y los delays mejoran la percepción visual de la acción de selección, haciendo que el componente se sienta más interactivo y responsivo

-> el icono de check de que selecciono satisfactoriamente

-> la informacion del hint

# Elegi la estructuras de css

Elegí utilizar ITCSS y el enfoque de Atomic Design para organizar y escribir el CSS de mis componentes, combinándolo con el sistema BEM exclusivamente en los componentes de Atomic Design para darles clases más específicas. ITCSS organiza el código de lo más genérico a lo más específico, lo que facilita su comprensión y mantenimiento. Atomic Design, por su parte, estructura los componentes de manera modular. El uso de BEM dentro de estos componentes asegura una nomenclatura clara y predecible, mejorando la legibilidad y permitiendo una gestión eficiente del código CSS a medida que el proyecto crece. Tambien con tailwind para todo lo de utility css.

La estructura global que incluye una carpeta assets para elementos estáticos como mocks, styles, icons y types, y una carpeta modules para componentes específicos como inputs y botones. Dentro de estos módulos se agrupa todo lo relacionado que no sea estático, como los archivos button.tsx y button.stories.tsx. Esta organización mantiene todo junto, permitiendo a los desarrolladores entender rápidamente las estructuras y facilitando el desarrollo y mantenimiento del código.

## Feedback

Haznos saber que errores o mejoras encuentras en el componente o descripción, eso también es parte del trabajo.

¡Buscamos a alguien que nos ayude a hacer una mejor UX!

- agregaria un icon de x cuando el input ya tenga una opcion selected para limpiar en caso de que si el input no es required seria una buena funcionalidad. (en un input tipo busqueda usualmente es muy comun)

- En el figma los colores se veian mas claros que de los que realmente decia cuando se le daba click para inspeccionar (no en el prototipo).

- hay una funcionalidad de que cuando el usuario no selecciona al correcto, se resalta es el item correcto, pero y si hay mas de uno no seria muy claro para el usuario

```



# IMPROVE (También agrega las mejoras que se pueden hacer pero ya no pudiste.)



- tests
	- casos:
		- Cuando no tiene data
		- cuando tenga optiones
		- elegir uno (solo los que non tengan el value null)
		- si tiene hint
		- comportamiento cuando es error o disabled
		- que tipee en el campo de búsqueda
 - optimizar la publicacion del paquete (para que no tenga vulnerabilidades, y pueda instalarse con viejas versiones , -actualmente solo funciona para proyectos nuevos-)

```
