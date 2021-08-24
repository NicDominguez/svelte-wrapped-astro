import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSatelliteReceiveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSatelliteReceive["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSatelliteReceive["size"];
}
interface RuxIconSatelliteReceiveEvents {
}
interface RuxIconSatelliteReceiveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSatelliteReceive extends SvelteComponent {
    $$prop_def: RuxIconSatelliteReceiveProps;
    $$events_def: RuxIconSatelliteReceiveEvents;
    $$slot_def: RuxIconSatelliteReceiveSlots;
    $on<K extends keyof RuxIconSatelliteReceiveEvents>(type: K, callback: (e: RuxIconSatelliteReceiveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSatelliteReceiveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSatelliteReceiveElement | undefined;
}
export default RuxIconSatelliteReceive;
