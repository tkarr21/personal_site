import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './socials.css?inline';


export default component$(() => { 
  useStylesScoped$(styles);

  const socials = [
    {
      cl: "logo-wrap glass-card grow",
      icl: "logo github",
      re: "https://github.com/tkarr21",
      sr: "/github.svg",
      alt: "github"
    },
    {
      cl: "logo-wrap glass-card grow",
      icl: "logo instagram",
      re: "https://www.instagram.com/tylerkarren/",
      sr: "/instagram.svg",
      alt: "instagram"
    },
    {
      cl: "logo-wrap glass-card grow",
      icl: "logo linkedin",
      re: "https://www.linkedin.com/in/tyler-karren-587085a4",
      sr: "/linkedin-in.svg",
      alt: "linkedin"
    },
    {
      cl: "logo-wrap glass-card grow",
      icl: "logo strava",
      re: "https://www.strava.com/athletes/82918344",
      sr: "/strava.svg",
      alt: "strava"
    },
    {
      cl: "logo-wrap glass-card grow",
      icl: "logo spotify",
      re: "https://open.spotify.com/user/tkreator",
      sr: "/spotify.svg",
      alt: "spotify"
    }, 
    {
      cl: "logo-wrap glass-card grow",
      icl: "logo email",
      re: "mailto:tkarren22@gmail.com",
      sr: "/paper-plane-solid.svg",
      alt: "email"
    },
    {
      cl: "logo-wrap glass-card grow",
      icl: "logo soundcloud",
      re: "https://soundcloud.com/tkarr",
      sr: "/soundcloud.svg",
      alt: "soundcloud"
    }
  ]

  return (
    <div class="logos">
      {socials.map((s) => {
        return (
          <div class={s.cl}>
            <a href={s.re} target="_blank">
              <img class={s.icl} src={s.sr} alt={s.alt} />
            </a>
          </div>
        );
      })}
    </div>
  );
});
