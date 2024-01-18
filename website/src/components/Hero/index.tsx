import { toast } from 'sonner-solid';

import styles from './hero.module.css';
import { A } from '@solidjs/router';


export const Hero = () => {
  return (
    <div class={styles.wrapper}>
      <div class={styles.toastWrapper}>
        <div class={styles.toast} />
        <div class={styles.toast} />
        <div class={styles.toast} />
      </div>
      <h1 class={styles.heading}>Sonner</h1>
      <p style={{ "margin-top": 0, "font-size": '18' }}>An opinionated toast component for React.</p>
      <div class={styles.buttons}>
        <button
          data-primary=""
          onClick={() => {
            toast('Sonner', {
              description: 'An opinionated toast component for React.'
            });
          }}
          class={styles.button}
        >
          Render a toast
        </button>
        <a class={styles.button} href="https://github.com/emilkowalski/sonner" target="_blank">
          GitHub
        </a>
      </div>
      <A href="/getting-started" class={styles.link}>
        Documentation
      </A>
    </div>
  );
};
