import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalTaxiProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalTaxi["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalTaxi["size"];
}
interface RuxIconLocalTaxiEvents {
}
interface RuxIconLocalTaxiSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalTaxi extends SvelteComponent {
    $$prop_def: RuxIconLocalTaxiProps;
    $$events_def: RuxIconLocalTaxiEvents;
    $$slot_def: RuxIconLocalTaxiSlots;
    $on<K extends keyof RuxIconLocalTaxiEvents>(type: K, callback: (e: RuxIconLocalTaxiEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalTaxiProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalTaxiElement | undefined;
}
export default RuxIconLocalTaxi;
