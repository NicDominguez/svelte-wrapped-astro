import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowDropUpProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowDropUp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowDropUp["size"];
}
interface RuxIconArrowDropUpEvents {
}
interface RuxIconArrowDropUpSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowDropUp extends SvelteComponent {
    $$prop_def: RuxIconArrowDropUpProps;
    $$events_def: RuxIconArrowDropUpEvents;
    $$slot_def: RuxIconArrowDropUpSlots;
    $on<K extends keyof RuxIconArrowDropUpEvents>(type: K, callback: (e: RuxIconArrowDropUpEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowDropUpProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowDropUpElement | undefined;
}
export default RuxIconArrowDropUp;
