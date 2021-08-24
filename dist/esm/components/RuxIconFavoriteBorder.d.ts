import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFavoriteBorderProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFavoriteBorder["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFavoriteBorder["size"];
}
interface RuxIconFavoriteBorderEvents {
}
interface RuxIconFavoriteBorderSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFavoriteBorder extends SvelteComponent {
    $$prop_def: RuxIconFavoriteBorderProps;
    $$events_def: RuxIconFavoriteBorderEvents;
    $$slot_def: RuxIconFavoriteBorderSlots;
    $on<K extends keyof RuxIconFavoriteBorderEvents>(type: K, callback: (e: RuxIconFavoriteBorderEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFavoriteBorderProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFavoriteBorderElement | undefined;
}
export default RuxIconFavoriteBorder;
