import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSwapVertProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSwapVert["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSwapVert["size"];
}
interface RuxIconSwapVertEvents {
}
interface RuxIconSwapVertSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSwapVert extends SvelteComponent {
    $$prop_def: RuxIconSwapVertProps;
    $$events_def: RuxIconSwapVertEvents;
    $$slot_def: RuxIconSwapVertSlots;
    $on<K extends keyof RuxIconSwapVertEvents>(type: K, callback: (e: RuxIconSwapVertEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSwapVertProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSwapVertElement | undefined;
}
export default RuxIconSwapVert;
