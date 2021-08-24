import { Components } from '@astrouxds/astro-web-components';
interface RuxIconScoreProps {
    /** The fill color for the icon */
    color?: Components.RuxIconScore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconScore["size"];
}
interface RuxIconScoreEvents {
}
interface RuxIconScoreSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconScore extends SvelteComponent {
    $$prop_def: RuxIconScoreProps;
    $$events_def: RuxIconScoreEvents;
    $$slot_def: RuxIconScoreSlots;
    $on<K extends keyof RuxIconScoreEvents>(type: K, callback: (e: RuxIconScoreEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconScoreProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconScoreElement | undefined;
}
export default RuxIconScore;
