import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCropDinProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCropDin["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCropDin["size"];
}
interface RuxIconCropDinEvents {
}
interface RuxIconCropDinSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCropDin extends SvelteComponent {
    $$prop_def: RuxIconCropDinProps;
    $$events_def: RuxIconCropDinEvents;
    $$slot_def: RuxIconCropDinSlots;
    $on<K extends keyof RuxIconCropDinEvents>(type: K, callback: (e: RuxIconCropDinEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCropDinProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCropDinElement | undefined;
}
export default RuxIconCropDin;
