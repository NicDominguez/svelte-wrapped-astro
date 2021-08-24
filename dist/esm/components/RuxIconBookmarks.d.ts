import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBookmarksProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBookmarks["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBookmarks["size"];
}
interface RuxIconBookmarksEvents {
}
interface RuxIconBookmarksSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBookmarks extends SvelteComponent {
    $$prop_def: RuxIconBookmarksProps;
    $$events_def: RuxIconBookmarksEvents;
    $$slot_def: RuxIconBookmarksSlots;
    $on<K extends keyof RuxIconBookmarksEvents>(type: K, callback: (e: RuxIconBookmarksEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBookmarksProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBookmarksElement | undefined;
}
export default RuxIconBookmarks;
