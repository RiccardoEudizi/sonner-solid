

[sonner-solid](https://sonner-solid-website.vercel.app/) is an opinionated toast component for SolidJs ported from the react version [sonner](https://sonner.emilkowal.ski/).

## Usage

To start using the library, install it in your project:

```bash
npm install sonner-solid
```

Add `<Toaster />` to your app, it will be the place where all your toasts will be rendered.
After that you can use `toast()` from anywhere in your app.

```jsx
import { Toaster, toast } from 'sonner';

// ...

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>Give me a toast</button>
    </div>
  );
}
```

## Documentation

You can find out more about the API and implementation in the [Documentation](https://sonner-solid-website.vercel.app/getting-started).
