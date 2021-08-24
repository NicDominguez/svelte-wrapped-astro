import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCameraProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCamera["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCamera["size"];
}
interface RuxIconCameraEvents {
}
interface RuxIconCameraSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCamera extends SvelteComponent {
    $$prop_def: RuxIconCameraProps;
    $$events_def: RuxIconCameraEvents;
    $$slot_def: RuxIconCameraSlots;
    $on<K extends keyof RuxIconCameraEvents>(type: K, callback: (e: RuxIconCameraEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCameraProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCameraElement | undefined;
}
export default RuxIconCamera;
