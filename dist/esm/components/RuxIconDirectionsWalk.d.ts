import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDirectionsWalkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDirectionsWalk["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDirectionsWalk["size"];
}
interface RuxIconDirectionsWalkEvents {
}
interface RuxIconDirectionsWalkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDirectionsWalk extends SvelteComponent {
    $$prop_def: RuxIconDirectionsWalkProps;
    $$events_def: RuxIconDirectionsWalkEvents;
    $$slot_def: RuxIconDirectionsWalkSlots;
    $on<K extends keyof RuxIconDirectionsWalkEvents>(type: K, callback: (e: RuxIconDirectionsWalkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDirectionsWalkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDirectionsWalkElement | undefined;
}
export default RuxIconDirectionsWalk;
