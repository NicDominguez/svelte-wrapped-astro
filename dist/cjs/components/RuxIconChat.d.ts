import { Components } from '@astrouxds/astro-web-components';
interface RuxIconChatProps {
    /** The fill color for the icon */
    color?: Components.RuxIconChat["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconChat["size"];
}
interface RuxIconChatEvents {
}
interface RuxIconChatSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconChat extends SvelteComponent {
    $$prop_def: RuxIconChatProps;
    $$events_def: RuxIconChatEvents;
    $$slot_def: RuxIconChatSlots;
    $on<K extends keyof RuxIconChatEvents>(type: K, callback: (e: RuxIconChatEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconChatProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconChatElement | undefined;
}
export default RuxIconChat;
