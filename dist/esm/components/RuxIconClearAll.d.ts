import { Components } from '@astrouxds/astro-web-components';
interface RuxIconClearAllProps {
    /** The fill color for the icon */
    color?: Components.RuxIconClearAll["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconClearAll["size"];
}
interface RuxIconClearAllEvents {
}
interface RuxIconClearAllSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconClearAll extends SvelteComponent {
    $$prop_def: RuxIconClearAllProps;
    $$events_def: RuxIconClearAllEvents;
    $$slot_def: RuxIconClearAllSlots;
    $on<K extends keyof RuxIconClearAllEvents>(type: K, callback: (e: RuxIconClearAllEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconClearAllProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconClearAllElement | undefined;
}
export default RuxIconClearAll;
