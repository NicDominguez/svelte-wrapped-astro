import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFastRewindProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFastRewind["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFastRewind["size"];
}
interface RuxIconFastRewindEvents {
}
interface RuxIconFastRewindSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFastRewind extends SvelteComponent {
    $$prop_def: RuxIconFastRewindProps;
    $$events_def: RuxIconFastRewindEvents;
    $$slot_def: RuxIconFastRewindSlots;
    $on<K extends keyof RuxIconFastRewindEvents>(type: K, callback: (e: RuxIconFastRewindEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFastRewindProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFastRewindElement | undefined;
}
export default RuxIconFastRewind;
