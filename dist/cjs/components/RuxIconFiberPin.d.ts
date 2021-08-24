import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFiberPinProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFiberPin["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFiberPin["size"];
}
interface RuxIconFiberPinEvents {
}
interface RuxIconFiberPinSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFiberPin extends SvelteComponent {
    $$prop_def: RuxIconFiberPinProps;
    $$events_def: RuxIconFiberPinEvents;
    $$slot_def: RuxIconFiberPinSlots;
    $on<K extends keyof RuxIconFiberPinEvents>(type: K, callback: (e: RuxIconFiberPinEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFiberPinProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFiberPinElement | undefined;
}
export default RuxIconFiberPin;
