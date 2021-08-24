import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExploreOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconExploreOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExploreOff["size"];
}
interface RuxIconExploreOffEvents {
}
interface RuxIconExploreOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExploreOff extends SvelteComponent {
    $$prop_def: RuxIconExploreOffProps;
    $$events_def: RuxIconExploreOffEvents;
    $$slot_def: RuxIconExploreOffSlots;
    $on<K extends keyof RuxIconExploreOffEvents>(type: K, callback: (e: RuxIconExploreOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconExploreOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExploreOffElement | undefined;
}
export default RuxIconExploreOff;
