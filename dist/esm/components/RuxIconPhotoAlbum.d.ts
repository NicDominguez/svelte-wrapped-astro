import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhotoAlbumProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhotoAlbum["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhotoAlbum["size"];
}
interface RuxIconPhotoAlbumEvents {
}
interface RuxIconPhotoAlbumSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhotoAlbum extends SvelteComponent {
    $$prop_def: RuxIconPhotoAlbumProps;
    $$events_def: RuxIconPhotoAlbumEvents;
    $$slot_def: RuxIconPhotoAlbumSlots;
    $on<K extends keyof RuxIconPhotoAlbumEvents>(type: K, callback: (e: RuxIconPhotoAlbumEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhotoAlbumProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhotoAlbumElement | undefined;
}
export default RuxIconPhotoAlbum;
