import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStrikethroughSProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStrikethroughS["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStrikethroughS["size"];
}
interface RuxIconStrikethroughSEvents {
}
interface RuxIconStrikethroughSSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStrikethroughS extends SvelteComponent {
    $$prop_def: RuxIconStrikethroughSProps;
    $$events_def: RuxIconStrikethroughSEvents;
    $$slot_def: RuxIconStrikethroughSSlots;
    $on<K extends keyof RuxIconStrikethroughSEvents>(type: K, callback: (e: RuxIconStrikethroughSEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStrikethroughSProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStrikethroughSElement | undefined;
}
export default RuxIconStrikethroughS;
