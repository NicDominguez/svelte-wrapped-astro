import { Components } from '@astrouxds/astro-web-components';
interface RuxIconOfflinePinProps {
    /** The fill color for the icon */
    color?: Components.RuxIconOfflinePin["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconOfflinePin["size"];
}
interface RuxIconOfflinePinEvents {
}
interface RuxIconOfflinePinSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconOfflinePin extends SvelteComponent {
    $$prop_def: RuxIconOfflinePinProps;
    $$events_def: RuxIconOfflinePinEvents;
    $$slot_def: RuxIconOfflinePinSlots;
    $on<K extends keyof RuxIconOfflinePinEvents>(type: K, callback: (e: RuxIconOfflinePinEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconOfflinePinProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconOfflinePinElement | undefined;
}
export default RuxIconOfflinePin;
