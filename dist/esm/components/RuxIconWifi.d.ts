import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWifiProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWifi["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWifi["size"];
}
interface RuxIconWifiEvents {
}
interface RuxIconWifiSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWifi extends SvelteComponent {
    $$prop_def: RuxIconWifiProps;
    $$events_def: RuxIconWifiEvents;
    $$slot_def: RuxIconWifiSlots;
    $on<K extends keyof RuxIconWifiEvents>(type: K, callback: (e: RuxIconWifiEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWifiProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWifiElement | undefined;
}
export default RuxIconWifi;
