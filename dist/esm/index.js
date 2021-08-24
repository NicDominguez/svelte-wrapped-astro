import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import { defineCustomElements, } from '@astrouxds/astro-web-components/loader';
// Export all the auto-generated compiled Svelte components.
export * from './proxies';
if (typeof window !== 'undefined') {
    defineCustomElements(window);
}
//# sourceMappingURL=index.js.map