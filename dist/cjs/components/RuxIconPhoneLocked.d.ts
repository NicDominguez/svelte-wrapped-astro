import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhoneLockedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhoneLocked["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhoneLocked["size"];
}
interface RuxIconPhoneLockedEvents {
}
interface RuxIconPhoneLockedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhoneLocked extends SvelteComponent {
    $$prop_def: RuxIconPhoneLockedProps;
    $$events_def: RuxIconPhoneLockedEvents;
    $$slot_def: RuxIconPhoneLockedSlots;
    $on<K extends keyof RuxIconPhoneLockedEvents>(type: K, callback: (e: RuxIconPhoneLockedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhoneLockedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhoneLockedElement | undefined;
}
export default RuxIconPhoneLocked;
