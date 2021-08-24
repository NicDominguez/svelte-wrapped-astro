import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMusicNoteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMusicNote["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMusicNote["size"];
}
interface RuxIconMusicNoteEvents {
}
interface RuxIconMusicNoteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMusicNote extends SvelteComponent {
    $$prop_def: RuxIconMusicNoteProps;
    $$events_def: RuxIconMusicNoteEvents;
    $$slot_def: RuxIconMusicNoteSlots;
    $on<K extends keyof RuxIconMusicNoteEvents>(type: K, callback: (e: RuxIconMusicNoteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMusicNoteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMusicNoteElement | undefined;
}
export default RuxIconMusicNote;
