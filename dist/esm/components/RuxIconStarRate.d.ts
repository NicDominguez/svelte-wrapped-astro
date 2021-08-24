import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStarRateProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStarRate["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStarRate["size"];
}
interface RuxIconStarRateEvents {
}
interface RuxIconStarRateSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStarRate extends SvelteComponent {
    $$prop_def: RuxIconStarRateProps;
    $$events_def: RuxIconStarRateEvents;
    $$slot_def: RuxIconStarRateSlots;
    $on<K extends keyof RuxIconStarRateEvents>(type: K, callback: (e: RuxIconStarRateEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStarRateProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStarRateElement | undefined;
}
export default RuxIconStarRate;
