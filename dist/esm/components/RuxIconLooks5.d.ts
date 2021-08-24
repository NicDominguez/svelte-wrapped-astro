import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLooks5Props {
    /** The fill color for the icon */
    color?: Components.RuxIconLooks5["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLooks5["size"];
}
interface RuxIconLooks5Events {
}
interface RuxIconLooks5Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLooks5 extends SvelteComponent {
    $$prop_def: RuxIconLooks5Props;
    $$events_def: RuxIconLooks5Events;
    $$slot_def: RuxIconLooks5Slots;
    $on<K extends keyof RuxIconLooks5Events>(type: K, callback: (e: RuxIconLooks5Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconLooks5Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLooks5Element | undefined;
}
export default RuxIconLooks5;
