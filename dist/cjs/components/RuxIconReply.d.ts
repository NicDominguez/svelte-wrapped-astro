import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReplyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconReply["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReply["size"];
}
interface RuxIconReplyEvents {
}
interface RuxIconReplySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReply extends SvelteComponent {
    $$prop_def: RuxIconReplyProps;
    $$events_def: RuxIconReplyEvents;
    $$slot_def: RuxIconReplySlots;
    $on<K extends keyof RuxIconReplyEvents>(type: K, callback: (e: RuxIconReplyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconReplyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReplyElement | undefined;
}
export default RuxIconReply;
