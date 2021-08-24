import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCrop54Props {
    /** The fill color for the icon */
    color?: Components.RuxIconCrop54["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCrop54["size"];
}
interface RuxIconCrop54Events {
}
interface RuxIconCrop54Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCrop54 extends SvelteComponent {
    $$prop_def: RuxIconCrop54Props;
    $$events_def: RuxIconCrop54Events;
    $$slot_def: RuxIconCrop54Slots;
    $on<K extends keyof RuxIconCrop54Events>(type: K, callback: (e: RuxIconCrop54Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconCrop54Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCrop54Element | undefined;
}
export default RuxIconCrop54;
