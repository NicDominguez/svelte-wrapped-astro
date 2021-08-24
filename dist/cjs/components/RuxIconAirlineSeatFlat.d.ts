import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirlineSeatFlatProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirlineSeatFlat["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirlineSeatFlat["size"];
}
interface RuxIconAirlineSeatFlatEvents {
}
interface RuxIconAirlineSeatFlatSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirlineSeatFlat extends SvelteComponent {
    $$prop_def: RuxIconAirlineSeatFlatProps;
    $$events_def: RuxIconAirlineSeatFlatEvents;
    $$slot_def: RuxIconAirlineSeatFlatSlots;
    $on<K extends keyof RuxIconAirlineSeatFlatEvents>(type: K, callback: (e: RuxIconAirlineSeatFlatEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirlineSeatFlatProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirlineSeatFlatElement | undefined;
}
export default RuxIconAirlineSeatFlat;
