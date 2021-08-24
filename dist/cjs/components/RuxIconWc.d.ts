import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWcProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWc["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWc["size"];
}
interface RuxIconWcEvents {
}
interface RuxIconWcSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWc extends SvelteComponent {
    $$prop_def: RuxIconWcProps;
    $$events_def: RuxIconWcEvents;
    $$slot_def: RuxIconWcSlots;
    $on<K extends keyof RuxIconWcEvents>(type: K, callback: (e: RuxIconWcEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWcProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWcElement | undefined;
}
export default RuxIconWc;
