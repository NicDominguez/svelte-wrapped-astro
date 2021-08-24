import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMissedVideoCallProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMissedVideoCall["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMissedVideoCall["size"];
}
interface RuxIconMissedVideoCallEvents {
}
interface RuxIconMissedVideoCallSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMissedVideoCall extends SvelteComponent {
    $$prop_def: RuxIconMissedVideoCallProps;
    $$events_def: RuxIconMissedVideoCallEvents;
    $$slot_def: RuxIconMissedVideoCallSlots;
    $on<K extends keyof RuxIconMissedVideoCallEvents>(type: K, callback: (e: RuxIconMissedVideoCallEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMissedVideoCallProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMissedVideoCallElement | undefined;
}
export default RuxIconMissedVideoCall;
