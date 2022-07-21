import { component$, Host } from '@builder.io/qwik';
import { EndpointHandler } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <Host>
      <h1>Does fetch work?</h1>

      <p>If the page loaded, then yes!</p>
    </Host>
  );
});

export const onGet: EndpointHandler = async () => {
  const result = await fetch('https://google.com');
  console.log(result.status)
  return null;
}