import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import Header from '../components/header/header';

import styles from './routes-layout.css?inline';


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="wrapper">
      <Header/>
      <Slot/>
      <div style={{display: "flex", justifyContent: "center"}}>
        <footer>
          <a href="https://www.builder.io/" target="_blank">
            Made with Qwik, by Builder.io
          </a>
          <p>Navigator modified from <a href="https://codepen.io/hrtzt/details/pgXMYb/">codepen</a> by <a href="www.albertohartzet.com">www.albertohartzet.com</a></p>
          </footer>
      </div>
    </div>
  );
});
