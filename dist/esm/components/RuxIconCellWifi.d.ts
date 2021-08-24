import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCellWifiProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCellWifi["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCellWifi["size"];
}
interface RuxIconCellWifiEvents {
}
interface RuxIconCellWifiSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCellWifi extends SvelteComponent {
    $$prop_def: RuxIconCellWifiProps;
    $$events_def: RuxIconCellWifiEvents;
    $$slot_def: RuxIconCellWifiSlots;
    $on<K extends keyof RuxIconCellWifiEvents>(type: K, callback: (e: RuxIconCellWifiEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCellWifiProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCellWifiElement | undefined;
}
export default RuxIconCellWifi;
