import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilter5Props {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter5["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter5["size"];
}
interface RuxIconFilter5Events {
}
interface RuxIconFilter5Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter5 extends SvelteComponent {
    $$prop_def: RuxIconFilter5Props;
    $$events_def: RuxIconFilter5Events;
    $$slot_def: RuxIconFilter5Slots;
    $on<K extends keyof RuxIconFilter5Events>(type: K, callback: (e: RuxIconFilter5Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilter5Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilter5Element | undefined;
}
export default RuxIconFilter5;
