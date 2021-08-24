import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlightTakeoffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlightTakeoff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlightTakeoff["size"];
}
interface RuxIconFlightTakeoffEvents {
}
interface RuxIconFlightTakeoffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlightTakeoff extends SvelteComponent {
    $$prop_def: RuxIconFlightTakeoffProps;
    $$events_def: RuxIconFlightTakeoffEvents;
    $$slot_def: RuxIconFlightTakeoffSlots;
    $on<K extends keyof RuxIconFlightTakeoffEvents>(type: K, callback: (e: RuxIconFlightTakeoffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlightTakeoffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlightTakeoffElement | undefined;
}
export default RuxIconFlightTakeoff;
