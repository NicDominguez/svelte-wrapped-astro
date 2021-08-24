import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGamesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGames["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGames["size"];
}
interface RuxIconGamesEvents {
}
interface RuxIconGamesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGames extends SvelteComponent {
    $$prop_def: RuxIconGamesProps;
    $$events_def: RuxIconGamesEvents;
    $$slot_def: RuxIconGamesSlots;
    $on<K extends keyof RuxIconGamesEvents>(type: K, callback: (e: RuxIconGamesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGamesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGamesElement | undefined;
}
export default RuxIconGames;
