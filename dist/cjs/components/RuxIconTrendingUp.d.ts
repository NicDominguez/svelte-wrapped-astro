import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTrendingUpProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTrendingUp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTrendingUp["size"];
}
interface RuxIconTrendingUpEvents {
}
interface RuxIconTrendingUpSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTrendingUp extends SvelteComponent {
    $$prop_def: RuxIconTrendingUpProps;
    $$events_def: RuxIconTrendingUpEvents;
    $$slot_def: RuxIconTrendingUpSlots;
    $on<K extends keyof RuxIconTrendingUpEvents>(type: K, callback: (e: RuxIconTrendingUpEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTrendingUpProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTrendingUpElement | undefined;
}
export default RuxIconTrendingUp;
