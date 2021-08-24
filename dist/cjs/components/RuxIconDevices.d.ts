import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDevicesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDevices["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDevices["size"];
}
interface RuxIconDevicesEvents {
}
interface RuxIconDevicesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDevices extends SvelteComponent {
    $$prop_def: RuxIconDevicesProps;
    $$events_def: RuxIconDevicesEvents;
    $$slot_def: RuxIconDevicesSlots;
    $on<K extends keyof RuxIconDevicesEvents>(type: K, callback: (e: RuxIconDevicesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDevicesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDevicesElement | undefined;
}
export default RuxIconDevices;
