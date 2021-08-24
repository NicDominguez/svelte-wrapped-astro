import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLowPriorityProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLowPriority["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLowPriority["size"];
}
interface RuxIconLowPriorityEvents {
}
interface RuxIconLowPrioritySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLowPriority extends SvelteComponent {
    $$prop_def: RuxIconLowPriorityProps;
    $$events_def: RuxIconLowPriorityEvents;
    $$slot_def: RuxIconLowPrioritySlots;
    $on<K extends keyof RuxIconLowPriorityEvents>(type: K, callback: (e: RuxIconLowPriorityEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLowPriorityProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLowPriorityElement | undefined;
}
export default RuxIconLowPriority;
