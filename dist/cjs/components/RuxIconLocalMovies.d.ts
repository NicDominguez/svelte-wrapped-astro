import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalMoviesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalMovies["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalMovies["size"];
}
interface RuxIconLocalMoviesEvents {
}
interface RuxIconLocalMoviesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalMovies extends SvelteComponent {
    $$prop_def: RuxIconLocalMoviesProps;
    $$events_def: RuxIconLocalMoviesEvents;
    $$slot_def: RuxIconLocalMoviesSlots;
    $on<K extends keyof RuxIconLocalMoviesEvents>(type: K, callback: (e: RuxIconLocalMoviesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalMoviesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalMoviesElement | undefined;
}
export default RuxIconLocalMovies;
