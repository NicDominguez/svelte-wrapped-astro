import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHelpOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHelpOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHelpOutline["size"];
}
interface RuxIconHelpOutlineEvents {
}
interface RuxIconHelpOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHelpOutline extends SvelteComponent {
    $$prop_def: RuxIconHelpOutlineProps;
    $$events_def: RuxIconHelpOutlineEvents;
    $$slot_def: RuxIconHelpOutlineSlots;
    $on<K extends keyof RuxIconHelpOutlineEvents>(type: K, callback: (e: RuxIconHelpOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHelpOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHelpOutlineElement | undefined;
}
export default RuxIconHelpOutline;
