import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAttachmentProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAttachment["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAttachment["size"];
}
interface RuxIconAttachmentEvents {
}
interface RuxIconAttachmentSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAttachment extends SvelteComponent {
    $$prop_def: RuxIconAttachmentProps;
    $$events_def: RuxIconAttachmentEvents;
    $$slot_def: RuxIconAttachmentSlots;
    $on<K extends keyof RuxIconAttachmentEvents>(type: K, callback: (e: RuxIconAttachmentEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAttachmentProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAttachmentElement | undefined;
}
export default RuxIconAttachment;
