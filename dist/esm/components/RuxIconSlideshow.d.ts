import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSlideshowProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSlideshow["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSlideshow["size"];
}
interface RuxIconSlideshowEvents {
}
interface RuxIconSlideshowSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSlideshow extends SvelteComponent {
    $$prop_def: RuxIconSlideshowProps;
    $$events_def: RuxIconSlideshowEvents;
    $$slot_def: RuxIconSlideshowSlots;
    $on<K extends keyof RuxIconSlideshowEvents>(type: K, callback: (e: RuxIconSlideshowEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSlideshowProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSlideshowElement | undefined;
}
export default RuxIconSlideshow;
