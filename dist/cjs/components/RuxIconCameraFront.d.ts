import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCameraFrontProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCameraFront["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCameraFront["size"];
}
interface RuxIconCameraFrontEvents {
}
interface RuxIconCameraFrontSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCameraFront extends SvelteComponent {
    $$prop_def: RuxIconCameraFrontProps;
    $$events_def: RuxIconCameraFrontEvents;
    $$slot_def: RuxIconCameraFrontSlots;
    $on<K extends keyof RuxIconCameraFrontEvents>(type: K, callback: (e: RuxIconCameraFrontEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCameraFrontProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCameraFrontElement | undefined;
}
export default RuxIconCameraFront;
