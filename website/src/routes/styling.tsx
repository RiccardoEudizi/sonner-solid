
export default function Styling(){
  return <main class='p-4 pt-10'>
    <h1 class='font-bold text-4xl '>Styling</h1>
    <ol>
      <li class="my-6">
      
    <h2 class='font-medium text-xl '>Styling can be done globally via `toastOptions`, this way every toast will have the same styling.</h2>

    <div class="my-6">
    <pre class='rounded-lg'>
    <div class='p-4'>{`<Toaster
  toastOptions={{
    style: {
      background: 'red',
    },
    className: 'class',
  }}
/>`}</div>
  </pre>
    </div>
      </li>
      <li class="my-6">
      
    <h2 class='font-medium text-xl '>You can also use the same props when calling `toast` to style a specific toast.</h2>

    <div class="my-6">
    <pre class='rounded-lg'>
    <div class='p-4'>{`<Toaster
  toastOptions={{
    style: {
      background: 'red',
    },
    className: 'class',
  }}
/>`}</div>
  </pre>
    </div>
      </li>
    </ol>
    <h1 class='font-bold text-4xl '>Tailwind CSS</h1>

    <ol>
      <li class="my-6"><h2 class='font-medium text-xl '>The preferred way to style the toasts with tailwind is by using the `unstyled` prop. That will give you an unstyled toast which you can then style with tailwind.</h2>
      
      
      <div class="my-6">
    <pre class='rounded-lg'>
    <div class='p-4'>{`<Toaster
  toastOptions={{
    unstyled: true,
    classNames: {
      toast: 'bg-blue-400',
      title: 'text-red-400',
      description: 'text-red-400',
      actionButton: 'bg-zinc-400',
      cancelButton: 'bg-orange-400',
      closeButton: 'bg-lime-400',
    },
  }}
/>`}</div>
  </pre>
    </div>
      </li>
      <li class="my-6">
        <h2 class='font-medium text-xl '>You can do the same when calling <strong>toast()</strong>.</h2>
        <div class="my-6">
    <pre class='rounded-lg'>
    <div class='p-4'>{`toast('Hello World', {
  unstyled: true,
  classNames: {
    toast: 'bg-blue-400',
    title: 'text-red-400 text-2xl',
    description: 'text-red-400',
    actionButton: 'bg-zinc-400',
    cancelButton: 'bg-orange-400',
    closeButton: 'bg-lime-400',
  },
});`}</div>
  </pre>
    </div>
      </li>
      <li class="my-6">
        <h2 class='font-medium text-xl '>Styling per toast type is also possible.</h2>
        <div class="my-6">
    <pre class='rounded-lg'>
    <div class='p-4'>{`<Toaster
  toastOptions={{
    unstyled: true,
    classNames: {
      error: 'bg-red-400',
      success: 'text-green-400',
      warning: 'text-yellow-400',
      info: 'bg-blue-400',
    },
  }}
/>`}</div>
  </pre>
    </div>
      </li>
    </ol>
  </main>
}


