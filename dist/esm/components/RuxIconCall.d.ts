import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCallProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCall["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCall["size"];
}
interface RuxIconCallEvents {
}
interface RuxIconCallSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCall extends SvelteComponent {
    $$prop_def: RuxIconCallProps;
    $$events_def: RuxIconCallEvents;
    $$slot_def: RuxIconCallSlots;
    $on<K extends keyof RuxIconCallEvents>(type: K, callback: (e: RuxIconCallEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCallProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCallElement | undefined;
}
export default RuxIconCall;
