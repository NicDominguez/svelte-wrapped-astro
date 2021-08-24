import { Components } from '@astrouxds/astro-web-components';
interface RuxIconYoutubeSearchedForProps {
    /** The fill color for the icon */
    color?: Components.RuxIconYoutubeSearchedFor["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconYoutubeSearchedFor["size"];
}
interface RuxIconYoutubeSearchedForEvents {
}
interface RuxIconYoutubeSearchedForSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconYoutubeSearchedFor extends SvelteComponent {
    $$prop_def: RuxIconYoutubeSearchedForProps;
    $$events_def: RuxIconYoutubeSearchedForEvents;
    $$slot_def: RuxIconYoutubeSearchedForSlots;
    $on<K extends keyof RuxIconYoutubeSearchedForEvents>(type: K, callback: (e: RuxIconYoutubeSearchedForEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconYoutubeSearchedForProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconYoutubeSearchedForElement | undefined;
}
export default RuxIconYoutubeSearchedFor;
