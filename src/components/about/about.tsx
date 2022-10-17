import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './about.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="about-container">
      <div class="glass-card about-text">
        I'm a 26 year old CS Masters Student at BYU. I have 
        worked on a variety of projects including a ML application
        at <a href="https://www.securitymetrics.com/">SecurityMetrics</a>,
        research in applying <a href="https://en.wikipedia.org/wiki/Variational_autoencoder">VAE model</a> in a
        reinforcement learning environment, worked with <a href="https://yedding.com/">Yedding</a> in
        developing a web app for crowd sourcing wedding venues, and lead development on <a href="">Treasury4</a>'s
        informational website. I am currently working in the
        Internet measurement and Anti-abuse lab (<a href="https://imaal.byu.edu/">IMAAL</a>) at BYU;
        investigating the value of transparent DNSSEC validation to end users. I 
        enjoy exploring all the cool things tech has to offer and through it all I always find
        myslef coming back to Web development.
      </div>
      <img class="profile-photo" src='/profile_photo.jpg'/>
    </div>
  );
});
