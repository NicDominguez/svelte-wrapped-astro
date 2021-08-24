import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNoteAddProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNoteAdd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNoteAdd["size"];
}
interface RuxIconNoteAddEvents {
}
interface RuxIconNoteAddSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNoteAdd extends SvelteComponent {
    $$prop_def: RuxIconNoteAddProps;
    $$events_def: RuxIconNoteAddEvents;
    $$slot_def: RuxIconNoteAddSlots;
    $on<K extends keyof RuxIconNoteAddEvents>(type: K, callback: (e: RuxIconNoteAddEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNoteAddProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNoteAddElement | undefined;
}
export default RuxIconNoteAdd;
