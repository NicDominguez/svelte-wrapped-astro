import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAntennaReceiveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAntennaReceive["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAntennaReceive["size"];
}
interface RuxIconAntennaReceiveEvents {
}
interface RuxIconAntennaReceiveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAntennaReceive extends SvelteComponent {
    $$prop_def: RuxIconAntennaReceiveProps;
    $$events_def: RuxIconAntennaReceiveEvents;
    $$slot_def: RuxIconAntennaReceiveSlots;
    $on<K extends keyof RuxIconAntennaReceiveEvents>(type: K, callback: (e: RuxIconAntennaReceiveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAntennaReceiveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAntennaReceiveElement | undefined;
}
export default RuxIconAntennaReceive;
