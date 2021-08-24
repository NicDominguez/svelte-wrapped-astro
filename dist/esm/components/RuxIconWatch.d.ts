import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWatchProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWatch["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWatch["size"];
}
interface RuxIconWatchEvents {
}
interface RuxIconWatchSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWatch extends SvelteComponent {
    $$prop_def: RuxIconWatchProps;
    $$events_def: RuxIconWatchEvents;
    $$slot_def: RuxIconWatchSlots;
    $on<K extends keyof RuxIconWatchEvents>(type: K, callback: (e: RuxIconWatchEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWatchProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWatchElement | undefined;
}
export default RuxIconWatch;
