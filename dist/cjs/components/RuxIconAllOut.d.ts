import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAllOutProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAllOut["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAllOut["size"];
}
interface RuxIconAllOutEvents {
}
interface RuxIconAllOutSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAllOut extends SvelteComponent {
    $$prop_def: RuxIconAllOutProps;
    $$events_def: RuxIconAllOutEvents;
    $$slot_def: RuxIconAllOutSlots;
    $on<K extends keyof RuxIconAllOutEvents>(type: K, callback: (e: RuxIconAllOutEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAllOutProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAllOutElement | undefined;
}
export default RuxIconAllOut;
