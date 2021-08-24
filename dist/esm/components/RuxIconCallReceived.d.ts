import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCallReceivedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCallReceived["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCallReceived["size"];
}
interface RuxIconCallReceivedEvents {
}
interface RuxIconCallReceivedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCallReceived extends SvelteComponent {
    $$prop_def: RuxIconCallReceivedProps;
    $$events_def: RuxIconCallReceivedEvents;
    $$slot_def: RuxIconCallReceivedSlots;
    $on<K extends keyof RuxIconCallReceivedEvents>(type: K, callback: (e: RuxIconCallReceivedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCallReceivedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCallReceivedElement | undefined;
}
export default RuxIconCallReceived;
