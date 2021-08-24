import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCropPortraitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCropPortrait["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCropPortrait["size"];
}
interface RuxIconCropPortraitEvents {
}
interface RuxIconCropPortraitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCropPortrait extends SvelteComponent {
    $$prop_def: RuxIconCropPortraitProps;
    $$events_def: RuxIconCropPortraitEvents;
    $$slot_def: RuxIconCropPortraitSlots;
    $on<K extends keyof RuxIconCropPortraitEvents>(type: K, callback: (e: RuxIconCropPortraitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCropPortraitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCropPortraitElement | undefined;
}
export default RuxIconCropPortrait;
