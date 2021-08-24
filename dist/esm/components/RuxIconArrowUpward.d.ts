import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowUpwardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowUpward["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowUpward["size"];
}
interface RuxIconArrowUpwardEvents {
}
interface RuxIconArrowUpwardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowUpward extends SvelteComponent {
    $$prop_def: RuxIconArrowUpwardProps;
    $$events_def: RuxIconArrowUpwardEvents;
    $$slot_def: RuxIconArrowUpwardSlots;
    $on<K extends keyof RuxIconArrowUpwardEvents>(type: K, callback: (e: RuxIconArrowUpwardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowUpwardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowUpwardElement | undefined;
}
export default RuxIconArrowUpward;
