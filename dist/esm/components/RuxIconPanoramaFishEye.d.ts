import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPanoramaFishEyeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPanoramaFishEye["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPanoramaFishEye["size"];
}
interface RuxIconPanoramaFishEyeEvents {
}
interface RuxIconPanoramaFishEyeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPanoramaFishEye extends SvelteComponent {
    $$prop_def: RuxIconPanoramaFishEyeProps;
    $$events_def: RuxIconPanoramaFishEyeEvents;
    $$slot_def: RuxIconPanoramaFishEyeSlots;
    $on<K extends keyof RuxIconPanoramaFishEyeEvents>(type: K, callback: (e: RuxIconPanoramaFishEyeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPanoramaFishEyeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPanoramaFishEyeElement | undefined;
}
export default RuxIconPanoramaFishEye;
