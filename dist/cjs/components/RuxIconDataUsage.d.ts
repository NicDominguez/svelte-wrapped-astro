import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDataUsageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDataUsage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDataUsage["size"];
}
interface RuxIconDataUsageEvents {
}
interface RuxIconDataUsageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDataUsage extends SvelteComponent {
    $$prop_def: RuxIconDataUsageProps;
    $$events_def: RuxIconDataUsageEvents;
    $$slot_def: RuxIconDataUsageSlots;
    $on<K extends keyof RuxIconDataUsageEvents>(type: K, callback: (e: RuxIconDataUsageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDataUsageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDataUsageElement | undefined;
}
export default RuxIconDataUsage;
