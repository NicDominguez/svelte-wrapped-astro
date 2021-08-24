import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWorkOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWorkOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWorkOutline["size"];
}
interface RuxIconWorkOutlineEvents {
}
interface RuxIconWorkOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWorkOutline extends SvelteComponent {
    $$prop_def: RuxIconWorkOutlineProps;
    $$events_def: RuxIconWorkOutlineEvents;
    $$slot_def: RuxIconWorkOutlineSlots;
    $on<K extends keyof RuxIconWorkOutlineEvents>(type: K, callback: (e: RuxIconWorkOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWorkOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWorkOutlineElement | undefined;
}
export default RuxIconWorkOutline;
