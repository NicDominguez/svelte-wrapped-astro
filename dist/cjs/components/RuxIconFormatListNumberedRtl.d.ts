import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatListNumberedRtlProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatListNumberedRtl["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatListNumberedRtl["size"];
}
interface RuxIconFormatListNumberedRtlEvents {
}
interface RuxIconFormatListNumberedRtlSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatListNumberedRtl extends SvelteComponent {
    $$prop_def: RuxIconFormatListNumberedRtlProps;
    $$events_def: RuxIconFormatListNumberedRtlEvents;
    $$slot_def: RuxIconFormatListNumberedRtlSlots;
    $on<K extends keyof RuxIconFormatListNumberedRtlEvents>(type: K, callback: (e: RuxIconFormatListNumberedRtlEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatListNumberedRtlProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatListNumberedRtlElement | undefined;
}
export default RuxIconFormatListNumberedRtl;
