# Instalación

```
 import 'musa-design-system/dist/index.cjs.css';
 import {
  Alert,
  ContainedButton,
  DropdownSelector,
  LetterInput,
  OutlinedButton,
  PasswordInput,
} from "musa-design-system";;
```

# Componentes Documentados

## 1. Buttons

Botones reutilizables con diferentes estilos y variantes.

### Variantes:

- **Outline**: Botón con borde visible.
- **Solid**: Botón con fondo sólido.
- **Gosh**: Estilo de botón con efecto especial.
- **Button Icon**: Botón que incluye un ícono y es rounded-full.

### Props

| Propiedad        | Tipo                                                                 | Descripción                                                    |
| ---------------- | -------------------------------------------------------------------- | -------------------------------------------------------------- |
| `variant`        | `'contained' \| 'outlined'`                                          | Variante del botón: relleno (`contained`) o borde (`outlined`) |
| `children`       | `React.ReactNode`                                                    | Contenido interno del botón (texto, íconos, etc.)              |
| `icon`           | `React.ReactNode`                                                    | Ícono al inicio del botón (opcional)                           |
| `endIcon`        | `React.ReactNode`                                                    | Ícono al final del botón (opcional)                            |
| `color`          | `'primary' \| 'secondary' \| 'error' \| 'gray' \| 'info' \| 'white'` | Color del botón, según el tema del sistema                     |
| `extraPadding`   | `boolean`                                                            | Agrega un padding extra al botón (opcional)                    |
| `full`           | `boolean`                                                            | Hace que el botón ocupe el ancho completo del contenedor       |
| `loading`        | `boolean`                                                            | Muestra un indicador de carga dentro del botón                 |
| `roundedFull`    | `boolean`                                                            | Estilo con bordes completamente redondeados                    |
| `size`           | `'normal' \| 'small' \| 'large' \| 'medium'`                         | Tamaño del botón                                               |
| `centerText`     | `boolean`                                                            | Centra el texto del botón                                      |
| `shadowDisabled` | `boolean`                                                            | Desactiva la sombra del botón (opcional)                       |
| `style`          | `React.CSSProperties`                                                | Estilos personalizados aplicados al botón                      |
| `onClick`        | `function`                                                           | Función a ejecutar al hacer clic                               |
| `type`           | `'button' \| 'submit' \| 'reset'`                                    | Tipo del botón HTML                                            |
| `disabled`       | `boolean`                                                            | Desactiva el botón                                             |

### Ejemplo

```javascript
  <OutlinedButton color="primary">Hola</OutlinedButton>
  <ContainedButton color="primary">Hola</ContainedButton>
```

## 2. Input

Campos de entrada de texto con múltiples variantes y funcionalidad avanzada.

### Tipos de Inputs

1. **LetterInput**: Entrada restringida a letras (con opción para permitir espacios).
2. **NumberInput**: Entrada restringida a números (con soporte opcional para decimales).
3. **PasswordInput**: Entrada para contraseñas.

### Props Generales

| Propiedad         | Tipo                                         | Descripción                                         |
| ----------------- | -------------------------------------------- | --------------------------------------------------- |
| `variant`         | `'normal'`                                   | Variante visual del input                           |
| `disabled`        | `boolean`                                    | Desactiva la entrada, impidiendo interacción        |
| `fullWidth`       | `boolean`                                    | Ajusta el ancho del input al 100% del contenedor    |
| `endIcon`         | `ReactElement`                               | Ícono al final del input (opcional)                 |
| `isInvalid`       | `boolean`                                    | Marca el input como inválido                        |
| `isError`         | `boolean`                                    | Marca el input con un estado de error               |
| `error`           | `string`                                     | Mensaje de error mostrado debajo del input          |
| `label`           | `string`                                     | Etiqueta asociada al input                          |
| `placeholder`     | `string`                                     | Texto de marcador dentro del input                  |
| `hint`            | `string`                                     | Mensaje de ayuda mostrado debajo del input          |
| `actionEndIcon`   | `ReactElement`                               | Ícono de acción al final del input                  |
| `onClickEndIcon`  | `function`                                   | Acción ejecutada al hacer clic en `endIcon`         |
| `onActionEndIcon` | `function`                                   | Acción ejecutada al interactuar con `actionEndIcon` |
| `showIconAction`  | `boolean`                                    | Muestra o no el `actionEndIcon`                     |
| `width`           | `string`                                     | Ancho personalizado del input                       |
| `padding`         | `string`                                     | Espaciado interno del input                         |
| `onChange`        | `(e: ChangeEvent<HTMLInputElement>) => void` | Función ejecutada al cambiar el valor               |
| `type`            | `string`                                     | Tipo de entrada HTML                                |

### Props Específicas

#### LetterInput

| Propiedad     | Tipo      | Descripción                  |
| ------------- | --------- | ---------------------------- |
| `allowSpaces` | `boolean` | Permite espacios en el input |

