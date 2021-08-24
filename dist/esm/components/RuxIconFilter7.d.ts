import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilter7Props {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter7["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter7["size"];
}
interface RuxIconFilter7Events {
}
interface RuxIconFilter7Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter7 extends SvelteComponent {
    $$prop_def: RuxIconFilter7Props;
    $$events_def: RuxIconFilter7Events;
    $$slot_def: RuxIconFilter7Slots;
    $on<K extends keyof RuxIconFilter7Events>(type: K, callback: (e: RuxIconFilter7Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilter7Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilter7Element | undefined;
}
export default RuxIconFilter7;
