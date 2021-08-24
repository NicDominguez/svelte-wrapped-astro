import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDeviceHubProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDeviceHub["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDeviceHub["size"];
}
interface RuxIconDeviceHubEvents {
}
interface RuxIconDeviceHubSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDeviceHub extends SvelteComponent {
    $$prop_def: RuxIconDeviceHubProps;
    $$events_def: RuxIconDeviceHubEvents;
    $$slot_def: RuxIconDeviceHubSlots;
    $on<K extends keyof RuxIconDeviceHubEvents>(type: K, callback: (e: RuxIconDeviceHubEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDeviceHubProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDeviceHubElement | undefined;
}
export default RuxIconDeviceHub;
