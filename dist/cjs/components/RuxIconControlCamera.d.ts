import { Components } from '@astrouxds/astro-web-components';
interface RuxIconControlCameraProps {
    /** The fill color for the icon */
    color?: Components.RuxIconControlCamera["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconControlCamera["size"];
}
interface RuxIconControlCameraEvents {
}
interface RuxIconControlCameraSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconControlCamera extends SvelteComponent {
    $$prop_def: RuxIconControlCameraProps;
    $$events_def: RuxIconControlCameraEvents;
    $$slot_def: RuxIconControlCameraSlots;
    $on<K extends keyof RuxIconControlCameraEvents>(type: K, callback: (e: RuxIconControlCameraEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconControlCameraProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconControlCameraElement | undefined;
}
export default RuxIconControlCamera;
