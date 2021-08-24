import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMovieProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMovie["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMovie["size"];
}
interface RuxIconMovieEvents {
}
interface RuxIconMovieSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMovie extends SvelteComponent {
    $$prop_def: RuxIconMovieProps;
    $$events_def: RuxIconMovieEvents;
    $$slot_def: RuxIconMovieSlots;
    $on<K extends keyof RuxIconMovieEvents>(type: K, callback: (e: RuxIconMovieEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMovieProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMovieElement | undefined;
}
export default RuxIconMovie;
