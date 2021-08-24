import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalHotelProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalHotel["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalHotel["size"];
}
interface RuxIconLocalHotelEvents {
}
interface RuxIconLocalHotelSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalHotel extends SvelteComponent {
    $$prop_def: RuxIconLocalHotelProps;
    $$events_def: RuxIconLocalHotelEvents;
    $$slot_def: RuxIconLocalHotelSlots;
    $on<K extends keyof RuxIconLocalHotelEvents>(type: K, callback: (e: RuxIconLocalHotelEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalHotelProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalHotelElement | undefined;
}
export default RuxIconLocalHotel;
