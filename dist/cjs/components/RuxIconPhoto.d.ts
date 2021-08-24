import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhotoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhoto["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhoto["size"];
}
interface RuxIconPhotoEvents {
}
interface RuxIconPhotoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhoto extends SvelteComponent {
    $$prop_def: RuxIconPhotoProps;
    $$events_def: RuxIconPhotoEvents;
    $$slot_def: RuxIconPhotoSlots;
    $on<K extends keyof RuxIconPhotoEvents>(type: K, callback: (e: RuxIconPhotoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhotoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhotoElement | undefined;
}
export default RuxIconPhoto;
