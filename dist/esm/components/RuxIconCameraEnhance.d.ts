import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCameraEnhanceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCameraEnhance["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCameraEnhance["size"];
}
interface RuxIconCameraEnhanceEvents {
}
interface RuxIconCameraEnhanceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCameraEnhance extends SvelteComponent {
    $$prop_def: RuxIconCameraEnhanceProps;
    $$events_def: RuxIconCameraEnhanceEvents;
    $$slot_def: RuxIconCameraEnhanceSlots;
    $on<K extends keyof RuxIconCameraEnhanceEvents>(type: K, callback: (e: RuxIconCameraEnhanceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCameraEnhanceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCameraEnhanceElement | undefined;
}
export default RuxIconCameraEnhance;
