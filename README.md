### DropdownSelector

`DropdownSelector` es un componente de selección desplegable personalizado en React. Permite a los usuarios seleccionar una opción de una lista proporcionada, con varias propiedades configurables para personalizar su comportamiento y apariencia.

#### Propiedades

| Propiedad           | Tipo                                   | Descripción                                                                                           | Predeterminado                  |
| ------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------- |
| `name`              | `string`                               | Nombre del campo del selector.                                                                        | -                               |
| `options`           | `OptionsType[]`                        | Lista de opciones disponibles para seleccionar. Cada opción debe ser un objeto con `value` y `label`. | -                               |
| `labelText`         | `string`                               | Texto de la etiqueta del selector.                                                                    | -                               |
| `hintText`          | `string`                               | Texto de ayuda que aparece debajo del selector cuando no está desplegado.                             | -                               |
| `formGroupWidth`    | `string`                               | Ancho del grupo del formulario.                                                                       | -                               |
| `emptyMessage`      | `string`                               | Mensaje que se muestra cuando no hay opciones disponibles.                                            | `"No hay opciones disponibles"` |
| `isDisabled`        | `boolean`                              | Indica si el selector está deshabilitado.                                                             | `false`                         |
| `isError`           | `boolean`                              | Indica si el selector debe mostrarse en estado de error.                                              | `false`                         |
| `selectedOption`    | `OptionsType \| null`                  | Opción seleccionada actualmente.                                                                      | `null`                          |
| `setSelectedOption` | `(value: OptionsType \| null) => void` | Función para actualizar la opción seleccionada.                                                       | -                               |

#### Tipo `OptionsType`

```typescript
type OptionsType = {
  value: string | null;
  label: string;
};
```

#### Uso

Aquí hay un ejemplo de cómo usar el componente `DropdownSelector`:

```tsx
import React, { useState } from "react";
import DropdownSelector, {
  OptionsType,
} from "musa-design-system"

const App = () => {
  const options: OptionsType[] = [
    { value: "1", label: "Opción 1" },
    { value: "2", label: "Opción 2" },
    { value: "3", label: "Opción 3" },
  ];

  const [selectedOption, setSelectedOption] = useState<OptionsType | null>(
    null
  );

  return (
    <div>
      <DropdownSelector
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        labelText="Seleccione una opción"
        hintText="Seleccione una de las opciones disponibles"
        formGroupWidth="w-full"
        isError={false}
        isDisabled={false}
      />
      {selectedOption && <p>Opción seleccionada: {selectedOption.label}</p>}
    </div>
  );
};

export default App;
```

### Descripción del Componente

#### Comportamiento

- **Apertura y Cierre del Desplegable**: El desplegable se abre al hacer clic en el campo de entrada y se cierra al hacer clic fuera del componente.
- **Selección de Opción**: Las opciones se pueden seleccionar al hacer clic en ellas, lo que actualiza la opción seleccionada y cierra el desplegable.
- **Ordenamiento de Opciones**: Las opciones se ordenan alfabéticamente y la opción seleccionada se coloca al principio de la lista cuando el desplegable está abierto.
- **Estilos de Selección y Hover**: Se aplican estilos específicos cuando una opción está seleccionada o cuando el usuario pasa el cursor sobre una opción.
