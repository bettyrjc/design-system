## Componentes Documentados

### 1. Buttons

Botones reutilizables con diferentes estilos y variantes.

#### Variantes:

- **Outline**: Botón con borde visible.
- **Solid**: Botón con fondo sólido.
- **Gosh**: Estilo de botón con efecto especial.
- **Button Icon**: Botón que incluye un ícono y es rounded-full.

| Propiedad        | Tipo                  | Descripción                                               |
| ---------------- | --------------------- | --------------------------------------------------------- | --------------------------------------------------------------- | -------------------- | ----------------- | -------- | ------------------------------------------- |
| `variant`        | `'contained'          | 'outlined'`                                               | Variante del botón: relleno (`contained`) o borde (`outlined`). |
| `children`       | `React.ReactNode`     | Contenido interno del botón (texto, íconos, etc.).        |
| `icon`           | `React.ReactNode`     | Ícono al inicio del botón (opcional).                     |
| `endIcon`        | `React.ReactNode`     | Ícono al final del botón (opcional).                      |
| `color`          | `'primary'            | 'secondary'                                               | 'error'                                                         | 'gray'               | 'info'            | 'white'` | Color del botón, según el tema del sistema. |
| `extraPadding`   | `boolean`             | Agrega un padding extra al botón (opcional).              |
| `full`           | `boolean`             | Hace que el botón ocupe el ancho completo del contenedor. |
| `loading`        | `boolean`             | Muestra un indicador de carga dentro del botón.           |
| `roundedFull`    | `boolean`             | Estilo con bordes completamente redondeados.              |
| `size`           | `'normal'             | 'small'                                                   | 'large'                                                         | 'medium'`            | Tamaño del botón. |
| `centerText`     | `boolean`             | Centra el texto del botón.                                |
| `shadowDisabled` | `boolean`             | Desactiva la sombra del botón (opcional).                 |
| `style`          | `React.CSSProperties` | Estilos personalizados aplicados al botón.                |
| `onClick`        | `function`            | Función a ejecutar al hacer clic.                         |
| `type`           | `'button'             | 'submit'                                                  | 'reset'`                                                        | Tipo del botón HTML. |
| `disabled`       | `boolean`             | Desactiva el botón.                                       |

---

#### Ejemplo

```javascript
<Button variant="solid" onClick={() => alert('Clicked!')}>
  Solid Button
</Button>

<Button variant="outline" icon={<Icon name="edit" />} onClick={() => alert('Edit')}>
  Edit
</Button>
```

---

### 2. Input

Campos de entrada de texto con múltiples variantes y funcionalidad avanzada.

#### Tipos de Inputs

1. **LetterInput**: Entrada restringida a letras (con opción para permitir espacios).
2. **NumberInput**: Entrada restringida a números (con soporte opcional para decimales).
3. **PasswordInput**: Entrada para contraseñas.

#### Props

---

| Propiedad         | Tipo                                         | Descripción                                                         |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| `variant`         | `'normal'`                                   | Variante visual del input.                                          |
| `disabled`        | `boolean`                                    | Desactiva la entrada, impidiendo interacción. Por defecto: `false`. |
| `fullWidth`       | `boolean`                                    | Ajusta el ancho del input al 100% del contenedor.                   |
| `endIcon`         | `ReactElement`                               | Ícono al final del input (opcional).                                |
| `isInvalid`       | `boolean`                                    | Marca el input como inválido (visual y funcionalmente).             |
| `isError`         | `boolean`                                    | Marca el input con un estado de error (opcional).                   |
| `error`           | `string`                                     | Mensaje de error mostrado debajo del input.                         |
| `label`           | `string`                                     | Etiqueta asociada al input.                                         |
| `placeholder`     | `string`                                     | Texto de marcador dentro del input.                                 |
| `hint`            | `string`                                     | Mensaje de ayuda mostrado debajo del input (si no hay error).       |
| `actionEndIcon`   | `ReactElement`                               | Ícono de acción al final del input (opcional).                      |
| `onClickEndIcon`  | `function`                                   | Acción ejecutada al hacer clic en `endIcon`.                        |
| `onActionEndIcon` | `function`                                   | Acción ejecutada al interactuar con `actionEndIcon`.                |
| `showIconAction`  | `boolean`                                    | Muestra o no el `actionEndIcon`.                                    |
| `width`           | `string`                                     | Ancho personalizado del input (opcional).                           |
| `padding`         | `string`                                     | Espaciado interno del input.                                        |
| `onChange`        | `(e: ChangeEvent<HTMLInputElement>) => void` | Función ejecutada al cambiar el valor del input.                    |
| `type`            | `string`                                     | Tipo de entrada HTML (por defecto: `text`).                         |

