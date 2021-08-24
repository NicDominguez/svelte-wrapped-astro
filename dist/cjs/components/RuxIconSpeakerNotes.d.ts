import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSpeakerNotesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSpeakerNotes["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSpeakerNotes["size"];
}
interface RuxIconSpeakerNotesEvents {
}
interface RuxIconSpeakerNotesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSpeakerNotes extends SvelteComponent {
    $$prop_def: RuxIconSpeakerNotesProps;
    $$events_def: RuxIconSpeakerNotesEvents;
    $$slot_def: RuxIconSpeakerNotesSlots;
    $on<K extends keyof RuxIconSpeakerNotesEvents>(type: K, callback: (e: RuxIconSpeakerNotesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSpeakerNotesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSpeakerNotesElement | undefined;
}
export default RuxIconSpeakerNotes;
