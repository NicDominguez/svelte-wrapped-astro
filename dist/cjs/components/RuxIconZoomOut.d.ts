import { Components } from '@astrouxds/astro-web-components';
interface RuxIconZoomOutProps {
    /** The fill color for the icon */
    color?: Components.RuxIconZoomOut["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconZoomOut["size"];
}
interface RuxIconZoomOutEvents {
}
interface RuxIconZoomOutSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconZoomOut extends SvelteComponent {
    $$prop_def: RuxIconZoomOutProps;
    $$events_def: RuxIconZoomOutEvents;
    $$slot_def: RuxIconZoomOutSlots;
    $on<K extends keyof RuxIconZoomOutEvents>(type: K, callback: (e: RuxIconZoomOutEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconZoomOutProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconZoomOutElement | undefined;
}
export default RuxIconZoomOut;
