


import copy from 'copy-to-clipboard';
import {Motion} from "solid-Motionone"
import { CodeInput } from '@srsholmes/solid-code-input';
import styles from './code-block.module.css';
import { createSignal } from 'solid-js';
import Prism from "prismjs"
const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
};

const theme = {
  plain: {
    color: 'var(--gray12)',
    fontSize: 12,
    fontFamily: 'var(--font-mono)',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'var(--gray9)',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector', 'string'],
      style: {
        color: 'var(--gray11)',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: 'var(--gray9)',
      },
    },
    {
      types: ['class-name', 'function', 'tag'],
      style: {
        color: 'var(--gray12)',
      },
    },
  ],
};

export const CodeBlock = (props: { children: string; initialHeight?: number }) => {
  
  const [copying, setCopying] = createSignal(0);

  const onCopy = () => {
    copy(props.children);
    setCopying((c) => c + 1);
    setTimeout(() => {
      setCopying((c) => c - 1);
    }, 2000);
  };

  return (
    <div class={styles.outerWrapper}>
      <button class={styles.copyButton} onClick={onCopy} aria-label="Copy code">
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
      {/* @ts-ignore */}
     
          <Motion.pre
            class={styles.wrapper}
            style={{"opacity":0}}
            animate={{ opacity: 1 }}
            transition={{ easing: 'ease-out', duration: 1.6 }}
          >
            <CodeInput
  autoHeight={true}
  resize="none"
  placeholder="Input your code here..."
  prismJS={Prism}
  onChange={() => {}}
  value={props.children}
  language={'typescript'}
  
/>
            
          </Motion.pre>
        
   
    </div>
  );
};
