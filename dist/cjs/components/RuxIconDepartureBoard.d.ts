import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDepartureBoardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDepartureBoard["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDepartureBoard["size"];
}
interface RuxIconDepartureBoardEvents {
}
interface RuxIconDepartureBoardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDepartureBoard extends SvelteComponent {
    $$prop_def: RuxIconDepartureBoardProps;
    $$events_def: RuxIconDepartureBoardEvents;
    $$slot_def: RuxIconDepartureBoardSlots;
    $on<K extends keyof RuxIconDepartureBoardEvents>(type: K, callback: (e: RuxIconDepartureBoardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDepartureBoardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDepartureBoardElement | undefined;
}
export default RuxIconDepartureBoard;
