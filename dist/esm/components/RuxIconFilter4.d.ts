import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilter4Props {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter4["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter4["size"];
}
interface RuxIconFilter4Events {
}
interface RuxIconFilter4Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter4 extends SvelteComponent {
    $$prop_def: RuxIconFilter4Props;
    $$events_def: RuxIconFilter4Events;
    $$slot_def: RuxIconFilter4Slots;
    $on<K extends keyof RuxIconFilter4Events>(type: K, callback: (e: RuxIconFilter4Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilter4Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilter4Element | undefined;
}
export default RuxIconFilter4;
