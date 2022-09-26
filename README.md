# selectlist

## Install

```bash
npm install --save selectlist
```

## Usage

```tsx
Props: {
  data: string[] = ["abc", "def"]
  headline: string | number = "Something"
  class: string = "personalized class"
  listStyle: string = "another class"
  activeValueClass: string = "another class"
}

<ListSelect data={array} headline={headline} />
```

## Props list :

  ```
  | Props            | Required | Type          |
  | data             | true     | string[]      |
  | headline         | true     | string|number |
  | class            | false    | string        |
  | listStyle        | false    | string        |
  | activeValueClass | false    | string        | 
  ```

class && labelStyle && activeValueClass are just different applied classes

## License

MIT © [SebastienStordeur](https://github.com/SebastienStordeur)
