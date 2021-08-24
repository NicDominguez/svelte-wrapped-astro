import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddToPhotosProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddToPhotos["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddToPhotos["size"];
}
interface RuxIconAddToPhotosEvents {
}
interface RuxIconAddToPhotosSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddToPhotos extends SvelteComponent {
    $$prop_def: RuxIconAddToPhotosProps;
    $$events_def: RuxIconAddToPhotosEvents;
    $$slot_def: RuxIconAddToPhotosSlots;
    $on<K extends keyof RuxIconAddToPhotosEvents>(type: K, callback: (e: RuxIconAddToPhotosEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddToPhotosProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddToPhotosElement | undefined;
}
export default RuxIconAddToPhotos;
