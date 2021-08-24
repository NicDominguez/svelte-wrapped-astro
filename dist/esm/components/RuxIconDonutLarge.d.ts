import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDonutLargeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDonutLarge["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDonutLarge["size"];
}
interface RuxIconDonutLargeEvents {
}
interface RuxIconDonutLargeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDonutLarge extends SvelteComponent {
    $$prop_def: RuxIconDonutLargeProps;
    $$events_def: RuxIconDonutLargeEvents;
    $$slot_def: RuxIconDonutLargeSlots;
    $on<K extends keyof RuxIconDonutLargeEvents>(type: K, callback: (e: RuxIconDonutLargeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDonutLargeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDonutLargeElement | undefined;
}
export default RuxIconDonutLarge;
