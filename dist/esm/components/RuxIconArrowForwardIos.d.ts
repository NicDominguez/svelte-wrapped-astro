import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowForwardIosProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowForwardIos["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowForwardIos["size"];
}
interface RuxIconArrowForwardIosEvents {
}
interface RuxIconArrowForwardIosSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowForwardIos extends SvelteComponent {
    $$prop_def: RuxIconArrowForwardIosProps;
    $$events_def: RuxIconArrowForwardIosEvents;
    $$slot_def: RuxIconArrowForwardIosSlots;
    $on<K extends keyof RuxIconArrowForwardIosEvents>(type: K, callback: (e: RuxIconArrowForwardIosEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowForwardIosProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowForwardIosElement | undefined;
}
export default RuxIconArrowForwardIos;
