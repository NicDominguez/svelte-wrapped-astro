import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirlineSeatLegroomExtraProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirlineSeatLegroomExtra["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirlineSeatLegroomExtra["size"];
}
interface RuxIconAirlineSeatLegroomExtraEvents {
}
interface RuxIconAirlineSeatLegroomExtraSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirlineSeatLegroomExtra extends SvelteComponent {
    $$prop_def: RuxIconAirlineSeatLegroomExtraProps;
    $$events_def: RuxIconAirlineSeatLegroomExtraEvents;
    $$slot_def: RuxIconAirlineSeatLegroomExtraSlots;
    $on<K extends keyof RuxIconAirlineSeatLegroomExtraEvents>(type: K, callback: (e: RuxIconAirlineSeatLegroomExtraEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirlineSeatLegroomExtraProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirlineSeatLegroomExtraElement | undefined;
}
export default RuxIconAirlineSeatLegroomExtra;
