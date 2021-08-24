import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCommentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconComment["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconComment["size"];
}
interface RuxIconCommentEvents {
}
interface RuxIconCommentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconComment extends SvelteComponent {
    $$prop_def: RuxIconCommentProps;
    $$events_def: RuxIconCommentEvents;
    $$slot_def: RuxIconCommentSlots;
    $on<K extends keyof RuxIconCommentEvents>(type: K, callback: (e: RuxIconCommentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCommentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCommentElement | undefined;
}
export default RuxIconComment;
