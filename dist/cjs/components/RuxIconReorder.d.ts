import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReorderProps {
    /** The fill color for the icon */
    color?: Components.RuxIconReorder["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReorder["size"];
}
interface RuxIconReorderEvents {
}
interface RuxIconReorderSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReorder extends SvelteComponent {
    $$prop_def: RuxIconReorderProps;
    $$events_def: RuxIconReorderEvents;
    $$slot_def: RuxIconReorderSlots;
    $on<K extends keyof RuxIconReorderEvents>(type: K, callback: (e: RuxIconReorderEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconReorderProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReorderElement | undefined;
}
export default RuxIconReorder;
