import { Components } from '@astrouxds/astro-web-components';
interface RuxIconModeCommentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconModeComment["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconModeComment["size"];
}
interface RuxIconModeCommentEvents {
}
interface RuxIconModeCommentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconModeComment extends SvelteComponent {
    $$prop_def: RuxIconModeCommentProps;
    $$events_def: RuxIconModeCommentEvents;
    $$slot_def: RuxIconModeCommentSlots;
    $on<K extends keyof RuxIconModeCommentEvents>(type: K, callback: (e: RuxIconModeCommentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconModeCommentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconModeCommentElement | undefined;
}
export default RuxIconModeComment;
