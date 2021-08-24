import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNetworkCheckProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNetworkCheck["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNetworkCheck["size"];
}
interface RuxIconNetworkCheckEvents {
}
interface RuxIconNetworkCheckSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNetworkCheck extends SvelteComponent {
    $$prop_def: RuxIconNetworkCheckProps;
    $$events_def: RuxIconNetworkCheckEvents;
    $$slot_def: RuxIconNetworkCheckSlots;
    $on<K extends keyof RuxIconNetworkCheckEvents>(type: K, callback: (e: RuxIconNetworkCheckEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNetworkCheckProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNetworkCheckElement | undefined;
}
export default RuxIconNetworkCheck;
