import { Components } from '@astrouxds/astro-web-components';
interface RuxIconListProps {
    /** The fill color for the icon */
    color?: Components.RuxIconList["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconList["size"];
}
interface RuxIconListEvents {
}
interface RuxIconListSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconList extends SvelteComponent {
    $$prop_def: RuxIconListProps;
    $$events_def: RuxIconListEvents;
    $$slot_def: RuxIconListSlots;
    $on<K extends keyof RuxIconListEvents>(type: K, callback: (e: RuxIconListEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconListProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconListElement | undefined;
}
export default RuxIconList;
