import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCompareProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCompare["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCompare["size"];
}
interface RuxIconCompareEvents {
}
interface RuxIconCompareSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCompare extends SvelteComponent {
    $$prop_def: RuxIconCompareProps;
    $$events_def: RuxIconCompareEvents;
    $$slot_def: RuxIconCompareSlots;
    $on<K extends keyof RuxIconCompareEvents>(type: K, callback: (e: RuxIconCompareEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCompareProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCompareElement | undefined;
}
export default RuxIconCompare;
