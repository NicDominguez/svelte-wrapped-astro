import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSkipPreviousProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSkipPrevious["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSkipPrevious["size"];
}
interface RuxIconSkipPreviousEvents {
}
interface RuxIconSkipPreviousSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSkipPrevious extends SvelteComponent {
    $$prop_def: RuxIconSkipPreviousProps;
    $$events_def: RuxIconSkipPreviousEvents;
    $$slot_def: RuxIconSkipPreviousSlots;
    $on<K extends keyof RuxIconSkipPreviousEvents>(type: K, callback: (e: RuxIconSkipPreviousEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSkipPreviousProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSkipPreviousElement | undefined;
}
export default RuxIconSkipPrevious;
