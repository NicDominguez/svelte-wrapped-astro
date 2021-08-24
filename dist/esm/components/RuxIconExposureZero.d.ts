import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExposureZeroProps {
    /** The fill color for the icon */
    color?: Components.RuxIconExposureZero["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExposureZero["size"];
}
interface RuxIconExposureZeroEvents {
}
interface RuxIconExposureZeroSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExposureZero extends SvelteComponent {
    $$prop_def: RuxIconExposureZeroProps;
    $$events_def: RuxIconExposureZeroEvents;
    $$slot_def: RuxIconExposureZeroSlots;
    $on<K extends keyof RuxIconExposureZeroEvents>(type: K, callback: (e: RuxIconExposureZeroEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconExposureZeroProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExposureZeroElement | undefined;
}
export default RuxIconExposureZero;
