import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTimer3Props {
    /** The fill color for the icon */
    color?: Components.RuxIconTimer3["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTimer3["size"];
}
interface RuxIconTimer3Events {
}
interface RuxIconTimer3Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTimer3 extends SvelteComponent {
    $$prop_def: RuxIconTimer3Props;
    $$events_def: RuxIconTimer3Events;
    $$slot_def: RuxIconTimer3Slots;
    $on<K extends keyof RuxIconTimer3Events>(type: K, callback: (e: RuxIconTimer3Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconTimer3Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTimer3Element | undefined;
}
export default RuxIconTimer3;
