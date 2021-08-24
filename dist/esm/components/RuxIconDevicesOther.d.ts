import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDevicesOtherProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDevicesOther["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDevicesOther["size"];
}
interface RuxIconDevicesOtherEvents {
}
interface RuxIconDevicesOtherSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDevicesOther extends SvelteComponent {
    $$prop_def: RuxIconDevicesOtherProps;
    $$events_def: RuxIconDevicesOtherEvents;
    $$slot_def: RuxIconDevicesOtherSlots;
    $on<K extends keyof RuxIconDevicesOtherEvents>(type: K, callback: (e: RuxIconDevicesOtherEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDevicesOtherProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDevicesOtherElement | undefined;
}
export default RuxIconDevicesOther;
