import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExploreProps {
    /** The fill color for the icon */
    color?: Components.RuxIconExplore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExplore["size"];
}
interface RuxIconExploreEvents {
}
interface RuxIconExploreSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExplore extends SvelteComponent {
    $$prop_def: RuxIconExploreProps;
    $$events_def: RuxIconExploreEvents;
    $$slot_def: RuxIconExploreSlots;
    $on<K extends keyof RuxIconExploreEvents>(type: K, callback: (e: RuxIconExploreEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconExploreProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExploreElement | undefined;
}
export default RuxIconExplore;
