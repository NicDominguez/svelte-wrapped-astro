import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFormatLineSpacingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFormatLineSpacing["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFormatLineSpacing["size"];
}
interface RuxIconFormatLineSpacingEvents {
}
interface RuxIconFormatLineSpacingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFormatLineSpacing extends SvelteComponent {
    $$prop_def: RuxIconFormatLineSpacingProps;
    $$events_def: RuxIconFormatLineSpacingEvents;
    $$slot_def: RuxIconFormatLineSpacingSlots;
    $on<K extends keyof RuxIconFormatLineSpacingEvents>(type: K, callback: (e: RuxIconFormatLineSpacingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFormatLineSpacingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFormatLineSpacingElement | undefined;
}
export default RuxIconFormatLineSpacing;
