import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLibraryBooksProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLibraryBooks["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLibraryBooks["size"];
}
interface RuxIconLibraryBooksEvents {
}
interface RuxIconLibraryBooksSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLibraryBooks extends SvelteComponent {
    $$prop_def: RuxIconLibraryBooksProps;
    $$events_def: RuxIconLibraryBooksEvents;
    $$slot_def: RuxIconLibraryBooksSlots;
    $on<K extends keyof RuxIconLibraryBooksEvents>(type: K, callback: (e: RuxIconLibraryBooksEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLibraryBooksProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLibraryBooksElement | undefined;
}
export default RuxIconLibraryBooks;
