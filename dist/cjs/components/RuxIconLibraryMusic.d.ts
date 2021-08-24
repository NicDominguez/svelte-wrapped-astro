import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLibraryMusicProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLibraryMusic["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLibraryMusic["size"];
}
interface RuxIconLibraryMusicEvents {
}
interface RuxIconLibraryMusicSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLibraryMusic extends SvelteComponent {
    $$prop_def: RuxIconLibraryMusicProps;
    $$events_def: RuxIconLibraryMusicEvents;
    $$slot_def: RuxIconLibraryMusicSlots;
    $on<K extends keyof RuxIconLibraryMusicEvents>(type: K, callback: (e: RuxIconLibraryMusicEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLibraryMusicProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLibraryMusicElement | undefined;
}
export default RuxIconLibraryMusic;
