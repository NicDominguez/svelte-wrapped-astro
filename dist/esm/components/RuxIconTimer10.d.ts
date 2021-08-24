import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTimer10Props {
    /** The fill color for the icon */
    color?: Components.RuxIconTimer10["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTimer10["size"];
}
interface RuxIconTimer10Events {
}
interface RuxIconTimer10Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTimer10 extends SvelteComponent {
    $$prop_def: RuxIconTimer10Props;
    $$events_def: RuxIconTimer10Events;
    $$slot_def: RuxIconTimer10Slots;
    $on<K extends keyof RuxIconTimer10Events>(type: K, callback: (e: RuxIconTimer10Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconTimer10Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTimer10Element | undefined;
}
export default RuxIconTimer10;
