import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRemoveRedEyeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRemoveRedEye["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRemoveRedEye["size"];
}
interface RuxIconRemoveRedEyeEvents {
}
interface RuxIconRemoveRedEyeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRemoveRedEye extends SvelteComponent {
    $$prop_def: RuxIconRemoveRedEyeProps;
    $$events_def: RuxIconRemoveRedEyeEvents;
    $$slot_def: RuxIconRemoveRedEyeSlots;
    $on<K extends keyof RuxIconRemoveRedEyeEvents>(type: K, callback: (e: RuxIconRemoveRedEyeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRemoveRedEyeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRemoveRedEyeElement | undefined;
}
export default RuxIconRemoveRedEye;
