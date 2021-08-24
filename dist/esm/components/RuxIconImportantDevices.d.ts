import { Components } from '@astrouxds/astro-web-components';
interface RuxIconImportantDevicesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconImportantDevices["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconImportantDevices["size"];
}
interface RuxIconImportantDevicesEvents {
}
interface RuxIconImportantDevicesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconImportantDevices extends SvelteComponent {
    $$prop_def: RuxIconImportantDevicesProps;
    $$events_def: RuxIconImportantDevicesEvents;
    $$slot_def: RuxIconImportantDevicesSlots;
    $on<K extends keyof RuxIconImportantDevicesEvents>(type: K, callback: (e: RuxIconImportantDevicesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconImportantDevicesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconImportantDevicesElement | undefined;
}
export default RuxIconImportantDevices;
