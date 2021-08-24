import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlight["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlight["size"];
}
interface RuxIconFlightEvents {
}
interface RuxIconFlightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlight extends SvelteComponent {
    $$prop_def: RuxIconFlightProps;
    $$events_def: RuxIconFlightEvents;
    $$slot_def: RuxIconFlightSlots;
    $on<K extends keyof RuxIconFlightEvents>(type: K, callback: (e: RuxIconFlightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlightElement | undefined;
}
export default RuxIconFlight;
