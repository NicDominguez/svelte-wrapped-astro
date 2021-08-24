import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFreeBreakfastProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFreeBreakfast["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFreeBreakfast["size"];
}
interface RuxIconFreeBreakfastEvents {
}
interface RuxIconFreeBreakfastSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFreeBreakfast extends SvelteComponent {
    $$prop_def: RuxIconFreeBreakfastProps;
    $$events_def: RuxIconFreeBreakfastEvents;
    $$slot_def: RuxIconFreeBreakfastSlots;
    $on<K extends keyof RuxIconFreeBreakfastEvents>(type: K, callback: (e: RuxIconFreeBreakfastEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFreeBreakfastProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFreeBreakfastElement | undefined;
}
export default RuxIconFreeBreakfast;
