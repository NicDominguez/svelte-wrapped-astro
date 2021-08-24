import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHourglassEmptyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHourglassEmpty["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHourglassEmpty["size"];
}
interface RuxIconHourglassEmptyEvents {
}
interface RuxIconHourglassEmptySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHourglassEmpty extends SvelteComponent {
    $$prop_def: RuxIconHourglassEmptyProps;
    $$events_def: RuxIconHourglassEmptyEvents;
    $$slot_def: RuxIconHourglassEmptySlots;
    $on<K extends keyof RuxIconHourglassEmptyEvents>(type: K, callback: (e: RuxIconHourglassEmptyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHourglassEmptyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHourglassEmptyElement | undefined;
}
export default RuxIconHourglassEmpty;
