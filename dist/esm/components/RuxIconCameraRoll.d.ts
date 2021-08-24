import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCameraRollProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCameraRoll["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCameraRoll["size"];
}
interface RuxIconCameraRollEvents {
}
interface RuxIconCameraRollSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCameraRoll extends SvelteComponent {
    $$prop_def: RuxIconCameraRollProps;
    $$events_def: RuxIconCameraRollEvents;
    $$slot_def: RuxIconCameraRollSlots;
    $on<K extends keyof RuxIconCameraRollEvents>(type: K, callback: (e: RuxIconCameraRollEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCameraRollProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCameraRollElement | undefined;
}
export default RuxIconCameraRoll;
