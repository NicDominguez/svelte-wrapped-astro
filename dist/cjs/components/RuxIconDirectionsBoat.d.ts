import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDirectionsBoatProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDirectionsBoat["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDirectionsBoat["size"];
}
interface RuxIconDirectionsBoatEvents {
}
interface RuxIconDirectionsBoatSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDirectionsBoat extends SvelteComponent {
    $$prop_def: RuxIconDirectionsBoatProps;
    $$events_def: RuxIconDirectionsBoatEvents;
    $$slot_def: RuxIconDirectionsBoatSlots;
    $on<K extends keyof RuxIconDirectionsBoatEvents>(type: K, callback: (e: RuxIconDirectionsBoatEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDirectionsBoatProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDirectionsBoatElement | undefined;
}
export default RuxIconDirectionsBoat;
