import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCropFreeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCropFree["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCropFree["size"];
}
interface RuxIconCropFreeEvents {
}
interface RuxIconCropFreeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCropFree extends SvelteComponent {
    $$prop_def: RuxIconCropFreeProps;
    $$events_def: RuxIconCropFreeEvents;
    $$slot_def: RuxIconCropFreeSlots;
    $on<K extends keyof RuxIconCropFreeEvents>(type: K, callback: (e: RuxIconCropFreeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCropFreeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCropFreeElement | undefined;
}
export default RuxIconCropFree;
