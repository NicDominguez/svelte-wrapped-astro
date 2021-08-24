import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInsertPhotoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInsertPhoto["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInsertPhoto["size"];
}
interface RuxIconInsertPhotoEvents {
}
interface RuxIconInsertPhotoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInsertPhoto extends SvelteComponent {
    $$prop_def: RuxIconInsertPhotoProps;
    $$events_def: RuxIconInsertPhotoEvents;
    $$slot_def: RuxIconInsertPhotoSlots;
    $on<K extends keyof RuxIconInsertPhotoEvents>(type: K, callback: (e: RuxIconInsertPhotoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInsertPhotoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInsertPhotoElement | undefined;
}
export default RuxIconInsertPhoto;
