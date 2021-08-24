import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFastForwardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFastForward["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFastForward["size"];
}
interface RuxIconFastForwardEvents {
}
interface RuxIconFastForwardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFastForward extends SvelteComponent {
    $$prop_def: RuxIconFastForwardProps;
    $$events_def: RuxIconFastForwardEvents;
    $$slot_def: RuxIconFastForwardSlots;
    $on<K extends keyof RuxIconFastForwardEvents>(type: K, callback: (e: RuxIconFastForwardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFastForwardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFastForwardElement | undefined;
}
export default RuxIconFastForward;
