import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPanoramaVerticalProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPanoramaVertical["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPanoramaVertical["size"];
}
interface RuxIconPanoramaVerticalEvents {
}
interface RuxIconPanoramaVerticalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPanoramaVertical extends SvelteComponent {
    $$prop_def: RuxIconPanoramaVerticalProps;
    $$events_def: RuxIconPanoramaVerticalEvents;
    $$slot_def: RuxIconPanoramaVerticalSlots;
    $on<K extends keyof RuxIconPanoramaVerticalEvents>(type: K, callback: (e: RuxIconPanoramaVerticalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPanoramaVerticalProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPanoramaVerticalElement | undefined;
}
export default RuxIconPanoramaVertical;
