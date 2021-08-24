import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatStrikethroughProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatStrikethrough["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatStrikethrough["size"];
}
interface RuxIconFormatStrikethroughEvents {
}
interface RuxIconFormatStrikethroughSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatStrikethrough extends SvelteComponent {
    $$prop_def: RuxIconFormatStrikethroughProps;
    $$events_def: RuxIconFormatStrikethroughEvents;
    $$slot_def: RuxIconFormatStrikethroughSlots;
    $on<K extends keyof RuxIconFormatStrikethroughEvents>(type: K, callback: (e: RuxIconFormatStrikethroughEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatStrikethroughProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatStrikethroughElement | undefined;
}
export default RuxIconFormatStrikethrough;
