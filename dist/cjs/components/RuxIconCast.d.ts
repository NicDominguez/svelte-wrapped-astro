import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCastProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCast["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCast["size"];
}
interface RuxIconCastEvents {
}
interface RuxIconCastSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCast extends SvelteComponent {
    $$prop_def: RuxIconCastProps;
    $$events_def: RuxIconCastEvents;
    $$slot_def: RuxIconCastSlots;
    $on<K extends keyof RuxIconCastEvents>(type: K, callback: (e: RuxIconCastEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCastProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCastElement | undefined;
}
export default RuxIconCast;
