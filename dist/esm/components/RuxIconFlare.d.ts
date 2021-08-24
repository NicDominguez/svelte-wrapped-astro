import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlareProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlare["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlare["size"];
}
interface RuxIconFlareEvents {
}
interface RuxIconFlareSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlare extends SvelteComponent {
    $$prop_def: RuxIconFlareProps;
    $$events_def: RuxIconFlareEvents;
    $$slot_def: RuxIconFlareSlots;
    $on<K extends keyof RuxIconFlareEvents>(type: K, callback: (e: RuxIconFlareEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlareProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlareElement | undefined;
}
export default RuxIconFlare;
