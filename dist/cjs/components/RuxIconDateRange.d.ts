import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDateRangeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDateRange["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDateRange["size"];
}
interface RuxIconDateRangeEvents {
}
interface RuxIconDateRangeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDateRange extends SvelteComponent {
    $$prop_def: RuxIconDateRangeProps;
    $$events_def: RuxIconDateRangeEvents;
    $$slot_def: RuxIconDateRangeSlots;
    $on<K extends keyof RuxIconDateRangeEvents>(type: K, callback: (e: RuxIconDateRangeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDateRangeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDateRangeElement | undefined;
}
export default RuxIconDateRange;
