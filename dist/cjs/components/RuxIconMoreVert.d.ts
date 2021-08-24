import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMoreVertProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMoreVert["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMoreVert["size"];
}
interface RuxIconMoreVertEvents {
}
interface RuxIconMoreVertSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMoreVert extends SvelteComponent {
    $$prop_def: RuxIconMoreVertProps;
    $$events_def: RuxIconMoreVertEvents;
    $$slot_def: RuxIconMoreVertSlots;
    $on<K extends keyof RuxIconMoreVertEvents>(type: K, callback: (e: RuxIconMoreVertEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMoreVertProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMoreVertElement | undefined;
}
export default RuxIconMoreVert;
