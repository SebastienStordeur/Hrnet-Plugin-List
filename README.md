# selectlist

## Install

```bash
npm install --save list-select
```

## Usage

```tsx
import { ListSelect } from "list-select";

<ListSelect data={array} headline={headline} />
```

## Props list :

  ```
  | Props               | Required | Type          | Class Equivalent
  | data                | true     | string[]      | 
  | headline            | true     | string|number |
  | class               | false    | string        | wrapper
  | listContainerStyle  | false    | string        | list-container
  | listStyle           | false    | string        |
  | activeValueStyle    | false    | string        | active-list
  | defaultListStyle    | false    | string        | default-list
  | id                  | true     | string        |
  ```

class, labelStyle, activeValueStyle, defaultListStyle are just different applied classes

## License

MIT © [SebastienStordeur](https://github.com/SebastienStordeur)

