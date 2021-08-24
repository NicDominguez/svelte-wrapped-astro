import { Components } from '@astrouxds/astro-web-components';
interface RuxIconImageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconImage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconImage["size"];
}
interface RuxIconImageEvents {
}
interface RuxIconImageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconImage extends SvelteComponent {
    $$prop_def: RuxIconImageProps;
    $$events_def: RuxIconImageEvents;
    $$slot_def: RuxIconImageSlots;
    $on<K extends keyof RuxIconImageEvents>(type: K, callback: (e: RuxIconImageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconImageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconImageElement | undefined;
}
export default RuxIconImage;
