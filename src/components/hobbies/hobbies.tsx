import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './hobbies.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="container">
      <div class="sub-container">
       
        <img class="wasatch-photo" src="/wasatch_crest.jpg" alt="wasatch crest" loading="lazy"/>
         <div class="glass-card text">
          When I'm not working on a project or reading Research, you'll find me skiing or mountain
          biking! Also I'm always game for some races on Mariokart.
        </div>
      </div>
        
      
      
      <div class="image-container">
        <img class="tips-photo" src="/ski_tips.jpeg" alt="standing on ski tips" loading="lazy"/>
        <img class="jump-photo" src="/ski_jump.jpg" alt="ski jump" loading="lazy"/>
      </div>
    </div>
  );
});