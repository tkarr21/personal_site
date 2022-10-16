import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="name glass-card">
        Tyler Karren | Software Engineer
      </div>
    </header>
  );
});
