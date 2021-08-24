import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCrop32Props {
    /** The fill color for the icon */
    color?: Components.RuxIconCrop32["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCrop32["size"];
}
interface RuxIconCrop32Events {
}
interface RuxIconCrop32Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCrop32 extends SvelteComponent {
    $$prop_def: RuxIconCrop32Props;
    $$events_def: RuxIconCrop32Events;
    $$slot_def: RuxIconCrop32Slots;
    $on<K extends keyof RuxIconCrop32Events>(type: K, callback: (e: RuxIconCrop32Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconCrop32Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCrop32Element | undefined;
}
export default RuxIconCrop32;
