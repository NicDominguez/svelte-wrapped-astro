import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExposureProps {
    /** The fill color for the icon */
    color?: Components.RuxIconExposure["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExposure["size"];
}
interface RuxIconExposureEvents {
}
interface RuxIconExposureSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExposure extends SvelteComponent {
    $$prop_def: RuxIconExposureProps;
    $$events_def: RuxIconExposureEvents;
    $$slot_def: RuxIconExposureSlots;
    $on<K extends keyof RuxIconExposureEvents>(type: K, callback: (e: RuxIconExposureEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconExposureProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExposureElement | undefined;
}
export default RuxIconExposure;
