import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalGasStationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalGasStation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalGasStation["size"];
}
interface RuxIconLocalGasStationEvents {
}
interface RuxIconLocalGasStationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalGasStation extends SvelteComponent {
    $$prop_def: RuxIconLocalGasStationProps;
    $$events_def: RuxIconLocalGasStationEvents;
    $$slot_def: RuxIconLocalGasStationSlots;
    $on<K extends keyof RuxIconLocalGasStationEvents>(type: K, callback: (e: RuxIconLocalGasStationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalGasStationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalGasStationElement | undefined;
}
export default RuxIconLocalGasStation;
