import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilter9Props {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter9["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter9["size"];
}
interface RuxIconFilter9Events {
}
interface RuxIconFilter9Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter9 extends SvelteComponent {
    $$prop_def: RuxIconFilter9Props;
    $$events_def: RuxIconFilter9Events;
    $$slot_def: RuxIconFilter9Slots;
    $on<K extends keyof RuxIconFilter9Events>(type: K, callback: (e: RuxIconFilter9Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilter9Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilter9Element | undefined;
}
export default RuxIconFilter9;
