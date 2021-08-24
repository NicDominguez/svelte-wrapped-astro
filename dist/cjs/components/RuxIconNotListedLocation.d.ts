import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNotListedLocationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNotListedLocation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNotListedLocation["size"];
}
interface RuxIconNotListedLocationEvents {
}
interface RuxIconNotListedLocationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNotListedLocation extends SvelteComponent {
    $$prop_def: RuxIconNotListedLocationProps;
    $$events_def: RuxIconNotListedLocationEvents;
    $$slot_def: RuxIconNotListedLocationSlots;
    $on<K extends keyof RuxIconNotListedLocationEvents>(type: K, callback: (e: RuxIconNotListedLocationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNotListedLocationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNotListedLocationElement | undefined;
}
export default RuxIconNotListedLocation;
