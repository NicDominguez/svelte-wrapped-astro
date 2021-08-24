import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSatelliteTransmitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSatelliteTransmit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSatelliteTransmit["size"];
}
interface RuxIconSatelliteTransmitEvents {
}
interface RuxIconSatelliteTransmitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSatelliteTransmit extends SvelteComponent {
    $$prop_def: RuxIconSatelliteTransmitProps;
    $$events_def: RuxIconSatelliteTransmitEvents;
    $$slot_def: RuxIconSatelliteTransmitSlots;
    $on<K extends keyof RuxIconSatelliteTransmitEvents>(type: K, callback: (e: RuxIconSatelliteTransmitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSatelliteTransmitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSatelliteTransmitElement | undefined;
}
export default RuxIconSatelliteTransmit;
