import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirplayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirplay["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirplay["size"];
}
interface RuxIconAirplayEvents {
}
interface RuxIconAirplaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirplay extends SvelteComponent {
    $$prop_def: RuxIconAirplayProps;
    $$events_def: RuxIconAirplayEvents;
    $$slot_def: RuxIconAirplaySlots;
    $on<K extends keyof RuxIconAirplayEvents>(type: K, callback: (e: RuxIconAirplayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirplayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirplayElement | undefined;
}
export default RuxIconAirplay;
