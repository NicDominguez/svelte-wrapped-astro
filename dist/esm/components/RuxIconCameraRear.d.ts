import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCameraRearProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCameraRear["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCameraRear["size"];
}
interface RuxIconCameraRearEvents {
}
interface RuxIconCameraRearSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCameraRear extends SvelteComponent {
    $$prop_def: RuxIconCameraRearProps;
    $$events_def: RuxIconCameraRearEvents;
    $$slot_def: RuxIconCameraRearSlots;
    $on<K extends keyof RuxIconCameraRearEvents>(type: K, callback: (e: RuxIconCameraRearEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCameraRearProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCameraRearElement | undefined;
}
export default RuxIconCameraRear;