#### NumberInput

| Propiedad | Tipo      | Descripción               |
| --------- | --------- | ------------------------- |
| `decimal` | `boolean` | Permite números decimales |

### Ejemplo de Uso

```javascript
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
```

## 3. Card

Componente para contener contenido con sombra, bordes redondeados y tamaños configurables.

### Props

| Propiedad   | Tipo                                       | Descripción                     |
| ----------- | ------------------------------------------ | ------------------------------- |
| `children`  | `React.ReactNode`                          | Contenido interno de la tarjeta |
| `className` | `string`                                   | Clase CSS personalizada         |
| `padding`   | `'none' \| 'small' \| 'normal' \| 'large'` | Tamaño del padding interno      |
| `center`    | `boolean`                                  | Centra el contenido             |
| `onClick`   | `function`                                 | Acción al hacer clic            |
| `bordered`  | `boolean`                                  | Agrega un borde visible         |

### Ejemplo

```javascript
<Card center bordered padding="large">
  Este es un card con sombra y bordes redondeados.
</Card>
```

## 4. Alert

Mensajes informativos con diferentes estilos.

### Props

| Propiedad | Tipo                                          | Descripción          |
| --------- | --------------------------------------------- | -------------------- |
| `type`    | `'info' \| 'error' \| 'success' \| 'warning'` | Tipo de alerta       |
| `message` | `string`                                      | Mensaje de la alerta |

### Ejemplo

```javascript
<Alert type="success" message="Operación exitosa." />
<Alert type="error" message="Ha ocurrido un error." />
```

## 5. Checkbox y Radio

### Props de Radio

| Propiedad     | Tipo                       | Descripción                    |
| ------------- | -------------------------- | ------------------------------ |
| `label`       | `string \| ReactElement`   | Etiqueta del radio button      |
| `full`        | `boolean`                  | Ocupa todo el ancho disponible |
| `centerRadio` | `boolean`                  | Centra el radio button         |
| `hideRadio`   | `boolean`                  | Oculta el radio button         |
| `hint`        | `string`                   | Texto adicional                |
| `color`       | `'primary' \| 'secondary'` | Color del radio button         |

### Props de Checkbox

| Propiedad        | Tipo                       | Descripción                    |
| ---------------- | -------------------------- | ------------------------------ |
| `label`          | `string \| ReactElement`   | Etiqueta del checkbox          |
| `full`           | `boolean`                  | Ocupa todo el ancho disponible |
| `centerCheckbox` | `boolean`                  | Centra el checkbox             |
| `hideCheckbox`   | `boolean`                  | Oculta el checkbox             |
| `hint`           | `string`                   | Texto adicional                |
| `endIcon`        | `ReactElement`             | Icono al final                 |
| `color`          | `'primary' \| 'secondary'` | Color del checkbox             |

### Ejemplo

```javascript
    <Checkbox label="Acepto los términos y condiciones" />
    <div className="flex flex-col gap-4">
      <Radio
        label="Option 1"
        name="radioGroup"
        value="option1"
        checked={selected === 'option1'}
        onChange={() => setSelected('option1')}
        color='primary'
      />
      <Radio
        label="Option 2"
        name="radioGroup"
        value="option2"
        checked={selected === 'option2'}
        onChange={() => setSelected('option2')}
        color='secondary'
      />
    </div>
```

## 6. Loader

### Props

| Propiedad | Tipo     | Descripción                      |
| --------- | -------- | -------------------------------- |
| `label`   | `string` | Descripción del mensaje de carga |

### Ejemplo

```javascript
<Loader label="Cargando componentes..." />
```

## 7. DropdownSelector

### Props

| Propiedad           | Tipo                                      | Descripción                        |
| ------------------- | ----------------------------------------- | ---------------------------------- |
| `options`           | `Array<{ value: string, label: string }>` | Lista de opciones disponibles      |
| `formGroupWidth`    | `string`                                  | Ancho personalizado del contenedor |
| `selectedOption`    | `{ value: string, label: string }`        | Opción seleccionada                |
| `setSelectedOption` | `function`                                | Función para actualizar selección  |
| `labelText`         | `string`                                  | Etiqueta del dropdown              |
| `hintText`          | `string`                                  | Mensaje de ayuda                   |
| `emptyMessage`      | `string`                                  | Mensaje cuando no hay opciones     |
| `isDisabled`        | `boolean`                                 | Desactiva el dropdown              |
| `isError`           | `boolean`                                 | Indica estado de error             |

## 8. Header

### Props

| Propiedad  | Tipo          | Descripción           |
| ---------- | ------------- | --------------------- |
| `logo`     | `JSX.Element` | Logo del encabezado   |
| `navLinks` | `JSX.Element` | Enlaces de navegación |

### Ejemplo

```javascript
const navLinks = (
  <>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </>
);

<Header logo={<FaReact />} navLinks={navLinks} />;
```
