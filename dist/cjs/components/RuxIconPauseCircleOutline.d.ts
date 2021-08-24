import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPauseCircleOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPauseCircleOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPauseCircleOutline["size"];
}
interface RuxIconPauseCircleOutlineEvents {
}
interface RuxIconPauseCircleOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPauseCircleOutline extends SvelteComponent {
    $$prop_def: RuxIconPauseCircleOutlineProps;
    $$events_def: RuxIconPauseCircleOutlineEvents;
    $$slot_def: RuxIconPauseCircleOutlineSlots;
    $on<K extends keyof RuxIconPauseCircleOutlineEvents>(type: K, callback: (e: RuxIconPauseCircleOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPauseCircleOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPauseCircleOutlineElement | undefined;
}
export default RuxIconPauseCircleOutline;
