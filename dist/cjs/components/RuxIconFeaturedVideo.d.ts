import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFeaturedVideoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFeaturedVideo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFeaturedVideo["size"];
}
interface RuxIconFeaturedVideoEvents {
}
interface RuxIconFeaturedVideoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFeaturedVideo extends SvelteComponent {
    $$prop_def: RuxIconFeaturedVideoProps;
    $$events_def: RuxIconFeaturedVideoEvents;
    $$slot_def: RuxIconFeaturedVideoSlots;
    $on<K extends keyof RuxIconFeaturedVideoEvents>(type: K, callback: (e: RuxIconFeaturedVideoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFeaturedVideoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFeaturedVideoElement | undefined;
}
export default RuxIconFeaturedVideo;
