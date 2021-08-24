import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCallMergeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCallMerge["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCallMerge["size"];
}
interface RuxIconCallMergeEvents {
}
interface RuxIconCallMergeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCallMerge extends SvelteComponent {
    $$prop_def: RuxIconCallMergeProps;
    $$events_def: RuxIconCallMergeEvents;
    $$slot_def: RuxIconCallMergeSlots;
    $on<K extends keyof RuxIconCallMergeEvents>(type: K, callback: (e: RuxIconCallMergeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCallMergeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCallMergeElement | undefined;
}
export default RuxIconCallMerge;
