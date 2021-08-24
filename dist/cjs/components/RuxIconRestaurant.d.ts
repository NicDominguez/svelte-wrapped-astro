import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRestaurantProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRestaurant["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRestaurant["size"];
}
interface RuxIconRestaurantEvents {
}
interface RuxIconRestaurantSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRestaurant extends SvelteComponent {
    $$prop_def: RuxIconRestaurantProps;
    $$events_def: RuxIconRestaurantEvents;
    $$slot_def: RuxIconRestaurantSlots;
    $on<K extends keyof RuxIconRestaurantEvents>(type: K, callback: (e: RuxIconRestaurantEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRestaurantProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRestaurantElement | undefined;
}
export default RuxIconRestaurant;
