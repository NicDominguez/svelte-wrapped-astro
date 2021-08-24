import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWifiTetheringProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWifiTethering["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWifiTethering["size"];
}
interface RuxIconWifiTetheringEvents {
}
interface RuxIconWifiTetheringSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWifiTethering extends SvelteComponent {
    $$prop_def: RuxIconWifiTetheringProps;
    $$events_def: RuxIconWifiTetheringEvents;
    $$slot_def: RuxIconWifiTetheringSlots;
    $on<K extends keyof RuxIconWifiTetheringEvents>(type: K, callback: (e: RuxIconWifiTetheringEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWifiTetheringProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWifiTetheringElement | undefined;
}
export default RuxIconWifiTethering;
