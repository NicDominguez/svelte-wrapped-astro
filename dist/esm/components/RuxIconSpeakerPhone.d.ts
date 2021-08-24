import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSpeakerPhoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSpeakerPhone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSpeakerPhone["size"];
}
interface RuxIconSpeakerPhoneEvents {
}
interface RuxIconSpeakerPhoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSpeakerPhone extends SvelteComponent {
    $$prop_def: RuxIconSpeakerPhoneProps;
    $$events_def: RuxIconSpeakerPhoneEvents;
    $$slot_def: RuxIconSpeakerPhoneSlots;
    $on<K extends keyof RuxIconSpeakerPhoneEvents>(type: K, callback: (e: RuxIconSpeakerPhoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSpeakerPhoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSpeakerPhoneElement | undefined;
}
export default RuxIconSpeakerPhone;
