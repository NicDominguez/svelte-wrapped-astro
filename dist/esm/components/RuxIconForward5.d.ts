import { Components } from '@astrouxds/astro-web-components';
interface RuxIconForward5Props {
    /** The fill color for the icon */
    color?: Components.RuxIconForward5["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconForward5["size"];
}
interface RuxIconForward5Events {
}
interface RuxIconForward5Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconForward5 extends SvelteComponent {
    $$prop_def: RuxIconForward5Props;
    $$events_def: RuxIconForward5Events;
    $$slot_def: RuxIconForward5Slots;
    $on<K extends keyof RuxIconForward5Events>(type: K, callback: (e: RuxIconForward5Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconForward5Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconForward5Element | undefined;
}
export default RuxIconForward5;
