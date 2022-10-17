import { component$ } from '@builder.io/qwik';

export default component$(() => { 
  return (
    <>
      <div class="header-text glass-card">VAE tag Agents</div>
      <p class="description-text glass-card">
        For a Research Project I investigated and implemented a
        Variational Auto-Encoder (VAE),a deep learning architecture, 
        in a Reinforcement learning Environment. The Green dot is
        trained to stay within the box and the two red dots are
        trained to push the green dot out of the box. Technologies 
        used Pytorch, google Colab Pro, AI gym.
      </p>

      <div class="screen-shot-wrap">
        <video autoPlay loop width="450" height="450" style={{ position: "relative"}}>
          <source src="/tag.mov"/>
        </video>
      </div>
    </>
  );
});