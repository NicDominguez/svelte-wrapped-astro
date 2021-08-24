import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPortableWifiOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPortableWifiOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPortableWifiOff["size"];
}
interface RuxIconPortableWifiOffEvents {
}
interface RuxIconPortableWifiOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPortableWifiOff extends SvelteComponent {
    $$prop_def: RuxIconPortableWifiOffProps;
    $$events_def: RuxIconPortableWifiOffEvents;
    $$slot_def: RuxIconPortableWifiOffSlots;
    $on<K extends keyof RuxIconPortableWifiOffEvents>(type: K, callback: (e: RuxIconPortableWifiOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPortableWifiOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPortableWifiOffElement | undefined;
}
export default RuxIconPortableWifiOff;
