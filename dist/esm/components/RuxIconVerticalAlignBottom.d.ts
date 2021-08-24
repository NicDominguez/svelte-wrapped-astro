import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVerticalAlignBottomProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVerticalAlignBottom["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVerticalAlignBottom["size"];
}
interface RuxIconVerticalAlignBottomEvents {
}
interface RuxIconVerticalAlignBottomSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVerticalAlignBottom extends SvelteComponent {
    $$prop_def: RuxIconVerticalAlignBottomProps;
    $$events_def: RuxIconVerticalAlignBottomEvents;
    $$slot_def: RuxIconVerticalAlignBottomSlots;
    $on<K extends keyof RuxIconVerticalAlignBottomEvents>(type: K, callback: (e: RuxIconVerticalAlignBottomEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVerticalAlignBottomProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVerticalAlignBottomElement | undefined;
}
export default RuxIconVerticalAlignBottom;
