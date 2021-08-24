import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHourglassFullProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHourglassFull["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHourglassFull["size"];
}
interface RuxIconHourglassFullEvents {
}
interface RuxIconHourglassFullSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHourglassFull extends SvelteComponent {
    $$prop_def: RuxIconHourglassFullProps;
    $$events_def: RuxIconHourglassFullEvents;
    $$slot_def: RuxIconHourglassFullSlots;
    $on<K extends keyof RuxIconHourglassFullEvents>(type: K, callback: (e: RuxIconHourglassFullEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHourglassFullProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHourglassFullElement | undefined;
}
export default RuxIconHourglassFull;
