import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBookmarkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBookmark["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBookmark["size"];
}
interface RuxIconBookmarkEvents {
}
interface RuxIconBookmarkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBookmark extends SvelteComponent {
    $$prop_def: RuxIconBookmarkProps;
    $$events_def: RuxIconBookmarkEvents;
    $$slot_def: RuxIconBookmarkSlots;
    $on<K extends keyof RuxIconBookmarkEvents>(type: K, callback: (e: RuxIconBookmarkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBookmarkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBookmarkElement | undefined;
}
export default RuxIconBookmark;
