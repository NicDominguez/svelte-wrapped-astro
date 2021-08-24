import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDeleteOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDeleteOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDeleteOutline["size"];
}
interface RuxIconDeleteOutlineEvents {
}
interface RuxIconDeleteOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDeleteOutline extends SvelteComponent {
    $$prop_def: RuxIconDeleteOutlineProps;
    $$events_def: RuxIconDeleteOutlineEvents;
    $$slot_def: RuxIconDeleteOutlineSlots;
    $on<K extends keyof RuxIconDeleteOutlineEvents>(type: K, callback: (e: RuxIconDeleteOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDeleteOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDeleteOutlineElement | undefined;
}
export default RuxIconDeleteOutline;
