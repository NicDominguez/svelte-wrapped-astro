import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHighlightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHighlight["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHighlight["size"];
}
interface RuxIconHighlightEvents {
}
interface RuxIconHighlightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHighlight extends SvelteComponent {
    $$prop_def: RuxIconHighlightProps;
    $$events_def: RuxIconHighlightEvents;
    $$slot_def: RuxIconHighlightSlots;
    $on<K extends keyof RuxIconHighlightEvents>(type: K, callback: (e: RuxIconHighlightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHighlightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHighlightElement | undefined;
}
export default RuxIconHighlight;
