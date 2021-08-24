import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSwitchCameraProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSwitchCamera["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSwitchCamera["size"];
}
interface RuxIconSwitchCameraEvents {
}
interface RuxIconSwitchCameraSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSwitchCamera extends SvelteComponent {
    $$prop_def: RuxIconSwitchCameraProps;
    $$events_def: RuxIconSwitchCameraEvents;
    $$slot_def: RuxIconSwitchCameraSlots;
    $on<K extends keyof RuxIconSwitchCameraEvents>(type: K, callback: (e: RuxIconSwitchCameraEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSwitchCameraProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSwitchCameraElement | undefined;
}
export default RuxIconSwitchCamera;
