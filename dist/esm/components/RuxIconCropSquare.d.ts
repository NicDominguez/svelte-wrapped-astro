import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCropSquareProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCropSquare["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCropSquare["size"];
}
interface RuxIconCropSquareEvents {
}
interface RuxIconCropSquareSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCropSquare extends SvelteComponent {
    $$prop_def: RuxIconCropSquareProps;
    $$events_def: RuxIconCropSquareEvents;
    $$slot_def: RuxIconCropSquareSlots;
    $on<K extends keyof RuxIconCropSquareEvents>(type: K, callback: (e: RuxIconCropSquareEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCropSquareProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCropSquareElement | undefined;
}
export default RuxIconCropSquare;
