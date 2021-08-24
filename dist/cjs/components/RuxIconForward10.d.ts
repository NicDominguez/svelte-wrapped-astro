import { Components } from '@astrouxds/astro-web-components';
interface RuxIconForward10Props {
    /** The fill color for the icon */
    color?: Components.RuxIconForward10["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconForward10["size"];
}
interface RuxIconForward10Events {
}
interface RuxIconForward10Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconForward10 extends SvelteComponent {
    $$prop_def: RuxIconForward10Props;
    $$events_def: RuxIconForward10Events;
    $$slot_def: RuxIconForward10Slots;
    $on<K extends keyof RuxIconForward10Events>(type: K, callback: (e: RuxIconForward10Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconForward10Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconForward10Element | undefined;
}
export default RuxIconForward10;
