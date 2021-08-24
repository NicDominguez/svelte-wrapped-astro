import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowDropDownCircleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowDropDownCircle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowDropDownCircle["size"];
}
interface RuxIconArrowDropDownCircleEvents {
}
interface RuxIconArrowDropDownCircleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowDropDownCircle extends SvelteComponent {
    $$prop_def: RuxIconArrowDropDownCircleProps;
    $$events_def: RuxIconArrowDropDownCircleEvents;
    $$slot_def: RuxIconArrowDropDownCircleSlots;
    $on<K extends keyof RuxIconArrowDropDownCircleEvents>(type: K, callback: (e: RuxIconArrowDropDownCircleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowDropDownCircleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowDropDownCircleElement | undefined;
}
export default RuxIconArrowDropDownCircle;
