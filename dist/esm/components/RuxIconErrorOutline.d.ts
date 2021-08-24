import { Components } from '@astrouxds/astro-web-components';
interface RuxIconErrorOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconErrorOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconErrorOutline["size"];
}
interface RuxIconErrorOutlineEvents {
}
interface RuxIconErrorOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconErrorOutline extends SvelteComponent {
    $$prop_def: RuxIconErrorOutlineProps;
    $$events_def: RuxIconErrorOutlineEvents;
    $$slot_def: RuxIconErrorOutlineSlots;
    $on<K extends keyof RuxIconErrorOutlineEvents>(type: K, callback: (e: RuxIconErrorOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconErrorOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconErrorOutlineElement | undefined;
}
export default RuxIconErrorOutline;
