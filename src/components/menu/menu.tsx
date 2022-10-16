import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { useLocation, Link } from '@builder.io/qwik-city';
import styles from './menu.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const { pathname } = useLocation();



  return (
    <div class="container">
      <Link
        class={`menu-item glass-card grow ${pathname == '/' ? "active" : ""}`}
        href="/"
      >
        About
      </Link>
      <Link class={`menu-item glass-card grow ${pathname == '/projects' ? "active": ""}`} href="/projects">Projects</Link>
      <Link class={`menu-item glass-card grow ${pathname == '/socials' ? "active": ""}`} href="/socials">Socials</Link>
      <Link class={`menu-item glass-card grow ${pathname == '/hobbies' ? "active": ""}`} href="/hobbies">Hobbies</Link>
    </div>
  );
});