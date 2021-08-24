import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCropOriginalProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCropOriginal["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCropOriginal["size"];
}
interface RuxIconCropOriginalEvents {
}
interface RuxIconCropOriginalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCropOriginal extends SvelteComponent {
    $$prop_def: RuxIconCropOriginalProps;
    $$events_def: RuxIconCropOriginalEvents;
    $$slot_def: RuxIconCropOriginalSlots;
    $on<K extends keyof RuxIconCropOriginalEvents>(type: K, callback: (e: RuxIconCropOriginalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCropOriginalProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCropOriginalElement | undefined;
}
export default RuxIconCropOriginal;
