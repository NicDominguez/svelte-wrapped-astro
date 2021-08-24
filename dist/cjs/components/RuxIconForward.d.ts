import { Components } from '@astrouxds/astro-web-components';
interface RuxIconForwardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconForward["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconForward["size"];
}
interface RuxIconForwardEvents {
}
interface RuxIconForwardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconForward extends SvelteComponent {
    $$prop_def: RuxIconForwardProps;
    $$events_def: RuxIconForwardEvents;
    $$slot_def: RuxIconForwardSlots;
    $on<K extends keyof RuxIconForwardEvents>(type: K, callback: (e: RuxIconForwardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconForwardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconForwardElement | undefined;
}
export default RuxIconForward;
