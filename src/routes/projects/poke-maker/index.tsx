import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from "./poke-maker.css?inline";

export default component$(() => { 
  useStylesScoped$(styles);
  return (
    <>
      <div class="header-text glass-card"><a class="hover-animation" href="https://poke-web-tkarr21.vercel.app" target="_blank">Poke-Maker</a></div>
      <p class="description-text glass-card">
        Poke maker is a full stack app that takes user input, applies
        statistics (KNN) and hand crafted heuristics to procedurally generate
        novel pokemon. The pokemon pool which it generates from are
        generations 1 throught 3. Technologies used, Frontend: React/Next.js and SCSS.
        Backend: Python, Flask, GCP, and Pandas.
      </p>

      <div class="screen-shot-wrap">
        <img src="/poke-maker.png" class="screen-shot-img"/>
      </div>
    </>
  );
});