import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCastConnectedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCastConnected["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCastConnected["size"];
}
interface RuxIconCastConnectedEvents {
}
interface RuxIconCastConnectedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCastConnected extends SvelteComponent {
    $$prop_def: RuxIconCastConnectedProps;
    $$events_def: RuxIconCastConnectedEvents;
    $$slot_def: RuxIconCastConnectedSlots;
    $on<K extends keyof RuxIconCastConnectedEvents>(type: K, callback: (e: RuxIconCastConnectedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCastConnectedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCastConnectedElement | undefined;
}
export default RuxIconCastConnected;
