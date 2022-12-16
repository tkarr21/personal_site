import { component$ } from '@builder.io/qwik';



export default component$(() => { 

  return (
    <>
      <div class="header-text glass-card"><a class="hover-animation" href="https://www.deep-data-mining.com/2021/09/an-antique-neural-network-for-image.html" target="_blank">Post - deep-data-mining.com</a></div>
      <p class="description-text glass-card">
        This neural net is older than me! Thanks for sharing. 
        It is interesting to take a step back and concretely see 
        how far things have come in a variety of aspects for data 
        mining/machine learning as you noted. For comparison yesterday 
        I fine-tuned an image-to-text model with 182 million trainable 
        parameters with a data set of 12,000 instances and a 40GB GPU. 
        <br />
        <br />
        The current improvements we’ve seen are great but it also makes
        me wonder if the next fruitful innovations will come from making
        these models less resource intensive. Will have to do this reflection
        again in 27 years!
      </p>
    </>
  );
});