import { Components } from '@astrouxds/astro-web-components';
interface RuxIconOutlinedFlagProps {
    /** The fill color for the icon */
    color?: Components.RuxIconOutlinedFlag["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconOutlinedFlag["size"];
}
interface RuxIconOutlinedFlagEvents {
}
interface RuxIconOutlinedFlagSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconOutlinedFlag extends SvelteComponent {
    $$prop_def: RuxIconOutlinedFlagProps;
    $$events_def: RuxIconOutlinedFlagEvents;
    $$slot_def: RuxIconOutlinedFlagSlots;
    $on<K extends keyof RuxIconOutlinedFlagEvents>(type: K, callback: (e: RuxIconOutlinedFlagEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconOutlinedFlagProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconOutlinedFlagElement | undefined;
}
export default RuxIconOutlinedFlag;
