import { Components } from '@astrouxds/astro-web-components';
interface RuxIconChatBubbleOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconChatBubbleOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconChatBubbleOutline["size"];
}
interface RuxIconChatBubbleOutlineEvents {
}
interface RuxIconChatBubbleOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconChatBubbleOutline extends SvelteComponent {
    $$prop_def: RuxIconChatBubbleOutlineProps;
    $$events_def: RuxIconChatBubbleOutlineEvents;
    $$slot_def: RuxIconChatBubbleOutlineSlots;
    $on<K extends keyof RuxIconChatBubbleOutlineEvents>(type: K, callback: (e: RuxIconChatBubbleOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconChatBubbleOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconChatBubbleOutlineElement | undefined;
}
export default RuxIconChatBubbleOutline;
