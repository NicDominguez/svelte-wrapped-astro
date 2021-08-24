import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSubtitlesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSubtitles["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSubtitles["size"];
}
interface RuxIconSubtitlesEvents {
}
interface RuxIconSubtitlesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSubtitles extends SvelteComponent {
    $$prop_def: RuxIconSubtitlesProps;
    $$events_def: RuxIconSubtitlesEvents;
    $$slot_def: RuxIconSubtitlesSlots;
    $on<K extends keyof RuxIconSubtitlesEvents>(type: K, callback: (e: RuxIconSubtitlesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSubtitlesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSubtitlesElement | undefined;
}
export default RuxIconSubtitles;
