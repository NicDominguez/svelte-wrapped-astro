import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilter2Props {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter2["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter2["size"];
}
interface RuxIconFilter2Events {
}
interface RuxIconFilter2Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter2 extends SvelteComponent {
    $$prop_def: RuxIconFilter2Props;
    $$events_def: RuxIconFilter2Events;
    $$slot_def: RuxIconFilter2Slots;
    $on<K extends keyof RuxIconFilter2Events>(type: K, callback: (e: RuxIconFilter2Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilter2Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilter2Element | undefined;
}
export default RuxIconFilter2;
