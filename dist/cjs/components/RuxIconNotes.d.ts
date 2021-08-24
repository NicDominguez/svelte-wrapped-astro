import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNotesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNotes["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNotes["size"];
}
interface RuxIconNotesEvents {
}
interface RuxIconNotesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNotes extends SvelteComponent {
    $$prop_def: RuxIconNotesProps;
    $$events_def: RuxIconNotesEvents;
    $$slot_def: RuxIconNotesSlots;
    $on<K extends keyof RuxIconNotesEvents>(type: K, callback: (e: RuxIconNotesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNotesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNotesElement | undefined;
}
export default RuxIconNotes;
