import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPlaylistPlayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPlaylistPlay["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPlaylistPlay["size"];
}
interface RuxIconPlaylistPlayEvents {
}
interface RuxIconPlaylistPlaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPlaylistPlay extends SvelteComponent {
    $$prop_def: RuxIconPlaylistPlayProps;
    $$events_def: RuxIconPlaylistPlayEvents;
    $$slot_def: RuxIconPlaylistPlaySlots;
    $on<K extends keyof RuxIconPlaylistPlayEvents>(type: K, callback: (e: RuxIconPlaylistPlayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPlaylistPlayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPlaylistPlayElement | undefined;
}
export default RuxIconPlaylistPlay;
