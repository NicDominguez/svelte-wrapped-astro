import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilterListProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilterList["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilterList["size"];
}
interface RuxIconFilterListEvents {
}
interface RuxIconFilterListSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilterList extends SvelteComponent {
    $$prop_def: RuxIconFilterListProps;
    $$events_def: RuxIconFilterListEvents;
    $$slot_def: RuxIconFilterListSlots;
    $on<K extends keyof RuxIconFilterListEvents>(type: K, callback: (e: RuxIconFilterListEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilterListProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilterListElement | undefined;
}
export default RuxIconFilterList;
