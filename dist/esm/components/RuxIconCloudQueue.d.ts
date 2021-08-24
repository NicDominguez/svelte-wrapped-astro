import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCloudQueueProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCloudQueue["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCloudQueue["size"];
}
interface RuxIconCloudQueueEvents {
}
interface RuxIconCloudQueueSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCloudQueue extends SvelteComponent {
    $$prop_def: RuxIconCloudQueueProps;
    $$events_def: RuxIconCloudQueueEvents;
    $$slot_def: RuxIconCloudQueueSlots;
    $on<K extends keyof RuxIconCloudQueueEvents>(type: K, callback: (e: RuxIconCloudQueueEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCloudQueueProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCloudQueueElement | undefined;
}
export default RuxIconCloudQueue;
