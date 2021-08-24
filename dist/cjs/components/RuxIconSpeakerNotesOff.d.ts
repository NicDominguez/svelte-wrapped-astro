import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSpeakerNotesOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSpeakerNotesOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSpeakerNotesOff["size"];
}
interface RuxIconSpeakerNotesOffEvents {
}
interface RuxIconSpeakerNotesOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSpeakerNotesOff extends SvelteComponent {
    $$prop_def: RuxIconSpeakerNotesOffProps;
    $$events_def: RuxIconSpeakerNotesOffEvents;
    $$slot_def: RuxIconSpeakerNotesOffSlots;
    $on<K extends keyof RuxIconSpeakerNotesOffEvents>(type: K, callback: (e: RuxIconSpeakerNotesOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSpeakerNotesOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSpeakerNotesOffElement | undefined;
}
export default RuxIconSpeakerNotesOff;
