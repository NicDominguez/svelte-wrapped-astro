import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPictureInPictureProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPictureInPicture["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPictureInPicture["size"];
}
interface RuxIconPictureInPictureEvents {
}
interface RuxIconPictureInPictureSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPictureInPicture extends SvelteComponent {
    $$prop_def: RuxIconPictureInPictureProps;
    $$events_def: RuxIconPictureInPictureEvents;
    $$slot_def: RuxIconPictureInPictureSlots;
    $on<K extends keyof RuxIconPictureInPictureEvents>(type: K, callback: (e: RuxIconPictureInPictureEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPictureInPictureProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPictureInPictureElement | undefined;
}
export default RuxIconPictureInPicture;
