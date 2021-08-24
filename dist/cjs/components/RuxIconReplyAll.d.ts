import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReplyAllProps {
    /** The fill color for the icon */
    color?: Components.RuxIconReplyAll["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReplyAll["size"];
}
interface RuxIconReplyAllEvents {
}
interface RuxIconReplyAllSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReplyAll extends SvelteComponent {
    $$prop_def: RuxIconReplyAllProps;
    $$events_def: RuxIconReplyAllEvents;
    $$slot_def: RuxIconReplyAllSlots;
    $on<K extends keyof RuxIconReplyAllEvents>(type: K, callback: (e: RuxIconReplyAllEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconReplyAllProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReplyAllElement | undefined;
}
export default RuxIconReplyAll;
