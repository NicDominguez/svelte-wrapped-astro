import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowBackIosProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowBackIos["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowBackIos["size"];
}
interface RuxIconArrowBackIosEvents {
}
interface RuxIconArrowBackIosSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowBackIos extends SvelteComponent {
    $$prop_def: RuxIconArrowBackIosProps;
    $$events_def: RuxIconArrowBackIosEvents;
    $$slot_def: RuxIconArrowBackIosSlots;
    $on<K extends keyof RuxIconArrowBackIosEvents>(type: K, callback: (e: RuxIconArrowBackIosEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowBackIosProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowBackIosElement | undefined;
}
export default RuxIconArrowBackIos;
