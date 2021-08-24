import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirlineSeatLegroomReducedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirlineSeatLegroomReduced["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirlineSeatLegroomReduced["size"];
}
interface RuxIconAirlineSeatLegroomReducedEvents {
}
interface RuxIconAirlineSeatLegroomReducedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirlineSeatLegroomReduced extends SvelteComponent {
    $$prop_def: RuxIconAirlineSeatLegroomReducedProps;
    $$events_def: RuxIconAirlineSeatLegroomReducedEvents;
    $$slot_def: RuxIconAirlineSeatLegroomReducedSlots;
    $on<K extends keyof RuxIconAirlineSeatLegroomReducedEvents>(type: K, callback: (e: RuxIconAirlineSeatLegroomReducedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirlineSeatLegroomReducedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirlineSeatLegroomReducedElement | undefined;
}
export default RuxIconAirlineSeatLegroomReduced;
