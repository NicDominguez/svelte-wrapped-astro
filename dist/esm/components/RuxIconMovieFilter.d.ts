import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMovieFilterProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMovieFilter["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMovieFilter["size"];
}
interface RuxIconMovieFilterEvents {
}
interface RuxIconMovieFilterSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMovieFilter extends SvelteComponent {
    $$prop_def: RuxIconMovieFilterProps;
    $$events_def: RuxIconMovieFilterEvents;
    $$slot_def: RuxIconMovieFilterSlots;
    $on<K extends keyof RuxIconMovieFilterEvents>(type: K, callback: (e: RuxIconMovieFilterEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMovieFilterProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMovieFilterElement | undefined;
}
export default RuxIconMovieFilter;
