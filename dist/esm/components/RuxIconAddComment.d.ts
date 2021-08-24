import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddCommentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddComment["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddComment["size"];
}
interface RuxIconAddCommentEvents {
}
interface RuxIconAddCommentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddComment extends SvelteComponent {
    $$prop_def: RuxIconAddCommentProps;
    $$events_def: RuxIconAddCommentEvents;
    $$slot_def: RuxIconAddCommentSlots;
    $on<K extends keyof RuxIconAddCommentEvents>(type: K, callback: (e: RuxIconAddCommentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddCommentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddCommentElement | undefined;
}
export default RuxIconAddComment;
