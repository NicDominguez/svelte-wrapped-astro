import { Components } from '@astrouxds/astro-web-components';
interface RuxIconChatBubbleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconChatBubble["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconChatBubble["size"];
}
interface RuxIconChatBubbleEvents {
}
interface RuxIconChatBubbleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconChatBubble extends SvelteComponent {
    $$prop_def: RuxIconChatBubbleProps;
    $$events_def: RuxIconChatBubbleEvents;
    $$slot_def: RuxIconChatBubbleSlots;
    $on<K extends keyof RuxIconChatBubbleEvents>(type: K, callback: (e: RuxIconChatBubbleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconChatBubbleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconChatBubbleElement | undefined;
}
export default RuxIconChatBubble;
