import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowForwardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowForward["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowForward["size"];
}
interface RuxIconArrowForwardEvents {
}
interface RuxIconArrowForwardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowForward extends SvelteComponent {
    $$prop_def: RuxIconArrowForwardProps;
    $$events_def: RuxIconArrowForwardEvents;
    $$slot_def: RuxIconArrowForwardSlots;
    $on<K extends keyof RuxIconArrowForwardEvents>(type: K, callback: (e: RuxIconArrowForwardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowForwardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowForwardElement | undefined;
}
export default RuxIconArrowForward;
