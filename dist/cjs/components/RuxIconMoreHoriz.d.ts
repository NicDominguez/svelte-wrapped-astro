import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMoreHorizProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMoreHoriz["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMoreHoriz["size"];
}
interface RuxIconMoreHorizEvents {
}
interface RuxIconMoreHorizSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMoreHoriz extends SvelteComponent {
    $$prop_def: RuxIconMoreHorizProps;
    $$events_def: RuxIconMoreHorizEvents;
    $$slot_def: RuxIconMoreHorizSlots;
    $on<K extends keyof RuxIconMoreHorizEvents>(type: K, callback: (e: RuxIconMoreHorizEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMoreHorizProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMoreHorizElement | undefined;
}
export default RuxIconMoreHoriz;