---

---

#### Propiedades Específicas

##### **LetterInput**

| Propiedad     | Tipo      | Descripción                                          |
| ------------- | --------- | ---------------------------------------------------- |
| `allowSpaces` | `boolean` | Permite espacios en el input (por defecto: `false`). |

##### **NumberInput**

| Propiedad | Tipo      | Descripción                                                    |
| --------- | --------- | -------------------------------------------------------------- |
| `decimal` | `boolean` | Permite números decimales si es `true` (por defecto: `false`). |

---

#### Ejemplos de Uso

// Entrada de solo letras
<LetterInput 
  label="Solo letras" 
  placeholder="Ej. ABC" 
  allowSpaces 
/>

// Entrada de números
<NumberInput 
  label="Edad" 
  placeholder="Ej. 25" 
  decimal={false} 
/>

---

#### **PasswordInput**

Un campo de entrada de contraseña con la capacidad de mostrar/ocultar la contraseña utilizando un ícono de ojo.

| Propiedad     | Tipo      | Descripción                                                             |
| ------------- | --------- | ----------------------------------------------------------------------- |
| `disabled`    | `boolean` | Desactiva la entrada, impidiendo la interacción (por defecto: `false`). |
| `fullWidth`   | `boolean` | Ajusta el ancho del input al 100% del contenedor.                       |
| `isInvalid`   | `boolean` | Marca el input como inválido visualmente.                               |
| `label`       | `string`  | Etiqueta asociada al input.                                             |
| `error`       | `string`  | Mensaje de error mostrado debajo del input (si se marca como inválido). |
| `hint`        | `string`  | Texto de ayuda mostrado debajo del input (si no hay error).             |
| `placeholder` | `string`  | Texto de marcador dentro del input.                                     |

---

#### Ejemplo de Uso

```javascript

// Entrada de contraseña
<PasswordInput
  label="Contraseña"
  placeholder="Ingresa tu contraseña"
  error="La contraseña es incorrecta"
  isInvalid
  hint="Debe tener al menos 8 caracteres."
/>;
```

#### Notas

- El campo de entrada de **contraseña** incluye un ícono de ojo para alternar entre mostrar y ocultar la contraseña, mejorando la experiencia de usuario al permitir ver el texto ingresado.
- La funcionalidad de mostrar/ocultar la contraseña solo está disponible cuando el input no está deshabilitado.

---

### 3. Títulos

Estilos predefinidos para encabezados.

#### Props

| Propiedad | Tipo   | Descripción                             |
| --------- | ------ | --------------------------------------- |
| `level`   | number | Nivel del título (1-6).                 |
| `align`   | string | Alineación (`left`, `center`, `right`). |

#### Ejemplo

```javascript
<Title level={1} align="center">
  Mi encabezado principal
</Title>
```

---

### 4. Card

Componente para contener contenido con sombra, bordes redondeados y tamaños configurables.

#### Props

| Propiedad   | Tipo              | Descripción                                                 |
| ----------- | ----------------- | ----------------------------------------------------------- | -------- | -------- | ------------------------------------------------------------------ |
| `children`  | `React.ReactNode` | Contenido interno de la tarjeta.                            |
| `className` | `string`          | Clase CSS personalizada para estilos adicionales.           |
| `padding`   | `'none'           | 'small'                                                     | 'normal' | 'large'` | Tamaño del padding interno de la tarjeta. Por defecto es `normal`. |
| `center`    | `boolean`         | Centra el contenido de la tarjeta en ambas direcciones.     |
| `onClick`   | `function`        | Acción a ejecutar al hacer clic en la tarjeta (opcional).   |
| `bordered`  | `boolean`         | Agrega un borde visible alrededor de la tarjeta (opcional). |

---

#### Ejemplo

```javascript
<Card shadow rounded size="medium">
  Este es un card con sombra y bordes redondeados.
</Card>
```

#### Notas

1. **Padding**: Los valores posibles son:
   - `none`: Sin espacio interno.
   - `small`: Espaciado pequeño (`p-2`).
   - `normal`: Espaciado normal (`p-4`, valor por defecto).
   - `large`: Espaciado grande (`p-8`).
