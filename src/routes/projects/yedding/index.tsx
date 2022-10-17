import { component$ } from '@builder.io/qwik';

export default component$(() => { 
  return (
    <>
      <div class="header-text glass-card"><a class="hover-animation" href="https://yedding.com" target="_blank">Yedding</a></div>
      <p class="description-text glass-card">
        Yedding is a market platform to crowd source venue locations
        for wedding events. It facilitates connecting Venue owners with 
        couples looking to have a unique place for their special day. The
        web app contains features such as venue listing, searching,
        filtering, and schedule booking. Technologies used are Frontend:
        React, Styled Compenents, and Google maps API. 
        Backend: Firebase hosting, storage, firestore, auth, and Stripe.
      </p>

      <div class="screen-shot-wrap">
        <img src="/yedding.png" class="screen-shot-img"/>
      </div>
    </>
  );
});