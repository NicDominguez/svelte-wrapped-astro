import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowRightAltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowRightAlt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowRightAlt["size"];
}
interface RuxIconArrowRightAltEvents {
}
interface RuxIconArrowRightAltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowRightAlt extends SvelteComponent {
    $$prop_def: RuxIconArrowRightAltProps;
    $$events_def: RuxIconArrowRightAltEvents;
    $$slot_def: RuxIconArrowRightAltSlots;
    $on<K extends keyof RuxIconArrowRightAltEvents>(type: K, callback: (e: RuxIconArrowRightAltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowRightAltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowRightAltElement | undefined;
}
export default RuxIconArrowRightAlt;
