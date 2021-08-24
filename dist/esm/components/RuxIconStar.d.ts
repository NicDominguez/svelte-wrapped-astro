import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStar["size"];
}
interface RuxIconStarEvents {
}
interface RuxIconStarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStar extends SvelteComponent {
    $$prop_def: RuxIconStarProps;
    $$events_def: RuxIconStarEvents;
    $$slot_def: RuxIconStarSlots;
    $on<K extends keyof RuxIconStarEvents>(type: K, callback: (e: RuxIconStarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStarElement | undefined;
}
export default RuxIconStar;
