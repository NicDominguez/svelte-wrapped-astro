import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirportShuttleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirportShuttle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirportShuttle["size"];
}
interface RuxIconAirportShuttleEvents {
}
interface RuxIconAirportShuttleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirportShuttle extends SvelteComponent {
    $$prop_def: RuxIconAirportShuttleProps;
    $$events_def: RuxIconAirportShuttleEvents;
    $$slot_def: RuxIconAirportShuttleSlots;
    $on<K extends keyof RuxIconAirportShuttleEvents>(type: K, callback: (e: RuxIconAirportShuttleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirportShuttleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirportShuttleElement | undefined;
}
export default RuxIconAirportShuttle;
