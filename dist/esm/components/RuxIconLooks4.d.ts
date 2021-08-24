import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLooks4Props {
    /** The fill color for the icon */
    color?: Components.RuxIconLooks4["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLooks4["size"];
}
interface RuxIconLooks4Events {
}
interface RuxIconLooks4Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLooks4 extends SvelteComponent {
    $$prop_def: RuxIconLooks4Props;
    $$events_def: RuxIconLooks4Events;
    $$slot_def: RuxIconLooks4Slots;
    $on<K extends keyof RuxIconLooks4Events>(type: K, callback: (e: RuxIconLooks4Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconLooks4Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLooks4Element | undefined;
}
export default RuxIconLooks4;
