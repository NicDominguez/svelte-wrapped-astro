import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAccessibleForwardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAccessibleForward["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAccessibleForward["size"];
}
interface RuxIconAccessibleForwardEvents {
}
interface RuxIconAccessibleForwardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAccessibleForward extends SvelteComponent {
    $$prop_def: RuxIconAccessibleForwardProps;
    $$events_def: RuxIconAccessibleForwardEvents;
    $$slot_def: RuxIconAccessibleForwardSlots;
    $on<K extends keyof RuxIconAccessibleForwardEvents>(type: K, callback: (e: RuxIconAccessibleForwardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAccessibleForwardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAccessibleForwardElement | undefined;
}
export default RuxIconAccessibleForward;
