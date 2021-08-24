import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExposureNeg2Props {
    /** The fill color for the icon */
    color?: Components.RuxIconExposureNeg2["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExposureNeg2["size"];
}
interface RuxIconExposureNeg2Events {
}
interface RuxIconExposureNeg2Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExposureNeg2 extends SvelteComponent {
    $$prop_def: RuxIconExposureNeg2Props;
    $$events_def: RuxIconExposureNeg2Events;
    $$slot_def: RuxIconExposureNeg2Slots;
    $on<K extends keyof RuxIconExposureNeg2Events>(type: K, callback: (e: RuxIconExposureNeg2Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconExposureNeg2Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExposureNeg2Element | undefined;
}
export default RuxIconExposureNeg2;
