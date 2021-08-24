import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSearchProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSearch["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSearch["size"];
}
interface RuxIconSearchEvents {
}
interface RuxIconSearchSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSearch extends SvelteComponent {
    $$prop_def: RuxIconSearchProps;
    $$events_def: RuxIconSearchEvents;
    $$slot_def: RuxIconSearchSlots;
    $on<K extends keyof RuxIconSearchEvents>(type: K, callback: (e: RuxIconSearchEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSearchProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSearchElement | undefined;
}
export default RuxIconSearch;
