import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWifiOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWifiOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWifiOff["size"];
}
interface RuxIconWifiOffEvents {
}
interface RuxIconWifiOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWifiOff extends SvelteComponent {
    $$prop_def: RuxIconWifiOffProps;
    $$events_def: RuxIconWifiOffEvents;
    $$slot_def: RuxIconWifiOffSlots;
    $on<K extends keyof RuxIconWifiOffEvents>(type: K, callback: (e: RuxIconWifiOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWifiOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWifiOffElement | undefined;
}
export default RuxIconWifiOff;
