import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGifProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGif["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGif["size"];
}
interface RuxIconGifEvents {
}
interface RuxIconGifSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGif extends SvelteComponent {
    $$prop_def: RuxIconGifProps;
    $$events_def: RuxIconGifEvents;
    $$slot_def: RuxIconGifSlots;
    $on<K extends keyof RuxIconGifEvents>(type: K, callback: (e: RuxIconGifEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGifProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGifElement | undefined;
}
export default RuxIconGif;
