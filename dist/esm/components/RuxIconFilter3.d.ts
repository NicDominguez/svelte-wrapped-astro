import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilter3Props {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter3["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter3["size"];
}
interface RuxIconFilter3Events {
}
interface RuxIconFilter3Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter3 extends SvelteComponent {
    $$prop_def: RuxIconFilter3Props;
    $$events_def: RuxIconFilter3Events;
    $$slot_def: RuxIconFilter3Slots;
    $on<K extends keyof RuxIconFilter3Events>(type: K, callback: (e: RuxIconFilter3Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilter3Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilter3Element | undefined;
}
export default RuxIconFilter3;
