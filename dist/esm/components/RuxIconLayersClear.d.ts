import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLayersClearProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLayersClear["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLayersClear["size"];
}
interface RuxIconLayersClearEvents {
}
interface RuxIconLayersClearSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLayersClear extends SvelteComponent {
    $$prop_def: RuxIconLayersClearProps;
    $$events_def: RuxIconLayersClearEvents;
    $$slot_def: RuxIconLayersClearSlots;
    $on<K extends keyof RuxIconLayersClearEvents>(type: K, callback: (e: RuxIconLayersClearEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLayersClearProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLayersClearElement | undefined;
}
export default RuxIconLayersClear;
