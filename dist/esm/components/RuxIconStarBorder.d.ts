import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStarBorderProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStarBorder["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStarBorder["size"];
}
interface RuxIconStarBorderEvents {
}
interface RuxIconStarBorderSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStarBorder extends SvelteComponent {
    $$prop_def: RuxIconStarBorderProps;
    $$events_def: RuxIconStarBorderEvents;
    $$slot_def: RuxIconStarBorderSlots;
    $on<K extends keyof RuxIconStarBorderEvents>(type: K, callback: (e: RuxIconStarBorderEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStarBorderProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStarBorderElement | undefined;
}
export default RuxIconStarBorder;
