import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhoneCallbackProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhoneCallback["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhoneCallback["size"];
}
interface RuxIconPhoneCallbackEvents {
}
interface RuxIconPhoneCallbackSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhoneCallback extends SvelteComponent {
    $$prop_def: RuxIconPhoneCallbackProps;
    $$events_def: RuxIconPhoneCallbackEvents;
    $$slot_def: RuxIconPhoneCallbackSlots;
    $on<K extends keyof RuxIconPhoneCallbackEvents>(type: K, callback: (e: RuxIconPhoneCallbackEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhoneCallbackProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhoneCallbackElement | undefined;
}
export default RuxIconPhoneCallback;
