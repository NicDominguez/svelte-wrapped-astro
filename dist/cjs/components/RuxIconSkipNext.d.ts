import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSkipNextProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSkipNext["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSkipNext["size"];
}
interface RuxIconSkipNextEvents {
}
interface RuxIconSkipNextSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSkipNext extends SvelteComponent {
    $$prop_def: RuxIconSkipNextProps;
    $$events_def: RuxIconSkipNextEvents;
    $$slot_def: RuxIconSkipNextSlots;
    $on<K extends keyof RuxIconSkipNextEvents>(type: K, callback: (e: RuxIconSkipNextEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSkipNextProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSkipNextElement | undefined;
}
export default RuxIconSkipNext;
