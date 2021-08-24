import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddCircleOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddCircleOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddCircleOutline["size"];
}
interface RuxIconAddCircleOutlineEvents {
}
interface RuxIconAddCircleOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddCircleOutline extends SvelteComponent {
    $$prop_def: RuxIconAddCircleOutlineProps;
    $$events_def: RuxIconAddCircleOutlineEvents;
    $$slot_def: RuxIconAddCircleOutlineSlots;
    $on<K extends keyof RuxIconAddCircleOutlineEvents>(type: K, callback: (e: RuxIconAddCircleOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddCircleOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddCircleOutlineElement | undefined;
}
export default RuxIconAddCircleOutline;
