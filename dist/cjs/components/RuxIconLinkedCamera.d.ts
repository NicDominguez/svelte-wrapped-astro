import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLinkedCameraProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLinkedCamera["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLinkedCamera["size"];
}
interface RuxIconLinkedCameraEvents {
}
interface RuxIconLinkedCameraSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLinkedCamera extends SvelteComponent {
    $$prop_def: RuxIconLinkedCameraProps;
    $$events_def: RuxIconLinkedCameraEvents;
    $$slot_def: RuxIconLinkedCameraSlots;
    $on<K extends keyof RuxIconLinkedCameraEvents>(type: K, callback: (e: RuxIconLinkedCameraEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLinkedCameraProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLinkedCameraElement | undefined;
}
export default RuxIconLinkedCamera;
