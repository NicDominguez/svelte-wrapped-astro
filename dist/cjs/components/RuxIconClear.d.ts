import { Components } from '@astrouxds/astro-web-components';
interface RuxIconClearProps {
    /** The fill color for the icon */
    color?: Components.RuxIconClear["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconClear["size"];
}
interface RuxIconClearEvents {
}
interface RuxIconClearSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconClear extends SvelteComponent {
    $$prop_def: RuxIconClearProps;
    $$events_def: RuxIconClearEvents;
    $$slot_def: RuxIconClearSlots;
    $on<K extends keyof RuxIconClearEvents>(type: K, callback: (e: RuxIconClearEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconClearProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconClearElement | undefined;
}
export default RuxIconClear;
