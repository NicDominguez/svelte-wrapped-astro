import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPermScanWifiProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPermScanWifi["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPermScanWifi["size"];
}
interface RuxIconPermScanWifiEvents {
}
interface RuxIconPermScanWifiSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPermScanWifi extends SvelteComponent {
    $$prop_def: RuxIconPermScanWifiProps;
    $$events_def: RuxIconPermScanWifiEvents;
    $$slot_def: RuxIconPermScanWifiSlots;
    $on<K extends keyof RuxIconPermScanWifiEvents>(type: K, callback: (e: RuxIconPermScanWifiEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPermScanWifiProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPermScanWifiElement | undefined;
}
export default RuxIconPermScanWifi;
