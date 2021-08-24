import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPhoneInTalkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPhoneInTalk["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPhoneInTalk["size"];
}
interface RuxIconPhoneInTalkEvents {
}
interface RuxIconPhoneInTalkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPhoneInTalk extends SvelteComponent {
    $$prop_def: RuxIconPhoneInTalkProps;
    $$events_def: RuxIconPhoneInTalkEvents;
    $$slot_def: RuxIconPhoneInTalkSlots;
    $on<K extends keyof RuxIconPhoneInTalkEvents>(type: K, callback: (e: RuxIconPhoneInTalkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPhoneInTalkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPhoneInTalkElement | undefined;
}
export default RuxIconPhoneInTalk;
