import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPartyModeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPartyMode["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPartyMode["size"];
}
interface RuxIconPartyModeEvents {
}
interface RuxIconPartyModeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPartyMode extends SvelteComponent {
    $$prop_def: RuxIconPartyModeProps;
    $$events_def: RuxIconPartyModeEvents;
    $$slot_def: RuxIconPartyModeSlots;
    $on<K extends keyof RuxIconPartyModeEvents>(type: K, callback: (e: RuxIconPartyModeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPartyModeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPartyModeElement | undefined;
}
export default RuxIconPartyMode;
