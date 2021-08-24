import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrokenImageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBrokenImage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrokenImage["size"];
}
interface RuxIconBrokenImageEvents {
}
interface RuxIconBrokenImageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrokenImage extends SvelteComponent {
    $$prop_def: RuxIconBrokenImageProps;
    $$events_def: RuxIconBrokenImageEvents;
    $$slot_def: RuxIconBrokenImageSlots;
    $on<K extends keyof RuxIconBrokenImageEvents>(type: K, callback: (e: RuxIconBrokenImageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrokenImageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrokenImageElement | undefined;
}
export default RuxIconBrokenImage;
