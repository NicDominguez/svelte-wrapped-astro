import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhoneForwardedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhoneForwarded["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhoneForwarded["size"];
}
interface RuxIconPhoneForwardedEvents {
}
interface RuxIconPhoneForwardedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhoneForwarded extends SvelteComponent {
    $$prop_def: RuxIconPhoneForwardedProps;
    $$events_def: RuxIconPhoneForwardedEvents;
    $$slot_def: RuxIconPhoneForwardedSlots;
    $on<K extends keyof RuxIconPhoneForwardedEvents>(type: K, callback: (e: RuxIconPhoneForwardedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhoneForwardedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhoneForwardedElement | undefined;
}
export default RuxIconPhoneForwarded;
