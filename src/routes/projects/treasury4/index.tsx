import { component$ } from '@builder.io/qwik';

export default component$(() => { 
  return (
    <>
      <div class="header-text glass-card"><a class="hover-animation" href="https://treasury4.com" target="_blank">Treausury4</a></div>
      <p class="description-text glass-card">
        Treasury4 is a financial corporation and treasury software solutions company.
        This web app serves as a landing page to introduce themselves and their
        product to the internet. Technologies used, Frontend: React/Next.js.
      </p>

      <div class="screen-shot-wrap">
        <img src="/treasury4.png" class="screen-shot-img"/>
      </div>
    </>
  );
});