import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlightLandProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlightLand["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlightLand["size"];
}
interface RuxIconFlightLandEvents {
}
interface RuxIconFlightLandSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlightLand extends SvelteComponent {
    $$prop_def: RuxIconFlightLandProps;
    $$events_def: RuxIconFlightLandEvents;
    $$slot_def: RuxIconFlightLandSlots;
    $on<K extends keyof RuxIconFlightLandEvents>(type: K, callback: (e: RuxIconFlightLandEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlightLandProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlightLandElement | undefined;
}
export default RuxIconFlightLand;
