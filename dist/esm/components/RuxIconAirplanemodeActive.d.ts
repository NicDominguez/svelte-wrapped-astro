import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAirplanemodeActiveProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAirplanemodeActive["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAirplanemodeActive["size"];
}
interface RuxIconAirplanemodeActiveEvents {
}
interface RuxIconAirplanemodeActiveSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAirplanemodeActive extends SvelteComponent {
    $$prop_def: RuxIconAirplanemodeActiveProps;
    $$events_def: RuxIconAirplanemodeActiveEvents;
    $$slot_def: RuxIconAirplanemodeActiveSlots;
    $on<K extends keyof RuxIconAirplanemodeActiveEvents>(type: K, callback: (e: RuxIconAirplanemodeActiveEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAirplanemodeActiveProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAirplanemodeActiveElement | undefined;
}
export default RuxIconAirplanemodeActive;
