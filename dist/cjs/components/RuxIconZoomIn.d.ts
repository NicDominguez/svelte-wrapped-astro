import { Components } from '@astrouxds/astro-web-components';
interface RuxIconZoomInProps {
    /** The fill color for the icon */
    color?: Components.RuxIconZoomIn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconZoomIn["size"];
}
interface RuxIconZoomInEvents {
}
interface RuxIconZoomInSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconZoomIn extends SvelteComponent {
    $$prop_def: RuxIconZoomInProps;
    $$events_def: RuxIconZoomInEvents;
    $$slot_def: RuxIconZoomInSlots;
    $on<K extends keyof RuxIconZoomInEvents>(type: K, callback: (e: RuxIconZoomInEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconZoomInProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconZoomInElement | undefined;
}
export default RuxIconZoomIn;
