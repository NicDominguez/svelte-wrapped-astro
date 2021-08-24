import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardArrowRightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboardArrowRight["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboardArrowRight["size"];
}
interface RuxIconKeyboardArrowRightEvents {
}
interface RuxIconKeyboardArrowRightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboardArrowRight extends SvelteComponent {
    $$prop_def: RuxIconKeyboardArrowRightProps;
    $$events_def: RuxIconKeyboardArrowRightEvents;
    $$slot_def: RuxIconKeyboardArrowRightSlots;
    $on<K extends keyof RuxIconKeyboardArrowRightEvents>(type: K, callback: (e: RuxIconKeyboardArrowRightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardArrowRightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardArrowRightElement | undefined;
}
export default RuxIconKeyboardArrowRight;
