import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCameraAltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCameraAlt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCameraAlt["size"];
}
interface RuxIconCameraAltEvents {
}
interface RuxIconCameraAltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCameraAlt extends SvelteComponent {
    $$prop_def: RuxIconCameraAltProps;
    $$events_def: RuxIconCameraAltEvents;
    $$slot_def: RuxIconCameraAltSlots;
    $on<K extends keyof RuxIconCameraAltEvents>(type: K, callback: (e: RuxIconCameraAltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCameraAltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCameraAltElement | undefined;
}
export default RuxIconCameraAlt;
