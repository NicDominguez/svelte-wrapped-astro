import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVoiceChatProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVoiceChat["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVoiceChat["size"];
}
interface RuxIconVoiceChatEvents {
}
interface RuxIconVoiceChatSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVoiceChat extends SvelteComponent {
    $$prop_def: RuxIconVoiceChatProps;
    $$events_def: RuxIconVoiceChatEvents;
    $$slot_def: RuxIconVoiceChatSlots;
    $on<K extends keyof RuxIconVoiceChatEvents>(type: K, callback: (e: RuxIconVoiceChatEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVoiceChatProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVoiceChatElement | undefined;
}
export default RuxIconVoiceChat;
