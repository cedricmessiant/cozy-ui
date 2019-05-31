This component is used to display a customizable file selector.

### Default

```jsx
<FileSelector
  renderContent={() => <span>Click me to choose file</span>}
  processSelected={console.log}
/>
```

You render what you want:

```jsx
<FileSelector
  renderContent={() => <Icon icon="file" />}
  processSelected={console.log}
/>
```

### Multiple files

```jsx
<FileSelector
  renderContent={() => <span>Click me to choose files</span>}
  multiple
  processSelected={console.log}
/>
```

### Only accept images

```jsx
<FileSelector
  accept="image/*"
  renderContent={() => <span>Click me to choose an image</span>}
  multiple
  processSelected={console.log}
/>
```

### Simple input file

If you want a classic input file, just set `hidden` prop to `false`:

```jsx
<FileSelector hidden={false} processSelected={console.log} />
```
