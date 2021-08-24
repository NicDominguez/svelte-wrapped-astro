import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPermDeviceInformationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPermDeviceInformation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPermDeviceInformation["size"];
}
interface RuxIconPermDeviceInformationEvents {
}
interface RuxIconPermDeviceInformationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPermDeviceInformation extends SvelteComponent {
    $$prop_def: RuxIconPermDeviceInformationProps;
    $$events_def: RuxIconPermDeviceInformationEvents;
    $$slot_def: RuxIconPermDeviceInformationSlots;
    $on<K extends keyof RuxIconPermDeviceInformationEvents>(type: K, callback: (e: RuxIconPermDeviceInformationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPermDeviceInformationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPermDeviceInformationElement | undefined;
}
export default RuxIconPermDeviceInformation;
