import { component$, useStylesScoped$ } from '@builder.io/qwik';
import About from '../about/about';
import Projects from '../projects/projects';
import Socials from '../socials/socials';
import Hobbies from '../hobbies/hobbies';

import styles from './onePageNavigator.css?inline';


export default component$(() => { 
  useStylesScoped$(styles);
  const slides = [
    {
      id: "Slide1",
      titulo: "About",
      component: <About/>
    },
    {
      id: 'Slide2',
      titulo: 'Projects',
      component: <Projects/>
    },
    {
      id: 'Slide3',
      titulo: 'Socials',
      component: <Socials/>
    },
    {
      id: 'Slide4',
      titulo: 'Hobbies',
      component: <Hobbies/>
    }
  ]

  return (
    <>
    <div class="contenedor">
      <form>
        <input type="radio" id="Slide1" name="slider" title="About" autoFocus={true} checked={true}></input>
        {
          slides.map(s => {
          if (s.id == "Slide1") return;
          return (
            <input type="radio" id={s.id} name="slider" title={s.titulo}></input>
          );
          })
        }
        <div class="labels">

          {slides.map((s) => {
            return <label class="Slide" for={s.id} id={s.id}><div class="content">{s.component}</div></label>
          })}
          
        </div>
      </form>
      </div>
      <div class="mobile">
        {
          slides.map(s => {
            if (s.id == "Slide1") return s.component;
            return (
              <>
                <div class="mobile-header">{s.titulo}</div>
                {s.component}
              </>
            )
          })
        }
      </div>
      
    </>
  );
});