import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMailOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMailOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMailOutline["size"];
}
interface RuxIconMailOutlineEvents {
}
interface RuxIconMailOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMailOutline extends SvelteComponent {
    $$prop_def: RuxIconMailOutlineProps;
    $$events_def: RuxIconMailOutlineEvents;
    $$slot_def: RuxIconMailOutlineSlots;
    $on<K extends keyof RuxIconMailOutlineEvents>(type: K, callback: (e: RuxIconMailOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMailOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMailOutlineElement | undefined;
}
export default RuxIconMailOutline;
