import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLooks3Props {
    /** The fill color for the icon */
    color?: Components.RuxIconLooks3["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLooks3["size"];
}
interface RuxIconLooks3Events {
}
interface RuxIconLooks3Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLooks3 extends SvelteComponent {
    $$prop_def: RuxIconLooks3Props;
    $$events_def: RuxIconLooks3Events;
    $$slot_def: RuxIconLooks3Slots;
    $on<K extends keyof RuxIconLooks3Events>(type: K, callback: (e: RuxIconLooks3Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconLooks3Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLooks3Element | undefined;
}
export default RuxIconLooks3;
