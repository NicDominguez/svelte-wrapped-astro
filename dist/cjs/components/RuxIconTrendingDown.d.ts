import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTrendingDownProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTrendingDown["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTrendingDown["size"];
}
interface RuxIconTrendingDownEvents {
}
interface RuxIconTrendingDownSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTrendingDown extends SvelteComponent {
    $$prop_def: RuxIconTrendingDownProps;
    $$events_def: RuxIconTrendingDownEvents;
    $$slot_def: RuxIconTrendingDownSlots;
    $on<K extends keyof RuxIconTrendingDownEvents>(type: K, callback: (e: RuxIconTrendingDownEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTrendingDownProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTrendingDownElement | undefined;
}
export default RuxIconTrendingDown;
