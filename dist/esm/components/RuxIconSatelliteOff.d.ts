import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSatelliteOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSatelliteOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSatelliteOff["size"];
}
interface RuxIconSatelliteOffEvents {
}
interface RuxIconSatelliteOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSatelliteOff extends SvelteComponent {
    $$prop_def: RuxIconSatelliteOffProps;
    $$events_def: RuxIconSatelliteOffEvents;
    $$slot_def: RuxIconSatelliteOffSlots;
    $on<K extends keyof RuxIconSatelliteOffEvents>(type: K, callback: (e: RuxIconSatelliteOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSatelliteOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSatelliteOffElement | undefined;
}
export default RuxIconSatelliteOff;
