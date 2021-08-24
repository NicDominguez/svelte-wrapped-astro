import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPanoramaHorizontalProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPanoramaHorizontal["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPanoramaHorizontal["size"];
}
interface RuxIconPanoramaHorizontalEvents {
}
interface RuxIconPanoramaHorizontalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPanoramaHorizontal extends SvelteComponent {
    $$prop_def: RuxIconPanoramaHorizontalProps;
    $$events_def: RuxIconPanoramaHorizontalEvents;
    $$slot_def: RuxIconPanoramaHorizontalSlots;
    $on<K extends keyof RuxIconPanoramaHorizontalEvents>(type: K, callback: (e: RuxIconPanoramaHorizontalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPanoramaHorizontalProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPanoramaHorizontalElement | undefined;
}
export default RuxIconPanoramaHorizontal;
