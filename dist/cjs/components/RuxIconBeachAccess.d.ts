import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBeachAccessProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBeachAccess["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBeachAccess["size"];
}
interface RuxIconBeachAccessEvents {
}
interface RuxIconBeachAccessSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBeachAccess extends SvelteComponent {
    $$prop_def: RuxIconBeachAccessProps;
    $$events_def: RuxIconBeachAccessEvents;
    $$slot_def: RuxIconBeachAccessSlots;
    $on<K extends keyof RuxIconBeachAccessEvents>(type: K, callback: (e: RuxIconBeachAccessEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBeachAccessProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBeachAccessElement | undefined;
}
export default RuxIconBeachAccess;
