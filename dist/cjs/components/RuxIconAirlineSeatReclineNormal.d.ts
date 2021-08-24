import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirlineSeatReclineNormalProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirlineSeatReclineNormal["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirlineSeatReclineNormal["size"];
}
interface RuxIconAirlineSeatReclineNormalEvents {
}
interface RuxIconAirlineSeatReclineNormalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirlineSeatReclineNormal extends SvelteComponent {
    $$prop_def: RuxIconAirlineSeatReclineNormalProps;
    $$events_def: RuxIconAirlineSeatReclineNormalEvents;
    $$slot_def: RuxIconAirlineSeatReclineNormalSlots;
    $on<K extends keyof RuxIconAirlineSeatReclineNormalEvents>(type: K, callback: (e: RuxIconAirlineSeatReclineNormalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirlineSeatReclineNormalProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirlineSeatReclineNormalElement | undefined;
}
export default RuxIconAirlineSeatReclineNormal;
