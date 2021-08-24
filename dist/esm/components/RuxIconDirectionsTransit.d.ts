import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDirectionsTransitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDirectionsTransit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDirectionsTransit["size"];
}
interface RuxIconDirectionsTransitEvents {
}
interface RuxIconDirectionsTransitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDirectionsTransit extends SvelteComponent {
    $$prop_def: RuxIconDirectionsTransitProps;
    $$events_def: RuxIconDirectionsTransitEvents;
    $$slot_def: RuxIconDirectionsTransitSlots;
    $on<K extends keyof RuxIconDirectionsTransitEvents>(type: K, callback: (e: RuxIconDirectionsTransitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDirectionsTransitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDirectionsTransitElement | undefined;
}
export default RuxIconDirectionsTransit;
