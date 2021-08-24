import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFiberDvrProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFiberDvr["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFiberDvr["size"];
}
interface RuxIconFiberDvrEvents {
}
interface RuxIconFiberDvrSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFiberDvr extends SvelteComponent {
    $$prop_def: RuxIconFiberDvrProps;
    $$events_def: RuxIconFiberDvrEvents;
    $$slot_def: RuxIconFiberDvrSlots;
    $on<K extends keyof RuxIconFiberDvrEvents>(type: K, callback: (e: RuxIconFiberDvrEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFiberDvrProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFiberDvrElement | undefined;
}
export default RuxIconFiberDvr;
