import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDragHandleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDragHandle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDragHandle["size"];
}
interface RuxIconDragHandleEvents {
}
interface RuxIconDragHandleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDragHandle extends SvelteComponent {
    $$prop_def: RuxIconDragHandleProps;
    $$events_def: RuxIconDragHandleEvents;
    $$slot_def: RuxIconDragHandleSlots;
    $on<K extends keyof RuxIconDragHandleEvents>(type: K, callback: (e: RuxIconDragHandleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDragHandleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDragHandleElement | undefined;
}
export default RuxIconDragHandle;