2. **Clickeable**: Al pasar un `onClick`, la tarjeta se hace interactiva y cambia el cursor a `pointer`.
3. **Bordeado**: La prop `bordered` agrega un borde ligero utilizando `border border-zinc-50`.

---

### 5. Alert

Mensajes informativos con diferentes estilos.

#### Variantes:

- **Info**
- **Error**
- **Success**
- **Warning**

#### Props

| Propiedad | Tipo                                         | Descripción               |
| --------- | -------------------------------------------- | ------------------------- |
| `type`    | string `info`, `error`, `success`, `warning` | Definir el tipo de alerta |
| `message` | string                                       | Mensaje de la alerta.     |

#### Ejemplo

```javascript
<Alert type="success" message="Operación exitosa." />
<Alert type="error" message="Ha ocurrido un error." />
```

---

### 6. Checkbox y Radio

Componentes para selección única o múltiple.

#### Ejemplo

```javascript
<Checkbox label="Acepto los términos y condiciones" />
<Radio name="gender" value="male" label="Masculino" />
<Radio name="gender" value="female" label="Femenino" />
```

---

### 7. Loader

Indicador de carga.

#### Props

| Propiedad | Tipo   | Descripción                          |
| --------- | ------ | ------------------------------------ |
| `label`   | string |  Descripción del mensaje de carga.                    |

#### Ejemplo

```javascript
<Loader laber="Cargando componentes..."/>
```

---

---

### 8. DropdownSelector

Un selector desplegable personalizable con soporte para mensajes, estados de error y opciones deshabilitadas.

#### Props

| Propiedad           | Tipo                                      | Descripción                                                                                         |
| ------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `options`           | `Array<{ value: string, label: string }>` | Lista de opciones disponibles para el selector.                                                     |
| `formGroupWidth`    | `string`                                  | Ancho personalizado del contenedor del dropdown (opcional).                                         |
| `selectedOption`    | `{ value: string, label: string }`        | Opción actualmente seleccionada.                                                                    |
| `setSelectedOption` | `function`                                | Función para actualizar la opción seleccionada.                                                     |
| `labelText`         | `string`                                  | Texto de la etiqueta del dropdown.                                                                  |
| `hintText`          | `string`                                  | Mensaje de ayuda o sugerencia que aparece debajo del dropdown (opcional).                           |
| `emptyMessage`      | `string`                                  | Mensaje a mostrar cuando no hay opciones disponibles. Por defecto: `"No hay opciones disponibles"`. |
| `isDisabled`        | `boolean`                                 | Desactiva el dropdown, impidiendo interacción. Por defecto: `false`.                                |
| `isError`           | `boolean`                                 | Indica si el dropdown tiene un estado de error. Por defecto: `false`.                               |

---

#### Ejemplo de Uso

```javascript
import { DropdownSelector } from '@betty/design-system';

const options = [
  { value: 'option1', label: 'Opción 1' },
  { value: 'option2', label: 'Opción 2' },
  { value: 'option3', label: 'Opción 3' },
];

const [selectedOption, setSelectedOption] = useState(null);

// Dropdown básico
<DropdownSelector
  options={options}
  selectedOption={selectedOption}
  setSelectedOption={setSelectedOption}
  labelText="Selecciona una opción"
/>

// Dropdown con estado de error y mensaje vacío
<DropdownSelector
  options={[]}
  selectedOption={selectedOption}
  setSelectedOption={setSelectedOption}
  labelText="Selecciona una opción"
  isError
  emptyMessage="No hay opciones disponibles en este momento."
/>

// Dropdown deshabilitado
<DropdownSelector
  options={options}
  selectedOption={selectedOption}
  setSelectedOption={setSelectedOption}
  labelText="Selecciona una opción"
  isDisabled
/>
```

---

#### Notas

1. **Opciones Vacías**: Si `options` está vacío, se muestra el mensaje definido en `emptyMessage`.
2. **Error Visual**: Al pasar `isError`, el dropdown cambia a un estado visual que indica error (puedes agregar estilos específicos para esto en el diseño).
3. **Deshabilitado**: Si `isDisabled` es `true`, el dropdown queda inactivo y no puede seleccionarse ninguna opción.
4. **Ancho Personalizado**: Puedes ajustar el ancho del contenedor con `formGroupWidth` (ejemplo: `formGroupWidth="300px"`).

