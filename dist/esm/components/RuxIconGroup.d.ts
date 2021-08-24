import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGroupProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGroup["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGroup["size"];
}
interface RuxIconGroupEvents {
}
interface RuxIconGroupSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGroup extends SvelteComponent {
    $$prop_def: RuxIconGroupProps;
    $$events_def: RuxIconGroupEvents;
    $$slot_def: RuxIconGroupSlots;
    $on<K extends keyof RuxIconGroupEvents>(type: K, callback: (e: RuxIconGroupEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGroupProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGroupElement | undefined;
}
export default RuxIconGroup;
