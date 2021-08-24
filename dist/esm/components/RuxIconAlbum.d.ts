import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAlbumProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAlbum["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAlbum["size"];
}
interface RuxIconAlbumEvents {
}
interface RuxIconAlbumSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAlbum extends SvelteComponent {
    $$prop_def: RuxIconAlbumProps;
    $$events_def: RuxIconAlbumEvents;
    $$slot_def: RuxIconAlbumSlots;
    $on<K extends keyof RuxIconAlbumEvents>(type: K, callback: (e: RuxIconAlbumEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAlbumProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAlbumElement | undefined;
}
export default RuxIconAlbum;
