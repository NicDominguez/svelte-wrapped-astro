import { Components } from '@astrouxds/astro-web-components';
interface RuxIconProcessorProps {
    /** The fill color for the icon */
    color?: Components.RuxIconProcessor["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconProcessor["size"];
}
interface RuxIconProcessorEvents {
}
interface RuxIconProcessorSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconProcessor extends SvelteComponent {
    $$prop_def: RuxIconProcessorProps;
    $$events_def: RuxIconProcessorEvents;
    $$slot_def: RuxIconProcessorSlots;
    $on<K extends keyof RuxIconProcessorEvents>(type: K, callback: (e: RuxIconProcessorEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconProcessorProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconProcessorElement | undefined;
}
export default RuxIconProcessor;
