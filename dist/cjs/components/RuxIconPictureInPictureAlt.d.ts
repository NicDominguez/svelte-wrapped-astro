import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPictureInPictureAltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPictureInPictureAlt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPictureInPictureAlt["size"];
}
interface RuxIconPictureInPictureAltEvents {
}
interface RuxIconPictureInPictureAltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPictureInPictureAlt extends SvelteComponent {
    $$prop_def: RuxIconPictureInPictureAltProps;
    $$events_def: RuxIconPictureInPictureAltEvents;
    $$slot_def: RuxIconPictureInPictureAltSlots;
    $on<K extends keyof RuxIconPictureInPictureAltEvents>(type: K, callback: (e: RuxIconPictureInPictureAltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPictureInPictureAltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPictureInPictureAltElement | undefined;
}
export default RuxIconPictureInPictureAlt;
