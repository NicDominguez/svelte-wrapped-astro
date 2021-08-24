import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSortByAlphaProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSortByAlpha["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSortByAlpha["size"];
}
interface RuxIconSortByAlphaEvents {
}
interface RuxIconSortByAlphaSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSortByAlpha extends SvelteComponent {
    $$prop_def: RuxIconSortByAlphaProps;
    $$events_def: RuxIconSortByAlphaEvents;
    $$slot_def: RuxIconSortByAlphaSlots;
    $on<K extends keyof RuxIconSortByAlphaEvents>(type: K, callback: (e: RuxIconSortByAlphaEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSortByAlphaProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSortByAlphaElement | undefined;
}
export default RuxIconSortByAlpha;
