import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSyncProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSync["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSync["size"];
}
interface RuxIconSyncEvents {
}
interface RuxIconSyncSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSync extends SvelteComponent {
    $$prop_def: RuxIconSyncProps;
    $$events_def: RuxIconSyncEvents;
    $$slot_def: RuxIconSyncSlots;
    $on<K extends keyof RuxIconSyncEvents>(type: K, callback: (e: RuxIconSyncEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSyncProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSyncElement | undefined;
}
export default RuxIconSync;
