import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVerticalAlignTopProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVerticalAlignTop["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVerticalAlignTop["size"];
}
interface RuxIconVerticalAlignTopEvents {
}
interface RuxIconVerticalAlignTopSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVerticalAlignTop extends SvelteComponent {
    $$prop_def: RuxIconVerticalAlignTopProps;
    $$events_def: RuxIconVerticalAlignTopEvents;
    $$slot_def: RuxIconVerticalAlignTopSlots;
    $on<K extends keyof RuxIconVerticalAlignTopEvents>(type: K, callback: (e: RuxIconVerticalAlignTopEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVerticalAlignTopProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVerticalAlignTopElement | undefined;
}
export default RuxIconVerticalAlignTop;
