import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCollectionsBookmarkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCollectionsBookmark["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCollectionsBookmark["size"];
}
interface RuxIconCollectionsBookmarkEvents {
}
interface RuxIconCollectionsBookmarkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCollectionsBookmark extends SvelteComponent {
    $$prop_def: RuxIconCollectionsBookmarkProps;
    $$events_def: RuxIconCollectionsBookmarkEvents;
    $$slot_def: RuxIconCollectionsBookmarkSlots;
    $on<K extends keyof RuxIconCollectionsBookmarkEvents>(type: K, callback: (e: RuxIconCollectionsBookmarkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCollectionsBookmarkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCollectionsBookmarkElement | undefined;
}
export default RuxIconCollectionsBookmark;
