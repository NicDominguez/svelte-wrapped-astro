import { Components } from '@astrouxds/astro-web-components';
interface RuxIconProcessorAltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconProcessorAlt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconProcessorAlt["size"];
}
interface RuxIconProcessorAltEvents {
}
interface RuxIconProcessorAltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconProcessorAlt extends SvelteComponent {
    $$prop_def: RuxIconProcessorAltProps;
    $$events_def: RuxIconProcessorAltEvents;
    $$slot_def: RuxIconProcessorAltSlots;
    $on<K extends keyof RuxIconProcessorAltEvents>(type: K, callback: (e: RuxIconProcessorAltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconProcessorAltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconProcessorAltElement | undefined;
}
export default RuxIconProcessorAlt;
