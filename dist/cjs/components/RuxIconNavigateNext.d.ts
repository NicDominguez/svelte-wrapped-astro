import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNavigateNextProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNavigateNext["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNavigateNext["size"];
}
interface RuxIconNavigateNextEvents {
}
interface RuxIconNavigateNextSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNavigateNext extends SvelteComponent {
    $$prop_def: RuxIconNavigateNextProps;
    $$events_def: RuxIconNavigateNextEvents;
    $$slot_def: RuxIconNavigateNextSlots;
    $on<K extends keyof RuxIconNavigateNextEvents>(type: K, callback: (e: RuxIconNavigateNextEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNavigateNextProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNavigateNextElement | undefined;
}
export default RuxIconNavigateNext;
