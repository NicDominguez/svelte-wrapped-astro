import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDeviceUnknownProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDeviceUnknown["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDeviceUnknown["size"];
}
interface RuxIconDeviceUnknownEvents {
}
interface RuxIconDeviceUnknownSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDeviceUnknown extends SvelteComponent {
    $$prop_def: RuxIconDeviceUnknownProps;
    $$events_def: RuxIconDeviceUnknownEvents;
    $$slot_def: RuxIconDeviceUnknownSlots;
    $on<K extends keyof RuxIconDeviceUnknownEvents>(type: K, callback: (e: RuxIconDeviceUnknownEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDeviceUnknownProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDeviceUnknownElement | undefined;
}
export default RuxIconDeviceUnknown;
