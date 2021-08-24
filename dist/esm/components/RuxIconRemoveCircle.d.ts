import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRemoveCircleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRemoveCircle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRemoveCircle["size"];
}
interface RuxIconRemoveCircleEvents {
}
interface RuxIconRemoveCircleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRemoveCircle extends SvelteComponent {
    $$prop_def: RuxIconRemoveCircleProps;
    $$events_def: RuxIconRemoveCircleEvents;
    $$slot_def: RuxIconRemoveCircleSlots;
    $on<K extends keyof RuxIconRemoveCircleEvents>(type: K, callback: (e: RuxIconRemoveCircleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRemoveCircleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRemoveCircleElement | undefined;
}
export default RuxIconRemoveCircle;
