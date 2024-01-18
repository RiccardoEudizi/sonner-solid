
import copy from 'copy-to-clipboard';
import {Motion} from 'solid-Motionone'

import styles from './installation.module.css';
import { createSignal } from 'solid-js';

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
};

export const Installation = () => {
  const [copying, setCopying] = createSignal(0);

  const onCopy = () => {
    copy('npm install sonner');
    setCopying((c) => c + 1);
    setTimeout(() => {
      setCopying((c) => c - 1);
    }, 2000);
  };

  return (
    <div>
      <h2>Installation</h2>
      <code class={styles.code} onClick={onCopy}>
        npm install sonner{' '}
        <button aria-label="Copy code" class={styles.copy}>
          <Motion transition={{ duration: 0.15 }}>
            <Motion initial={false} >
              {copying() ? (
                <Motion.div animate="visible" exit="hidden" initial="hidden"  variants={variants}>
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    shape-rendering="geometricPrecision"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </Motion.div>
              ) : (
                <Motion.div animate="visible" exit="hidden" initial="hidden"  variants={variants}>
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    shape-rendering="geometricPrecision"
                  >
                    <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                  </svg>
                </Motion.div>
              )}
            </Motion>
          </Motion>
        </button>
      </code>
    </div>
  );
};
