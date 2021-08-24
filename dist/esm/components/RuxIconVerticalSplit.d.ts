import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVerticalSplitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVerticalSplit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVerticalSplit["size"];
}
interface RuxIconVerticalSplitEvents {
}
interface RuxIconVerticalSplitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVerticalSplit extends SvelteComponent {
    $$prop_def: RuxIconVerticalSplitProps;
    $$events_def: RuxIconVerticalSplitEvents;
    $$slot_def: RuxIconVerticalSplitSlots;
    $on<K extends keyof RuxIconVerticalSplitEvents>(type: K, callback: (e: RuxIconVerticalSplitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVerticalSplitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVerticalSplitElement | undefined;
}
export default RuxIconVerticalSplit;
