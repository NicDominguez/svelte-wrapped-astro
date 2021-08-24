import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInsertCommentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInsertComment["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInsertComment["size"];
}
interface RuxIconInsertCommentEvents {
}
interface RuxIconInsertCommentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInsertComment extends SvelteComponent {
    $$prop_def: RuxIconInsertCommentProps;
    $$events_def: RuxIconInsertCommentEvents;
    $$slot_def: RuxIconInsertCommentSlots;
    $on<K extends keyof RuxIconInsertCommentEvents>(type: K, callback: (e: RuxIconInsertCommentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInsertCommentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInsertCommentElement | undefined;
}
export default RuxIconInsertComment;
