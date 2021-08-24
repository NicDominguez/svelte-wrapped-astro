import { Components } from '@astrouxds/astro-web-components';
interface RuxIconUsbProps {
    /** The fill color for the icon */
    color?: Components.RuxIconUsb["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconUsb["size"];
}
interface RuxIconUsbEvents {
}
interface RuxIconUsbSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconUsb extends SvelteComponent {
    $$prop_def: RuxIconUsbProps;
    $$events_def: RuxIconUsbEvents;
    $$slot_def: RuxIconUsbSlots;
    $on<K extends keyof RuxIconUsbEvents>(type: K, callback: (e: RuxIconUsbEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconUsbProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconUsbElement | undefined;
}
export default RuxIconUsb;
