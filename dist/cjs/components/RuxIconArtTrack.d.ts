import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArtTrackProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArtTrack["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArtTrack["size"];
}
interface RuxIconArtTrackEvents {
}
interface RuxIconArtTrackSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArtTrack extends SvelteComponent {
    $$prop_def: RuxIconArtTrackProps;
    $$events_def: RuxIconArtTrackEvents;
    $$slot_def: RuxIconArtTrackSlots;
    $on<K extends keyof RuxIconArtTrackEvents>(type: K, callback: (e: RuxIconArtTrackEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArtTrackProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArtTrackElement | undefined;
}
export default RuxIconArtTrack;
