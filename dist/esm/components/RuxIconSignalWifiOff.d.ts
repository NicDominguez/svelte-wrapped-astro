import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSignalWifiOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSignalWifiOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSignalWifiOff["size"];
}
interface RuxIconSignalWifiOffEvents {
}
interface RuxIconSignalWifiOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSignalWifiOff extends SvelteComponent {
    $$prop_def: RuxIconSignalWifiOffProps;
    $$events_def: RuxIconSignalWifiOffEvents;
    $$slot_def: RuxIconSignalWifiOffSlots;
    $on<K extends keyof RuxIconSignalWifiOffEvents>(type: K, callback: (e: RuxIconSignalWifiOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSignalWifiOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSignalWifiOffElement | undefined;
}
export default RuxIconSignalWifiOff;
