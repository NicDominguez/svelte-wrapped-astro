import { Components } from '@astrouxds/astro-web-components';
interface RuxIconImageSearchProps {
    /** The fill color for the icon */
    color?: Components.RuxIconImageSearch["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconImageSearch["size"];
}
interface RuxIconImageSearchEvents {
}
interface RuxIconImageSearchSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconImageSearch extends SvelteComponent {
    $$prop_def: RuxIconImageSearchProps;
    $$events_def: RuxIconImageSearchEvents;
    $$slot_def: RuxIconImageSearchSlots;
    $on<K extends keyof RuxIconImageSearchEvents>(type: K, callback: (e: RuxIconImageSearchEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconImageSearchProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconImageSearchElement | undefined;
}
export default RuxIconImageSearch;
