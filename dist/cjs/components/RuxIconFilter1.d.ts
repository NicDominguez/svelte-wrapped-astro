import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilter1Props {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter1["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter1["size"];
}
interface RuxIconFilter1Events {
}
interface RuxIconFilter1Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter1 extends SvelteComponent {
    $$prop_def: RuxIconFilter1Props;
    $$events_def: RuxIconFilter1Events;
    $$slot_def: RuxIconFilter1Slots;
    $on<K extends keyof RuxIconFilter1Events>(type: K, callback: (e: RuxIconFilter1Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilter1Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilter1Element | undefined;
}
export default RuxIconFilter1;
