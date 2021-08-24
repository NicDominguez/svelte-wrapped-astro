import { Components } from '@astrouxds/astro-web-components';
interface RuxIconUnarchiveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconUnarchive["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconUnarchive["size"];
}
interface RuxIconUnarchiveEvents {
}
interface RuxIconUnarchiveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconUnarchive extends SvelteComponent {
    $$prop_def: RuxIconUnarchiveProps;
    $$events_def: RuxIconUnarchiveEvents;
    $$slot_def: RuxIconUnarchiveSlots;
    $on<K extends keyof RuxIconUnarchiveEvents>(type: K, callback: (e: RuxIconUnarchiveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconUnarchiveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconUnarchiveElement | undefined;
}
export default RuxIconUnarchive;
