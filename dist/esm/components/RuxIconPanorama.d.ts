import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPanoramaProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPanorama["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPanorama["size"];
}
interface RuxIconPanoramaEvents {
}
interface RuxIconPanoramaSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPanorama extends SvelteComponent {
    $$prop_def: RuxIconPanoramaProps;
    $$events_def: RuxIconPanoramaEvents;
    $$slot_def: RuxIconPanoramaSlots;
    $on<K extends keyof RuxIconPanoramaEvents>(type: K, callback: (e: RuxIconPanoramaEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPanoramaProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPanoramaElement | undefined;
}
export default RuxIconPanorama;
