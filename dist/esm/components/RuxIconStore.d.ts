import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStoreProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStore["size"];
}
interface RuxIconStoreEvents {
}
interface RuxIconStoreSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStore extends SvelteComponent {
    $$prop_def: RuxIconStoreProps;
    $$events_def: RuxIconStoreEvents;
    $$slot_def: RuxIconStoreSlots;
    $on<K extends keyof RuxIconStoreEvents>(type: K, callback: (e: RuxIconStoreEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStoreProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStoreElement | undefined;
}
export default RuxIconStore;
