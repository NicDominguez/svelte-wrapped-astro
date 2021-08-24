import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirlineSeatLegroomNormalProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirlineSeatLegroomNormal["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirlineSeatLegroomNormal["size"];
}
interface RuxIconAirlineSeatLegroomNormalEvents {
}
interface RuxIconAirlineSeatLegroomNormalSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirlineSeatLegroomNormal extends SvelteComponent {
    $$prop_def: RuxIconAirlineSeatLegroomNormalProps;
    $$events_def: RuxIconAirlineSeatLegroomNormalEvents;
    $$slot_def: RuxIconAirlineSeatLegroomNormalSlots;
    $on<K extends keyof RuxIconAirlineSeatLegroomNormalEvents>(type: K, callback: (e: RuxIconAirlineSeatLegroomNormalEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirlineSeatLegroomNormalProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirlineSeatLegroomNormalElement | undefined;
}
export default RuxIconAirlineSeatLegroomNormal;
