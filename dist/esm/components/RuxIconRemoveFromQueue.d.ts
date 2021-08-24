import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRemoveFromQueueProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRemoveFromQueue["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRemoveFromQueue["size"];
}
interface RuxIconRemoveFromQueueEvents {
}
interface RuxIconRemoveFromQueueSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRemoveFromQueue extends SvelteComponent {
    $$prop_def: RuxIconRemoveFromQueueProps;
    $$events_def: RuxIconRemoveFromQueueEvents;
    $$slot_def: RuxIconRemoveFromQueueSlots;
    $on<K extends keyof RuxIconRemoveFromQueueEvents>(type: K, callback: (e: RuxIconRemoveFromQueueEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRemoveFromQueueProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRemoveFromQueueElement | undefined;
}
export default RuxIconRemoveFromQueue;
