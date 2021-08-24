import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardArrowDownProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboardArrowDown["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboardArrowDown["size"];
}
interface RuxIconKeyboardArrowDownEvents {
}
interface RuxIconKeyboardArrowDownSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboardArrowDown extends SvelteComponent {
    $$prop_def: RuxIconKeyboardArrowDownProps;
    $$events_def: RuxIconKeyboardArrowDownEvents;
    $$slot_def: RuxIconKeyboardArrowDownSlots;
    $on<K extends keyof RuxIconKeyboardArrowDownEvents>(type: K, callback: (e: RuxIconKeyboardArrowDownEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardArrowDownProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardArrowDownElement | undefined;
}
export default RuxIconKeyboardArrowDown;
