import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalCafeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalCafe["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalCafe["size"];
}
interface RuxIconLocalCafeEvents {
}
interface RuxIconLocalCafeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalCafe extends SvelteComponent {
    $$prop_def: RuxIconLocalCafeProps;
    $$events_def: RuxIconLocalCafeEvents;
    $$slot_def: RuxIconLocalCafeSlots;
    $on<K extends keyof RuxIconLocalCafeEvents>(type: K, callback: (e: RuxIconLocalCafeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalCafeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalCafeElement | undefined;
}
export default RuxIconLocalCafe;
