import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLayersProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLayers["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLayers["size"];
}
interface RuxIconLayersEvents {
}
interface RuxIconLayersSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLayers extends SvelteComponent {
    $$prop_def: RuxIconLayersProps;
    $$events_def: RuxIconLayersEvents;
    $$slot_def: RuxIconLayersSlots;
    $on<K extends keyof RuxIconLayersEvents>(type: K, callback: (e: RuxIconLayersEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLayersProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLayersElement | undefined;
}
export default RuxIconLayers;
