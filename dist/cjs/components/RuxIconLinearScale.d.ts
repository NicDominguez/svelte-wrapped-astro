import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLinearScaleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLinearScale["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLinearScale["size"];
}
interface RuxIconLinearScaleEvents {
}
interface RuxIconLinearScaleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLinearScale extends SvelteComponent {
    $$prop_def: RuxIconLinearScaleProps;
    $$events_def: RuxIconLinearScaleEvents;
    $$slot_def: RuxIconLinearScaleSlots;
    $on<K extends keyof RuxIconLinearScaleEvents>(type: K, callback: (e: RuxIconLinearScaleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLinearScaleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLinearScaleElement | undefined;
}
export default RuxIconLinearScale;
