import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCachedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCached["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCached["size"];
}
interface RuxIconCachedEvents {
}
interface RuxIconCachedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCached extends SvelteComponent {
    $$prop_def: RuxIconCachedProps;
    $$events_def: RuxIconCachedEvents;
    $$slot_def: RuxIconCachedSlots;
    $on<K extends keyof RuxIconCachedEvents>(type: K, callback: (e: RuxIconCachedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCachedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCachedElement | undefined;
}
export default RuxIconCached;
