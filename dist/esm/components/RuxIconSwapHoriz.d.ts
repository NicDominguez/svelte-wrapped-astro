import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSwapHorizProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSwapHoriz["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSwapHoriz["size"];
}
interface RuxIconSwapHorizEvents {
}
interface RuxIconSwapHorizSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSwapHoriz extends SvelteComponent {
    $$prop_def: RuxIconSwapHorizProps;
    $$events_def: RuxIconSwapHorizEvents;
    $$slot_def: RuxIconSwapHorizSlots;
    $on<K extends keyof RuxIconSwapHorizEvents>(type: K, callback: (e: RuxIconSwapHorizEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSwapHorizProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSwapHorizElement | undefined;
}
export default RuxIconSwapHoriz;
