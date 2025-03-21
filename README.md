# React Input Tags

A customizable React component to handle input tags efficiently. This project allows users to add, remove, and manage tags dynamically in an input field, making it ideal for handling keyword or label inputs in forms.

## Features

- **Dynamic Tag Management**: Easily add and remove tags.
- **Customizable Appearance**: You can modify the look and feel of the input field and tags.
- **Keyboard Navigation**: Add tags using the Enter key and remove tags with Backspace or Delete.
- **Support for Custom Validators**: Users can validate tags before adding them.

## Development

To contribute to the development of this component locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-repository-name
    cd your-repository-name
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **Run tests** (if applicable):

    ```bash
    npm run test
    ```

This will set up a local development environment and allow you to make changes to the component.


## Usage

To use the `InputTags` component, import it into your React component and provide necessary props such as `value`, `onChange`, `placeholder`, and `maxTags`.

```tsx
import { useState } from "react";
import InputTags from "./InputTags";

const MyComponent = () => {
  const [tags, setTags] = useState<string[]>([]);

  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  return (
    <div>
      <InputTags
        value={tags}
        onChange={handleTagsChange}
        placeholder="Enter tags"
        maxTags={5}
      />
    </div>
  );
};
```

## Props

The `InputTags` component accepts the following props:

| Prop             | Type                           | Required       | Description                                                                               |
|------------------|--------------------------------|----------------|-------------------------------------------------------------------------------------------|
| `style`          | `Object`                       | `No`           | Custom styles for different elements. Includes `root`, `container`, `badge`, and `input`. |
| `id`             | `string`                       | `No`           | The `id` attribute for the input element. Default: `"tags"`.                              |
| `name`           | `string`                       | `No`           | The `name` attribute for the input element. Default: `"tags"`.                            |
| `value`          | `string[]` or `number[]`       | `No`           | Array of pre-selected tags. Can be strings or numbers. Default: `[]`.                     |
| `placeholder`    | `string`                       | `No`           | Placeholder text for the input field. Default: `"Placeholder"`.                           |
| `separator`      | `string` or `string[]`         | `No`           | Defines separators for multiple tags. Default: `","`.                                     |
| `maxTags`        | `number`                       | `No`           | Maximum number of tags allowed. Default: `undefined`.                                     |
| `onChange`       | `(tags: string[]) => void`     | `No`           | Callback function triggered when tags change. Receives the updated tags array.            |
