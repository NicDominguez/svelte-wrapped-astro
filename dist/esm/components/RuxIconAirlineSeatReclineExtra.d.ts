import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirlineSeatReclineExtraProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirlineSeatReclineExtra["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirlineSeatReclineExtra["size"];
}
interface RuxIconAirlineSeatReclineExtraEvents {
}
interface RuxIconAirlineSeatReclineExtraSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirlineSeatReclineExtra extends SvelteComponent {
    $$prop_def: RuxIconAirlineSeatReclineExtraProps;
    $$events_def: RuxIconAirlineSeatReclineExtraEvents;
    $$slot_def: RuxIconAirlineSeatReclineExtraSlots;
    $on<K extends keyof RuxIconAirlineSeatReclineExtraEvents>(type: K, callback: (e: RuxIconAirlineSeatReclineExtraEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirlineSeatReclineExtraProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirlineSeatReclineExtraElement | undefined;
}
export default RuxIconAirlineSeatReclineExtra;
