import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRecentActorsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRecentActors["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRecentActors["size"];
}
interface RuxIconRecentActorsEvents {
}
interface RuxIconRecentActorsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRecentActors extends SvelteComponent {
    $$prop_def: RuxIconRecentActorsProps;
    $$events_def: RuxIconRecentActorsEvents;
    $$slot_def: RuxIconRecentActorsSlots;
    $on<K extends keyof RuxIconRecentActorsEvents>(type: K, callback: (e: RuxIconRecentActorsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRecentActorsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRecentActorsElement | undefined;
}
export default RuxIconRecentActors;
