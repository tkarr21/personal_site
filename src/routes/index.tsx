import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import OnePageNavigator from '~/components/onePageNavigator/onePageNavigator';

export default component$(() => {
  return (
    <OnePageNavigator/>
  );
});

export const head: DocumentHead = {
  title: 'Tyler Karren',
};
