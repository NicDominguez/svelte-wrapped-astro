import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTripOriginProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTripOrigin["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTripOrigin["size"];
}
interface RuxIconTripOriginEvents {
}
interface RuxIconTripOriginSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTripOrigin extends SvelteComponent {
    $$prop_def: RuxIconTripOriginProps;
    $$events_def: RuxIconTripOriginEvents;
    $$slot_def: RuxIconTripOriginSlots;
    $on<K extends keyof RuxIconTripOriginEvents>(type: K, callback: (e: RuxIconTripOriginEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTripOriginProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTripOriginElement | undefined;
}
export default RuxIconTripOrigin;
