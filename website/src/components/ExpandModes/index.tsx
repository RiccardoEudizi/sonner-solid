import { toast } from 'sonner-solid';
import { CodeBlock } from '../CodeBlock';
import { Setter } from 'solid-js';

export const ExpandModes = ({
  expand,
  setExpand,
}: {
  expand: boolean;
  setExpand: Setter<boolean>;
}) => {
  return (
    <div>
      <h2>Expand</h2>
      <p>
        You can change the amount of toasts visible through the <code>visibleToasts</code> prop.
      </p>
      <div class="buttons">
        <button
          data-active={expand}
          class="button"
          onClick={() => {
            toast('Event has been created', {
              description: 'Monday, January 3rd at 6:00pm',
            });
            setExpand(true);
          }}
        >
          Expand
        </button>
        <button
          data-active={!expand}
          class="button"
          onClick={() => {
            toast('Event has been created', {
              description: 'Monday, January 3rd at 6:00pm',
            });
            setExpand(false);
          }}
        >
          Default
        </button>
      </div>
      <CodeBlock>{`<Toaster expand={${expand}} />`}</CodeBlock>
    </div>
  );
};
