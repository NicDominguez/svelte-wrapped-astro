import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFeaturedPlayListProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFeaturedPlayList["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFeaturedPlayList["size"];
}
interface RuxIconFeaturedPlayListEvents {
}
interface RuxIconFeaturedPlayListSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFeaturedPlayList extends SvelteComponent {
    $$prop_def: RuxIconFeaturedPlayListProps;
    $$events_def: RuxIconFeaturedPlayListEvents;
    $$slot_def: RuxIconFeaturedPlayListSlots;
    $on<K extends keyof RuxIconFeaturedPlayListEvents>(type: K, callback: (e: RuxIconFeaturedPlayListEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFeaturedPlayListProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFeaturedPlayListElement | undefined;
}
export default RuxIconFeaturedPlayList;
