import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Menu from '../components/menu/menu';

export default component$(() => {
  return (
    <>
      <main>
        
          <Header />
          <div style={{display: 'flex', gap: '5rem'}}>
            <Menu />
            <Slot />
          </div>
       
      </main>
      
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with Qwik, by Builder.io
        </a>
      </footer>
    </>
  );
});
