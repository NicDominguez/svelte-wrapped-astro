import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardArrowUpProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboardArrowUp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboardArrowUp["size"];
}
interface RuxIconKeyboardArrowUpEvents {
}
interface RuxIconKeyboardArrowUpSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboardArrowUp extends SvelteComponent {
    $$prop_def: RuxIconKeyboardArrowUpProps;
    $$events_def: RuxIconKeyboardArrowUpEvents;
    $$slot_def: RuxIconKeyboardArrowUpSlots;
    $on<K extends keyof RuxIconKeyboardArrowUpEvents>(type: K, callback: (e: RuxIconKeyboardArrowUpEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardArrowUpProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardArrowUpElement | undefined;
}
export default RuxIconKeyboardArrowUp;
