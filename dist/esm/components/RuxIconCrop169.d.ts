import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCrop169Props {
    /** The fill color for the icon */
    color?: Components.RuxIconCrop169["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCrop169["size"];
}
interface RuxIconCrop169Events {
}
interface RuxIconCrop169Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCrop169 extends SvelteComponent {
    $$prop_def: RuxIconCrop169Props;
    $$events_def: RuxIconCrop169Events;
    $$slot_def: RuxIconCrop169Slots;
    $on<K extends keyof RuxIconCrop169Events>(type: K, callback: (e: RuxIconCrop169Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconCrop169Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCrop169Element | undefined;
}
export default RuxIconCrop169;
