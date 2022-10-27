import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import styles from './projects-layout.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="wrapper">
      <div class="header">
        <div class="glass-card grow arrow-wrap">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="back-arrow">{/*<!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
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
