import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVideoCallProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVideoCall["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVideoCall["size"];
}
interface RuxIconVideoCallEvents {
}
interface RuxIconVideoCallSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVideoCall extends SvelteComponent {
    $$prop_def: RuxIconVideoCallProps;
    $$events_def: RuxIconVideoCallEvents;
    $$slot_def: RuxIconVideoCallSlots;
    $on<K extends keyof RuxIconVideoCallEvents>(type: K, callback: (e: RuxIconVideoCallEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVideoCallProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVideoCallElement | undefined;
}
export default RuxIconVideoCall;
