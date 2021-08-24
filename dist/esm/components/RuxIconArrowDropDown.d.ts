import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowDropDownProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowDropDown["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowDropDown["size"];
}
interface RuxIconArrowDropDownEvents {
}
interface RuxIconArrowDropDownSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowDropDown extends SvelteComponent {
    $$prop_def: RuxIconArrowDropDownProps;
    $$events_def: RuxIconArrowDropDownEvents;
    $$slot_def: RuxIconArrowDropDownSlots;
    $on<K extends keyof RuxIconArrowDropDownEvents>(type: K, callback: (e: RuxIconArrowDropDownEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowDropDownProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowDropDownElement | undefined;
}
export default RuxIconArrowDropDown;
