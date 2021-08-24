import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMergeTypeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMergeType["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMergeType["size"];
}
interface RuxIconMergeTypeEvents {
}
interface RuxIconMergeTypeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMergeType extends SvelteComponent {
    $$prop_def: RuxIconMergeTypeProps;
    $$events_def: RuxIconMergeTypeEvents;
    $$slot_def: RuxIconMergeTypeSlots;
    $on<K extends keyof RuxIconMergeTypeEvents>(type: K, callback: (e: RuxIconMergeTypeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMergeTypeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMergeTypeElement | undefined;
}
export default RuxIconMergeType;
