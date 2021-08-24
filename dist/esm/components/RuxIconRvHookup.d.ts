import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRvHookupProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRvHookup["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRvHookup["size"];
}
interface RuxIconRvHookupEvents {
}
interface RuxIconRvHookupSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRvHookup extends SvelteComponent {
    $$prop_def: RuxIconRvHookupProps;
    $$events_def: RuxIconRvHookupEvents;
    $$slot_def: RuxIconRvHookupSlots;
    $on<K extends keyof RuxIconRvHookupEvents>(type: K, callback: (e: RuxIconRvHookupEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRvHookupProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRvHookupElement | undefined;
}
export default RuxIconRvHookup;
