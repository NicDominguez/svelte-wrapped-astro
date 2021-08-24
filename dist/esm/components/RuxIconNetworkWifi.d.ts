import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNetworkWifiProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNetworkWifi["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNetworkWifi["size"];
}
interface RuxIconNetworkWifiEvents {
}
interface RuxIconNetworkWifiSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNetworkWifi extends SvelteComponent {
    $$prop_def: RuxIconNetworkWifiProps;
    $$events_def: RuxIconNetworkWifiEvents;
    $$slot_def: RuxIconNetworkWifiSlots;
    $on<K extends keyof RuxIconNetworkWifiEvents>(type: K, callback: (e: RuxIconNetworkWifiEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNetworkWifiProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNetworkWifiElement | undefined;
}
export default RuxIconNetworkWifi;
