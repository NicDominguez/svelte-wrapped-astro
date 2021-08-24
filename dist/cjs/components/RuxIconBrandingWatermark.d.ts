import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrandingWatermarkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBrandingWatermark["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrandingWatermark["size"];
}
interface RuxIconBrandingWatermarkEvents {
}
interface RuxIconBrandingWatermarkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrandingWatermark extends SvelteComponent {
    $$prop_def: RuxIconBrandingWatermarkProps;
    $$events_def: RuxIconBrandingWatermarkEvents;
    $$slot_def: RuxIconBrandingWatermarkSlots;
    $on<K extends keyof RuxIconBrandingWatermarkEvents>(type: K, callback: (e: RuxIconBrandingWatermarkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrandingWatermarkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrandingWatermarkElement | undefined;
}
export default RuxIconBrandingWatermark;
