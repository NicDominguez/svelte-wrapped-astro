import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLooks1Props {
    /** The fill color for the icon */
    color?: Components.RuxIconLooks1["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLooks1["size"];
}
interface RuxIconLooks1Events {
}
interface RuxIconLooks1Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLooks1 extends SvelteComponent {
    $$prop_def: RuxIconLooks1Props;
    $$events_def: RuxIconLooks1Events;
    $$slot_def: RuxIconLooks1Slots;
    $on<K extends keyof RuxIconLooks1Events>(type: K, callback: (e: RuxIconLooks1Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconLooks1Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLooks1Element | undefined;
}
export default RuxIconLooks1;
