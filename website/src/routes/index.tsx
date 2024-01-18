
import { Toaster } from 'sonner-solid';
import { Installation } from '../components/Installation';
import { Hero } from '../components/Hero';
import { Types } from '../components/Types/Types';
import { ExpandModes } from '../components/ExpandModes';
import { Footer } from '../components/Footer';
import { Position } from '../components/Position';
import { Usage } from '../components/Usage';
import { Other } from '../components/Other/Other';
import Head from '../components/Head';
import { How } from '../components/How/How';
import { createSignal } from 'solid-js';

export default function Home() {
  const [expand, setExpand] = createSignal(false);
  const [position, setPosition] = createSignal<Position>('bottom-right');
  const [richColors, setRichColors] = createSignal(false);
  const [closeButton, setCloseButton] = createSignal(false);

  return (
    <div class="wrapper light">
      <Head />
      <Toaster theme="light" richColors={richColors()} closeButton={closeButton()} expand={expand()} position={position()} />
      <main class="container">
        <Hero />
        <div class="content">
          <Installation />
          <Usage />
          <Types />
          <Position position={position()} setPosition={setPosition} />
          <ExpandModes expand={expand()} setExpand={setExpand} />
          <Other setCloseButton={setCloseButton} setRichColors={setRichColors} />
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
