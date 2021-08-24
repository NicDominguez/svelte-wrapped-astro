import { Components } from '@astrouxds/astro-web-components';
interface RuxIconQueueProps {
    /** The fill color for the icon */
    color?: Components.RuxIconQueue["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconQueue["size"];
}
interface RuxIconQueueEvents {
}
interface RuxIconQueueSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconQueue extends SvelteComponent {
    $$prop_def: RuxIconQueueProps;
    $$events_def: RuxIconQueueEvents;
    $$slot_def: RuxIconQueueSlots;
    $on<K extends keyof RuxIconQueueEvents>(type: K, callback: (e: RuxIconQueueEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconQueueProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconQueueElement | undefined;
}
export default RuxIconQueue;
