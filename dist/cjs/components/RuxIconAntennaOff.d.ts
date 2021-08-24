import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAntennaOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAntennaOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAntennaOff["size"];
}
interface RuxIconAntennaOffEvents {
}
interface RuxIconAntennaOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAntennaOff extends SvelteComponent {
    $$prop_def: RuxIconAntennaOffProps;
    $$events_def: RuxIconAntennaOffEvents;
    $$slot_def: RuxIconAntennaOffSlots;
    $on<K extends keyof RuxIconAntennaOffEvents>(type: K, callback: (e: RuxIconAntennaOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAntennaOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAntennaOffElement | undefined;
}
export default RuxIconAntennaOff;
