import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMovieCreationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMovieCreation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMovieCreation["size"];
}
interface RuxIconMovieCreationEvents {
}
interface RuxIconMovieCreationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMovieCreation extends SvelteComponent {
    $$prop_def: RuxIconMovieCreationProps;
    $$events_def: RuxIconMovieCreationEvents;
    $$slot_def: RuxIconMovieCreationSlots;
    $on<K extends keyof RuxIconMovieCreationEvents>(type: K, callback: (e: RuxIconMovieCreationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMovieCreationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMovieCreationElement | undefined;
}
export default RuxIconMovieCreation;
