import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDirectionsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDirections["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDirections["size"];
}
interface RuxIconDirectionsEvents {
}
interface RuxIconDirectionsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDirections extends SvelteComponent {
    $$prop_def: RuxIconDirectionsProps;
    $$events_def: RuxIconDirectionsEvents;
    $$slot_def: RuxIconDirectionsSlots;
    $on<K extends keyof RuxIconDirectionsEvents>(type: K, callback: (e: RuxIconDirectionsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDirectionsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDirectionsElement | undefined;
}
export default RuxIconDirections;