---

---

### 9. Radio

Un botón de opción (radio button) que permite seleccionar una opción de un conjunto de opciones.

| Propiedad     | Tipo       | Descripción                                                                     |
| ------------- | ---------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `label`       | `string    | ReactElement`                                                                   | Etiqueta asociada al botón de radio.                            |
| `full`        | `boolean`  | Hace que el radio button ocupe todo el ancho disponible (por defecto: `false`). |
| `centerRadio` | `boolean`  | Centra el radio button dentro del contenedor.                                   |
| `hideRadio`   | `boolean`  | Oculta el radio button (por defecto: `false`).                                  |
| `hint`        | `string`   | Texto adicional que aparece debajo del radio button.                            |
| `color`       | `'primary' | 'secondary'`                                                                    | Establece el color del radio button (por defecto: `'primary'`). |

#### Ejemplo de Uso

```javascript

// Radio con label y hint
<Radio
  id="radio1"
  label="Opción 1"
  hint="Esta es la opción número 1"
  onChange={handleRadioChange}
/>;
```

#### Notas

- Los radio buttons pueden ser personalizados con diferentes colores mediante la propiedad `color`.
- La propiedad `centerRadio` permite centrar el radio button y la propiedad `hideRadio` oculta el input de tipo radio si es necesario.

---

### 10. Checkbox

Un campo de entrada de tipo checkbox que permite seleccionar o deseleccionar una opción.

| Propiedad        | Tipo           | Descripción                                                                 |
| ---------------- | -------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `label`          | `string        | ReactElement`                                                               | Etiqueta asociada al checkbox.                              |
| `full`           | `boolean`      | Hace que el checkbox ocupe todo el ancho disponible (por defecto: `false`). |
| `centerCheckbox` | `boolean`      | Centra el checkbox dentro del contenedor.                                   |
| `hideCheckbox`   | `boolean`      | Oculta el checkbox (por defecto: `false`).                                  |
| `hint`           | `string`       | Texto adicional que aparece debajo del checkbox.                            |
| `endIcon`        | `ReactElement` | Icono que se muestra al final del checkbox.                                 |
| `color`          | `'primary'     | 'secondary'`                                                                | Establece el color del checkbox (por defecto: `'primary'`). |

#### Ejemplo de Uso

```javascript

// Checkbox con label, hint y color personalizado
<Checkbox
  id="checkbox1"
  label="Aceptar términos y condiciones"
  hint="Por favor, marque esta casilla para continuar."
  color="secondary"
  onChange={handleCheckboxChange}
/>;
```

#### Notas

- Los checkboxes pueden tener diferentes colores mediante la propiedad `color`.
- La propiedad `hideCheckbox` oculta el checkbox si se requiere.
- El `endIcon` puede añadirse si se quiere mostrar un ícono al final del checkbox.

---


---

### 11. Header

Un componente de encabezado que incluye un logo y un menú de navegación adaptable para dispositivos móviles.

| Propiedad   | Tipo              | Descripción                                                                                             |
| ----------- | ----------------- | ------------------------------------------------------------------------------------------------------- |
| `logo`      | `JSX.Element`     | Logo que se mostrará en el encabezado. Puede ser un ícono o cualquier elemento JSX.                     |
| `navLinks`  | `JSX.Element`     | Enlaces de navegación que se mostrarán en la barra de navegación.                                        |

#### Ejemplo de Uso

```javascript
import { FaReact } from 'react-icons/fa'; // Puedes usar tu propio ícono para el logo

const navLinks = (
  <>
    <a href="#home" className="hover:text-gray-500">Home</a>
    <a href="#about" className="hover:text-gray-500">About</a>
    <a href="#contact" className="hover:text-gray-500">Contact</a>
  </>
);

const MyHeader = () => (
  <Header logo={<FaReact />} navLinks={navLinks} />
);
```

#### Notas

- El componente es **responsivo**, adaptándose a pantallas pequeñas (con un menú tipo hamburguesa) y pantallas grandes (con un menú horizontal).
- La propiedad `logo` permite insertar cualquier elemento JSX como el logo del encabezado.
- Los enlaces de navegación (`navLinks`) deben pasarse como elementos JSX y se organizarán según el tamaño de la pantalla.
- En pantallas grandes, el menú de navegación se muestra alineado a la derecha. En pantallas pequeñas, un ícono de hamburguesa permite abrir un menú desplegable.

---
