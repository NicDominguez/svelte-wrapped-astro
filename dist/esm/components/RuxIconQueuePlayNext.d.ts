import { Components } from '@astrouxds/astro-web-components';
interface RuxIconQueuePlayNextProps {
    /** The fill color for the icon */
    color?: Components.RuxIconQueuePlayNext["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconQueuePlayNext["size"];
}
interface RuxIconQueuePlayNextEvents {
}
interface RuxIconQueuePlayNextSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconQueuePlayNext extends SvelteComponent {
    $$prop_def: RuxIconQueuePlayNextProps;
    $$events_def: RuxIconQueuePlayNextEvents;
    $$slot_def: RuxIconQueuePlayNextSlots;
    $on<K extends keyof RuxIconQueuePlayNextEvents>(type: K, callback: (e: RuxIconQueuePlayNextEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconQueuePlayNextProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconQueuePlayNextElement | undefined;
}
export default RuxIconQueuePlayNext;
