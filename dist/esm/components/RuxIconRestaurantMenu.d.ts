import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRestaurantMenuProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRestaurantMenu["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRestaurantMenu["size"];
}
interface RuxIconRestaurantMenuEvents {
}
interface RuxIconRestaurantMenuSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRestaurantMenu extends SvelteComponent {
    $$prop_def: RuxIconRestaurantMenuProps;
    $$events_def: RuxIconRestaurantMenuEvents;
    $$slot_def: RuxIconRestaurantMenuSlots;
    $on<K extends keyof RuxIconRestaurantMenuEvents>(type: K, callback: (e: RuxIconRestaurantMenuEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRestaurantMenuProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRestaurantMenuElement | undefined;
}
export default RuxIconRestaurantMenu;
