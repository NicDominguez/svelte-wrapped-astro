import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAntennaProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAntenna["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAntenna["size"];
}
interface RuxIconAntennaEvents {
}
interface RuxIconAntennaSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAntenna extends SvelteComponent {
    $$prop_def: RuxIconAntennaProps;
    $$events_def: RuxIconAntennaEvents;
    $$slot_def: RuxIconAntennaSlots;
    $on<K extends keyof RuxIconAntennaEvents>(type: K, callback: (e: RuxIconAntennaEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAntennaProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAntennaElement | undefined;
}
export default RuxIconAntenna;
