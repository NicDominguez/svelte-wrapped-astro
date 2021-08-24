import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirlineSeatFlatAngledProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirlineSeatFlatAngled["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirlineSeatFlatAngled["size"];
}
interface RuxIconAirlineSeatFlatAngledEvents {
}
interface RuxIconAirlineSeatFlatAngledSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirlineSeatFlatAngled extends SvelteComponent {
    $$prop_def: RuxIconAirlineSeatFlatAngledProps;
    $$events_def: RuxIconAirlineSeatFlatAngledEvents;
    $$slot_def: RuxIconAirlineSeatFlatAngledSlots;
    $on<K extends keyof RuxIconAirlineSeatFlatAngledEvents>(type: K, callback: (e: RuxIconAirlineSeatFlatAngledEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirlineSeatFlatAngledProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirlineSeatFlatAngledElement | undefined;
}
export default RuxIconAirlineSeatFlatAngled;
