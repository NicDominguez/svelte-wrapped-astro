import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFavoriteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFavorite["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFavorite["size"];
}
interface RuxIconFavoriteEvents {
}
interface RuxIconFavoriteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFavorite extends SvelteComponent {
    $$prop_def: RuxIconFavoriteProps;
    $$events_def: RuxIconFavoriteEvents;
    $$slot_def: RuxIconFavoriteSlots;
    $on<K extends keyof RuxIconFavoriteEvents>(type: K, callback: (e: RuxIconFavoriteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFavoriteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFavoriteElement | undefined;
}
export default RuxIconFavorite;
