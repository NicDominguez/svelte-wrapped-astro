import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilter6Props {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter6["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter6["size"];
}
interface RuxIconFilter6Events {
}
interface RuxIconFilter6Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter6 extends SvelteComponent {
    $$prop_def: RuxIconFilter6Props;
    $$events_def: RuxIconFilter6Events;
    $$slot_def: RuxIconFilter6Slots;
    $on<K extends keyof RuxIconFilter6Events>(type: K, callback: (e: RuxIconFilter6Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilter6Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilter6Element | undefined;
}
export default RuxIconFilter6;
