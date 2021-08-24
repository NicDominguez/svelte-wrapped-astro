import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPlaylistAddCheckProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPlaylistAddCheck["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPlaylistAddCheck["size"];
}
interface RuxIconPlaylistAddCheckEvents {
}
interface RuxIconPlaylistAddCheckSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPlaylistAddCheck extends SvelteComponent {
    $$prop_def: RuxIconPlaylistAddCheckProps;
    $$events_def: RuxIconPlaylistAddCheckEvents;
    $$slot_def: RuxIconPlaylistAddCheckSlots;
    $on<K extends keyof RuxIconPlaylistAddCheckEvents>(type: K, callback: (e: RuxIconPlaylistAddCheckEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPlaylistAddCheckProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPlaylistAddCheckElement | undefined;
}
export default RuxIconPlaylistAddCheck;
