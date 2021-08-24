import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHdProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHd["size"];
}
interface RuxIconHdEvents {
}
interface RuxIconHdSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHd extends SvelteComponent {
    $$prop_def: RuxIconHdProps;
    $$events_def: RuxIconHdEvents;
    $$slot_def: RuxIconHdSlots;
    $on<K extends keyof RuxIconHdEvents>(type: K, callback: (e: RuxIconHdEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHdProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHdElement | undefined;
}
export default RuxIconHd;
