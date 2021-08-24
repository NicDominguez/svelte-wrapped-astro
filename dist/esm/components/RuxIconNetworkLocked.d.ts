import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNetworkLockedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNetworkLocked["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNetworkLocked["size"];
}
interface RuxIconNetworkLockedEvents {
}
interface RuxIconNetworkLockedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNetworkLocked extends SvelteComponent {
    $$prop_def: RuxIconNetworkLockedProps;
    $$events_def: RuxIconNetworkLockedEvents;
    $$slot_def: RuxIconNetworkLockedSlots;
    $on<K extends keyof RuxIconNetworkLockedEvents>(type: K, callback: (e: RuxIconNetworkLockedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNetworkLockedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNetworkLockedElement | undefined;
}
export default RuxIconNetworkLocked;
