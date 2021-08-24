import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilter9PlusProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter9Plus["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter9Plus["size"];
}
interface RuxIconFilter9PlusEvents {
}
interface RuxIconFilter9PlusSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter9Plus extends SvelteComponent {
    $$prop_def: RuxIconFilter9PlusProps;
    $$events_def: RuxIconFilter9PlusEvents;
    $$slot_def: RuxIconFilter9PlusSlots;
    $on<K extends keyof RuxIconFilter9PlusEvents>(type: K, callback: (e: RuxIconFilter9PlusEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilter9PlusProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilter9PlusElement | undefined;
}
export default RuxIconFilter9Plus;
