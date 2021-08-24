import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCropProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCrop["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCrop["size"];
}
interface RuxIconCropEvents {
}
interface RuxIconCropSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCrop extends SvelteComponent {
    $$prop_def: RuxIconCropProps;
    $$events_def: RuxIconCropEvents;
    $$slot_def: RuxIconCropSlots;
    $on<K extends keyof RuxIconCropEvents>(type: K, callback: (e: RuxIconCropEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCropProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCropElement | undefined;
}
export default RuxIconCrop;
