import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCompareArrowsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCompareArrows["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCompareArrows["size"];
}
interface RuxIconCompareArrowsEvents {
}
interface RuxIconCompareArrowsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCompareArrows extends SvelteComponent {
    $$prop_def: RuxIconCompareArrowsProps;
    $$events_def: RuxIconCompareArrowsEvents;
    $$slot_def: RuxIconCompareArrowsSlots;
    $on<K extends keyof RuxIconCompareArrowsEvents>(type: K, callback: (e: RuxIconCompareArrowsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCompareArrowsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCompareArrowsElement | undefined;
}
export default RuxIconCompareArrows;
