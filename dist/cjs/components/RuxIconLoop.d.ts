import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLoopProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLoop["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLoop["size"];
}
interface RuxIconLoopEvents {
}
interface RuxIconLoopSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLoop extends SvelteComponent {
    $$prop_def: RuxIconLoopProps;
    $$events_def: RuxIconLoopEvents;
    $$slot_def: RuxIconLoopSlots;
    $on<K extends keyof RuxIconLoopEvents>(type: K, callback: (e: RuxIconLoopEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLoopProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLoopElement | undefined;
}
export default RuxIconLoop;
