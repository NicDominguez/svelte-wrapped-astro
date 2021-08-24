import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTrendingFlatProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTrendingFlat["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTrendingFlat["size"];
}
interface RuxIconTrendingFlatEvents {
}
interface RuxIconTrendingFlatSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTrendingFlat extends SvelteComponent {
    $$prop_def: RuxIconTrendingFlatProps;
    $$events_def: RuxIconTrendingFlatEvents;
    $$slot_def: RuxIconTrendingFlatSlots;
    $on<K extends keyof RuxIconTrendingFlatEvents>(type: K, callback: (e: RuxIconTrendingFlatEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTrendingFlatProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTrendingFlatElement | undefined;
}
export default RuxIconTrendingFlat;
