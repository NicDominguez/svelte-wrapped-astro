import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNoteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNote["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNote["size"];
}
interface RuxIconNoteEvents {
}
interface RuxIconNoteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNote extends SvelteComponent {
    $$prop_def: RuxIconNoteProps;
    $$events_def: RuxIconNoteEvents;
    $$slot_def: RuxIconNoteSlots;
    $on<K extends keyof RuxIconNoteEvents>(type: K, callback: (e: RuxIconNoteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNoteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNoteElement | undefined;
}
export default RuxIconNote;
