import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRemoveCircleOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRemoveCircleOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRemoveCircleOutline["size"];
}
interface RuxIconRemoveCircleOutlineEvents {
}
interface RuxIconRemoveCircleOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRemoveCircleOutline extends SvelteComponent {
    $$prop_def: RuxIconRemoveCircleOutlineProps;
    $$events_def: RuxIconRemoveCircleOutlineEvents;
    $$slot_def: RuxIconRemoveCircleOutlineSlots;
    $on<K extends keyof RuxIconRemoveCircleOutlineEvents>(type: K, callback: (e: RuxIconRemoveCircleOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRemoveCircleOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRemoveCircleOutlineElement | undefined;
}
export default RuxIconRemoveCircleOutline;
