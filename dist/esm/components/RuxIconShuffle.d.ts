import { Components } from '@astrouxds/astro-web-components';
interface RuxIconShuffleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconShuffle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconShuffle["size"];
}
interface RuxIconShuffleEvents {
}
interface RuxIconShuffleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconShuffle extends SvelteComponent {
    $$prop_def: RuxIconShuffleProps;
    $$events_def: RuxIconShuffleEvents;
    $$slot_def: RuxIconShuffleSlots;
    $on<K extends keyof RuxIconShuffleEvents>(type: K, callback: (e: RuxIconShuffleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconShuffleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconShuffleElement | undefined;
}
export default RuxIconShuffle;
