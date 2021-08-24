import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlagProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlag["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlag["size"];
}
interface RuxIconFlagEvents {
}
interface RuxIconFlagSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlag extends SvelteComponent {
    $$prop_def: RuxIconFlagProps;
    $$events_def: RuxIconFlagEvents;
    $$slot_def: RuxIconFlagSlots;
    $on<K extends keyof RuxIconFlagEvents>(type: K, callback: (e: RuxIconFlagEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlagProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlagElement | undefined;
}
export default RuxIconFlag;
