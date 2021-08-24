import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSortProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSort["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSort["size"];
}
interface RuxIconSortEvents {
}
interface RuxIconSortSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSort extends SvelteComponent {
    $$prop_def: RuxIconSortProps;
    $$events_def: RuxIconSortEvents;
    $$slot_def: RuxIconSortSlots;
    $on<K extends keyof RuxIconSortEvents>(type: K, callback: (e: RuxIconSortEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSortProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSortElement | undefined;
}
export default RuxIconSort;
