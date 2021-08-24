import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPriorityHighProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPriorityHigh["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPriorityHigh["size"];
}
interface RuxIconPriorityHighEvents {
}
interface RuxIconPriorityHighSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPriorityHigh extends SvelteComponent {
    $$prop_def: RuxIconPriorityHighProps;
    $$events_def: RuxIconPriorityHighEvents;
    $$slot_def: RuxIconPriorityHighSlots;
    $on<K extends keyof RuxIconPriorityHighEvents>(type: K, callback: (e: RuxIconPriorityHighEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPriorityHighProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPriorityHighElement | undefined;
}
export default RuxIconPriorityHigh;
