import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewCarouselProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewCarousel["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewCarousel["size"];
}
interface RuxIconViewCarouselEvents {
}
interface RuxIconViewCarouselSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewCarousel extends SvelteComponent {
    $$prop_def: RuxIconViewCarouselProps;
    $$events_def: RuxIconViewCarouselEvents;
    $$slot_def: RuxIconViewCarouselSlots;
    $on<K extends keyof RuxIconViewCarouselEvents>(type: K, callback: (e: RuxIconViewCarouselEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewCarouselProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewCarouselElement | undefined;
}
export default RuxIconViewCarousel;
