import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSeatProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSeat["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSeat["size"];
}
interface RuxIconSeatEvents {
}
interface RuxIconSeatSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSeat extends SvelteComponent {
    $$prop_def: RuxIconSeatProps;
    $$events_def: RuxIconSeatEvents;
    $$slot_def: RuxIconSeatSlots;
    $on<K extends keyof RuxIconSeatEvents>(type: K, callback: (e: RuxIconSeatEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSeatProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSeatElement | undefined;
}
export default RuxIconSeat;
