import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSelectAllProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSelectAll["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSelectAll["size"];
}
interface RuxIconSelectAllEvents {
}
interface RuxIconSelectAllSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSelectAll extends SvelteComponent {
    $$prop_def: RuxIconSelectAllProps;
    $$events_def: RuxIconSelectAllEvents;
    $$slot_def: RuxIconSelectAllSlots;
    $on<K extends keyof RuxIconSelectAllEvents>(type: K, callback: (e: RuxIconSelectAllEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSelectAllProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSelectAllElement | undefined;
}
export default RuxIconSelectAll;
