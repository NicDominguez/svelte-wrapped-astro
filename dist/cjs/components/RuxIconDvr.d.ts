import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDvrProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDvr["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDvr["size"];
}
interface RuxIconDvrEvents {
}
interface RuxIconDvrSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDvr extends SvelteComponent {
    $$prop_def: RuxIconDvrProps;
    $$events_def: RuxIconDvrEvents;
    $$slot_def: RuxIconDvrSlots;
    $on<K extends keyof RuxIconDvrEvents>(type: K, callback: (e: RuxIconDvrEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDvrProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDvrElement | undefined;
}
export default RuxIconDvr;
