import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCallSplitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCallSplit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCallSplit["size"];
}
interface RuxIconCallSplitEvents {
}
interface RuxIconCallSplitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCallSplit extends SvelteComponent {
    $$prop_def: RuxIconCallSplitProps;
    $$events_def: RuxIconCallSplitEvents;
    $$slot_def: RuxIconCallSplitSlots;
    $on<K extends keyof RuxIconCallSplitEvents>(type: K, callback: (e: RuxIconCallSplitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCallSplitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCallSplitElement | undefined;
}
export default RuxIconCallSplit;
