import { Components } from '@astrouxds/astro-web-components';
interface RuxIconZoomOutMapProps {
    /** The fill color for the icon */
    color?: Components.RuxIconZoomOutMap["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconZoomOutMap["size"];
}
interface RuxIconZoomOutMapEvents {
}
interface RuxIconZoomOutMapSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconZoomOutMap extends SvelteComponent {
    $$prop_def: RuxIconZoomOutMapProps;
    $$events_def: RuxIconZoomOutMapEvents;
    $$slot_def: RuxIconZoomOutMapSlots;
    $on<K extends keyof RuxIconZoomOutMapEvents>(type: K, callback: (e: RuxIconZoomOutMapEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconZoomOutMapProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconZoomOutMapElement | undefined;
}
export default RuxIconZoomOutMap;
