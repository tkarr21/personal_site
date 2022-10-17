import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import styles from './projects-layout.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="wrapper">
      <div class="header">
        <div class="glass-card grow arrow-wrap">
          <a href="/#Slide2">
            <img src="/arrow-left-solid.svg" class="back-arrow" alt="back button" />
          </a>
        </div>
        <p class="header-text">Projects</p>
      </div>
      <div class="content">
        <Slot />
      </div>
      
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Projects | Tyler Karren',
};
