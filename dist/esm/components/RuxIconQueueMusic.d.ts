import { Components } from '@astrouxds/astro-web-components';
interface RuxIconQueueMusicProps {
    /** The fill color for the icon */
    color?: Components.RuxIconQueueMusic["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconQueueMusic["size"];
}
interface RuxIconQueueMusicEvents {
}
interface RuxIconQueueMusicSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconQueueMusic extends SvelteComponent {
    $$prop_def: RuxIconQueueMusicProps;
    $$events_def: RuxIconQueueMusicEvents;
    $$slot_def: RuxIconQueueMusicSlots;
    $on<K extends keyof RuxIconQueueMusicEvents>(type: K, callback: (e: RuxIconQueueMusicEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconQueueMusicProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconQueueMusicElement | undefined;
}
export default RuxIconQueueMusic;
