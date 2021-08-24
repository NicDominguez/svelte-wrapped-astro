import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDragIndicatorProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDragIndicator["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDragIndicator["size"];
}
interface RuxIconDragIndicatorEvents {
}
interface RuxIconDragIndicatorSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDragIndicator extends SvelteComponent {
    $$prop_def: RuxIconDragIndicatorProps;
    $$events_def: RuxIconDragIndicatorEvents;
    $$slot_def: RuxIconDragIndicatorSlots;
    $on<K extends keyof RuxIconDragIndicatorEvents>(type: K, callback: (e: RuxIconDragIndicatorEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDragIndicatorProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDragIndicatorElement | undefined;
}
export default RuxIconDragIndicator;
