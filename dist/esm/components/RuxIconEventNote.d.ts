import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEventNoteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEventNote["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEventNote["size"];
}
interface RuxIconEventNoteEvents {
}
interface RuxIconEventNoteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEventNote extends SvelteComponent {
    $$prop_def: RuxIconEventNoteProps;
    $$events_def: RuxIconEventNoteEvents;
    $$slot_def: RuxIconEventNoteSlots;
    $on<K extends keyof RuxIconEventNoteEvents>(type: K, callback: (e: RuxIconEventNoteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEventNoteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEventNoteElement | undefined;
}
export default RuxIconEventNote;
