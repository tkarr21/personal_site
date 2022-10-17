import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import styles from './projects.css?inline';


export default component$(() => { 
  useStylesScoped$(styles);

  const projects = [
    {
      cl: "glass-card grow",
      name: "poke-maker",
      title: "Pokemon maker",
      description: "A fun web app that lets you create your own Pokemon!"
    },
    {
      cl: "glass-card grow",
      name: "yedding",
      title: "Yedding",
      description: "A Platform where venue owners can rent out their space for wedding events"
    },
    {
      cl: "glass-card grow",
      name: "treasury4",
      title: "Treasury4",
      description: "Corporate finance and treasury solutions product Info site"
    },
    {
      cl: "glass-card grow",
      name: "tag-agents",
      title: "AI tag",
      description: "Reinforcement Learning Research, VAE-agents playing tag"
    }
  ]

  return (
    <div class="card-container">
      {projects.map((p) => {
        return (
          
          <div class="glass-card grow card">
            <Link href={`/projects/${p.name}`}>
              <h2 class="header-text">{p.title}</h2>
              <p class="description-text">{p.description}</p>
            </Link>
          </div>
          
        );
      })}
    </div>
  );
});
