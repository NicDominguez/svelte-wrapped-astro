import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddPhotoAlternateProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddPhotoAlternate["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddPhotoAlternate["size"];
}
interface RuxIconAddPhotoAlternateEvents {
}
interface RuxIconAddPhotoAlternateSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddPhotoAlternate extends SvelteComponent {
    $$prop_def: RuxIconAddPhotoAlternateProps;
    $$events_def: RuxIconAddPhotoAlternateEvents;
    $$slot_def: RuxIconAddPhotoAlternateSlots;
    $on<K extends keyof RuxIconAddPhotoAlternateEvents>(type: K, callback: (e: RuxIconAddPhotoAlternateEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddPhotoAlternateProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddPhotoAlternateElement | undefined;
}
export default RuxIconAddPhotoAlternate;
