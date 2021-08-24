import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddToQueueProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddToQueue["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddToQueue["size"];
}
interface RuxIconAddToQueueEvents {
}
interface RuxIconAddToQueueSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddToQueue extends SvelteComponent {
    $$prop_def: RuxIconAddToQueueProps;
    $$events_def: RuxIconAddToQueueEvents;
    $$slot_def: RuxIconAddToQueueSlots;
    $on<K extends keyof RuxIconAddToQueueEvents>(type: K, callback: (e: RuxIconAddToQueueEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddToQueueProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddToQueueElement | undefined;
}
export default RuxIconAddToQueue;
