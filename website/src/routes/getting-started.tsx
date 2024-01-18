
import { Match, Switch, createSignal } from 'solid-js';
import { toast } from 'sonner-solid';
export default function GettingStarted() {
  const [packageManager,setPackageManager] = createSignal("pnpm")
 return <main class='p-4 pt-10'><h1 class='font-bold text-4xl '>Getting Started</h1>
 <p class='text-lg my-6'>Sonner is an opinionated toast component for Solid Js</p>
 
 <ol>
  <li class="my-6">
  
  <h2 class='font-medium text-xl '>Install</h2>
  <div class='mt-4 rounded-lg border border-gray-300 overflow-hidden '>
    <div class=' flex gap-x-3 bg-stone-600 text-white p-2'><button class={`rounded-md ${packageManager() == "pnpm" ?'bg-stone-500' : 'bg-transparent'} p-1`} onclick={() => setPackageManager("pnpm")}>pnpm</button><button class={`rounded-md ${packageManager() == "npm" ?'bg-stone-500' : 'bg-transparent'} p-1`}  onclick={() => setPackageManager("npm")}>npm</button><button class={`rounded-md ${packageManager() == "yarn" ?'bg-stone-500' : 'bg-transparent'} p-1`}   onclick={() => setPackageManager("yarn")}>yarn</button><button class={`rounded-md ${packageManager() == "bun" ?'bg-stone-500' : 'bg-transparent'} p-1`}  onclick={() => setPackageManager("bun")}>bun</button></div>
   <div class="p-4">
   <Switch >
    
    <Match when={packageManager() === "pnpm"}>
     <div><pre class='border-none'><div>pnpm add sonner-solid</div></pre></div></Match>
    <Match when={packageManager() === "npm"}>
     <div><pre class='border-none'><div>npm i sonner-solid</div></pre></div></Match>
    <Match when={packageManager() === "yarn"}>
     <div><pre class='border-none'><div>yarn add sonner-solid</div></pre></div></Match>
    <Match when={packageManager() === "bun"}>
     <div><pre class='border-none'><div>bun add sonner-solid</div></pre></div></Match>
 </Switch>
   </div>
  </div>
  </li>
  <li class="my-6">
    <h2 class='font-medium text-xl '>
    Add Toaster to your app</h2><p class='text-lg my-6'>It can be placed anywhere</p>
    
    <pre class='rounded-lg'>
    <div class='p-4'>{`import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}`}</div>
  </pre></li>
  <li class='my-6'>
    <h2 class='font-medium text-xl '>Render a toast</h2>
    <div class='my-6'><pre class='rounded-lg'>
      <div class='p-4'>{`import { toast } from 'sonner';

function MyToast() {
 return (
  <button onClick={() => toast('This is a sonner toast')}>
     Render my toast
  </button>
       );
}`}
</div></pre></div></li></ol>
 <div>
  
 </div>
 </main>
}







