import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewListProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewList["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewList["size"];
}
interface RuxIconViewListEvents {
}
interface RuxIconViewListSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewList extends SvelteComponent {
    $$prop_def: RuxIconViewListProps;
    $$events_def: RuxIconViewListEvents;
    $$slot_def: RuxIconViewListSlots;
    $on<K extends keyof RuxIconViewListEvents>(type: K, callback: (e: RuxIconViewListEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewListProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewListElement | undefined;
}
export default RuxIconViewList;
