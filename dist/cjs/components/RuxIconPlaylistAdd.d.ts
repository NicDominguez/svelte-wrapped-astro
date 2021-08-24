import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPlaylistAddProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPlaylistAdd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPlaylistAdd["size"];
}
interface RuxIconPlaylistAddEvents {
}
interface RuxIconPlaylistAddSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPlaylistAdd extends SvelteComponent {
    $$prop_def: RuxIconPlaylistAddProps;
    $$events_def: RuxIconPlaylistAddEvents;
    $$slot_def: RuxIconPlaylistAddSlots;
    $on<K extends keyof RuxIconPlaylistAddEvents>(type: K, callback: (e: RuxIconPlaylistAddEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPlaylistAddProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPlaylistAddElement | undefined;
}
export default RuxIconPlaylistAdd;
