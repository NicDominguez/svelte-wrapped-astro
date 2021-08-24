import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStarsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStars["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStars["size"];
}
interface RuxIconStarsEvents {
}
interface RuxIconStarsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStars extends SvelteComponent {
    $$prop_def: RuxIconStarsProps;
    $$events_def: RuxIconStarsEvents;
    $$slot_def: RuxIconStarsSlots;
    $on<K extends keyof RuxIconStarsEvents>(type: K, callback: (e: RuxIconStarsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStarsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStarsElement | undefined;
}
export default RuxIconStars;
