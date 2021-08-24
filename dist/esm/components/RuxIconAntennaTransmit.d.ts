import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAntennaTransmitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAntennaTransmit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAntennaTransmit["size"];
}
interface RuxIconAntennaTransmitEvents {
}
interface RuxIconAntennaTransmitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAntennaTransmit extends SvelteComponent {
    $$prop_def: RuxIconAntennaTransmitProps;
    $$events_def: RuxIconAntennaTransmitEvents;
    $$slot_def: RuxIconAntennaTransmitSlots;
    $on<K extends keyof RuxIconAntennaTransmitEvents>(type: K, callback: (e: RuxIconAntennaTransmitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAntennaTransmitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAntennaTransmitElement | undefined;
}
export default RuxIconAntennaTransmit;
