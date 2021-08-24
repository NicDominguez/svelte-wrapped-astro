import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhotoCameraProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhotoCamera["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhotoCamera["size"];
}
interface RuxIconPhotoCameraEvents {
}
interface RuxIconPhotoCameraSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhotoCamera extends SvelteComponent {
    $$prop_def: RuxIconPhotoCameraProps;
    $$events_def: RuxIconPhotoCameraEvents;
    $$slot_def: RuxIconPhotoCameraSlots;
    $on<K extends keyof RuxIconPhotoCameraEvents>(type: K, callback: (e: RuxIconPhotoCameraEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhotoCameraProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhotoCameraElement | undefined;
}
export default RuxIconPhotoCamera;
