import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDoneOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDoneOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDoneOutline["size"];
}
interface RuxIconDoneOutlineEvents {
}
interface RuxIconDoneOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDoneOutline extends SvelteComponent {
    $$prop_def: RuxIconDoneOutlineProps;
    $$events_def: RuxIconDoneOutlineEvents;
    $$slot_def: RuxIconDoneOutlineSlots;
    $on<K extends keyof RuxIconDoneOutlineEvents>(type: K, callback: (e: RuxIconDoneOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDoneOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDoneOutlineElement | undefined;
}
export default RuxIconDoneOutline;
