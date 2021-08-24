import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddAPhotoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddAPhoto["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddAPhoto["size"];
}
interface RuxIconAddAPhotoEvents {
}
interface RuxIconAddAPhotoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddAPhoto extends SvelteComponent {
    $$prop_def: RuxIconAddAPhotoProps;
    $$events_def: RuxIconAddAPhotoEvents;
    $$slot_def: RuxIconAddAPhotoSlots;
    $on<K extends keyof RuxIconAddAPhotoEvents>(type: K, callback: (e: RuxIconAddAPhotoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddAPhotoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddAPhotoElement | undefined;
}
export default RuxIconAddAPhoto;
