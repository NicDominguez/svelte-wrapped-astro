import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExposureNeg1Props {
    /** The fill color for the icon */
    color?: Components.RuxIconExposureNeg1["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExposureNeg1["size"];
}
interface RuxIconExposureNeg1Events {
}
interface RuxIconExposureNeg1Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExposureNeg1 extends SvelteComponent {
    $$prop_def: RuxIconExposureNeg1Props;
    $$events_def: RuxIconExposureNeg1Events;
    $$slot_def: RuxIconExposureNeg1Slots;
    $on<K extends keyof RuxIconExposureNeg1Events>(type: K, callback: (e: RuxIconExposureNeg1Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconExposureNeg1Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExposureNeg1Element | undefined;
}
export default RuxIconExposureNeg1;
