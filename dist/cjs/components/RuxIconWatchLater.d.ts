import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWatchLaterProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWatchLater["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWatchLater["size"];
}
interface RuxIconWatchLaterEvents {
}
interface RuxIconWatchLaterSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWatchLater extends SvelteComponent {
    $$prop_def: RuxIconWatchLaterProps;
    $$events_def: RuxIconWatchLaterEvents;
    $$slot_def: RuxIconWatchLaterSlots;
    $on<K extends keyof RuxIconWatchLaterEvents>(type: K, callback: (e: RuxIconWatchLaterEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWatchLaterProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWatchLaterElement | undefined;
}
export default RuxIconWatchLater;
