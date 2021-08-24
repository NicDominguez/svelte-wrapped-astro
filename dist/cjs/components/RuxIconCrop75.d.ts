import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCrop75Props {
    /** The fill color for the icon */
    color?: Components.RuxIconCrop75["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCrop75["size"];
}
interface RuxIconCrop75Events {
}
interface RuxIconCrop75Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCrop75 extends SvelteComponent {
    $$prop_def: RuxIconCrop75Props;
    $$events_def: RuxIconCrop75Events;
    $$slot_def: RuxIconCrop75Slots;
    $on<K extends keyof RuxIconCrop75Events>(type: K, callback: (e: RuxIconCrop75Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconCrop75Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCrop75Element | undefined;
}
export default RuxIconCrop75;
