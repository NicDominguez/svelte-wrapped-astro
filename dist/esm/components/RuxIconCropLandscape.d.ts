import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCropLandscapeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCropLandscape["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCropLandscape["size"];
}
interface RuxIconCropLandscapeEvents {
}
interface RuxIconCropLandscapeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCropLandscape extends SvelteComponent {
    $$prop_def: RuxIconCropLandscapeProps;
    $$events_def: RuxIconCropLandscapeEvents;
    $$slot_def: RuxIconCropLandscapeSlots;
    $on<K extends keyof RuxIconCropLandscapeEvents>(type: K, callback: (e: RuxIconCropLandscapeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCropLandscapeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCropLandscapeElement | undefined;
}
export default RuxIconCropLandscape;
