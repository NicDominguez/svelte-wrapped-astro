import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHotelProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHotel["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHotel["size"];
}
interface RuxIconHotelEvents {
}
interface RuxIconHotelSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHotel extends SvelteComponent {
    $$prop_def: RuxIconHotelProps;
    $$events_def: RuxIconHotelEvents;
    $$slot_def: RuxIconHotelSlots;
    $on<K extends keyof RuxIconHotelEvents>(type: K, callback: (e: RuxIconHotelEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHotelProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHotelElement | undefined;
}
export default RuxIconHotel;
