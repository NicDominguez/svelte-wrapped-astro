import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirplanemodeInactiveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirplanemodeInactive["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirplanemodeInactive["size"];
}
interface RuxIconAirplanemodeInactiveEvents {
}
interface RuxIconAirplanemodeInactiveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirplanemodeInactive extends SvelteComponent {
    $$prop_def: RuxIconAirplanemodeInactiveProps;
    $$events_def: RuxIconAirplanemodeInactiveEvents;
    $$slot_def: RuxIconAirplanemodeInactiveSlots;
    $on<K extends keyof RuxIconAirplanemodeInactiveEvents>(type: K, callback: (e: RuxIconAirplanemodeInactiveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirplanemodeInactiveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirplanemodeInactiveElement | undefined;
}
export default RuxIconAirplanemodeInactive;
