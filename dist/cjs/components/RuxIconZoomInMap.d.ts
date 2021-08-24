import { Components } from '@astrouxds/astro-web-components';
interface RuxIconZoomInMapProps {
    /** The fill color for the icon */
    color?: Components.RuxIconZoomInMap["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconZoomInMap["size"];
}
interface RuxIconZoomInMapEvents {
}
interface RuxIconZoomInMapSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconZoomInMap extends SvelteComponent {
    $$prop_def: RuxIconZoomInMapProps;
    $$events_def: RuxIconZoomInMapEvents;
    $$slot_def: RuxIconZoomInMapSlots;
    $on<K extends keyof RuxIconZoomInMapEvents>(type: K, callback: (e: RuxIconZoomInMapEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconZoomInMapProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconZoomInMapElement | undefined;
}
export default RuxIconZoomInMap;
