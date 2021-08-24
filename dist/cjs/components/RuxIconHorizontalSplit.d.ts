import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHorizontalSplitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHorizontalSplit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHorizontalSplit["size"];
}
interface RuxIconHorizontalSplitEvents {
}
interface RuxIconHorizontalSplitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHorizontalSplit extends SvelteComponent {
    $$prop_def: RuxIconHorizontalSplitProps;
    $$events_def: RuxIconHorizontalSplitEvents;
    $$slot_def: RuxIconHorizontalSplitSlots;
    $on<K extends keyof RuxIconHorizontalSplitEvents>(type: K, callback: (e: RuxIconHorizontalSplitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHorizontalSplitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHorizontalSplitElement | undefined;
}
export default RuxIconHorizontalSplit;
