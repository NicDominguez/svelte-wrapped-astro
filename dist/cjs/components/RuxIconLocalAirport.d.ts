import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalAirportProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalAirport["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalAirport["size"];
}
interface RuxIconLocalAirportEvents {
}
interface RuxIconLocalAirportSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalAirport extends SvelteComponent {
    $$prop_def: RuxIconLocalAirportProps;
    $$events_def: RuxIconLocalAirportEvents;
    $$slot_def: RuxIconLocalAirportSlots;
    $on<K extends keyof RuxIconLocalAirportEvents>(type: K, callback: (e: RuxIconLocalAirportEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalAirportProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalAirportElement | undefined;
}
export default RuxIconLocalAirport;
