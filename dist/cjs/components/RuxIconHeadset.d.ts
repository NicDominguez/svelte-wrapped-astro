import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHeadsetProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHeadset["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHeadset["size"];
}
interface RuxIconHeadsetEvents {
}
interface RuxIconHeadsetSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHeadset extends SvelteComponent {
    $$prop_def: RuxIconHeadsetProps;
    $$events_def: RuxIconHeadsetEvents;
    $$slot_def: RuxIconHeadsetSlots;
    $on<K extends keyof RuxIconHeadsetEvents>(type: K, callback: (e: RuxIconHeadsetEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHeadsetProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHeadsetElement | undefined;
}
export default RuxIconHeadset;
