import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalParkingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalParking["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalParking["size"];
}
interface RuxIconLocalParkingEvents {
}
interface RuxIconLocalParkingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalParking extends SvelteComponent {
    $$prop_def: RuxIconLocalParkingProps;
    $$events_def: RuxIconLocalParkingEvents;
    $$slot_def: RuxIconLocalParkingSlots;
    $on<K extends keyof RuxIconLocalParkingEvents>(type: K, callback: (e: RuxIconLocalParkingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalParkingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalParkingElement | undefined;
}
export default RuxIconLocalParking;
