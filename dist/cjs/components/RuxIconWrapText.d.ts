import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWrapTextProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWrapText["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWrapText["size"];
}
interface RuxIconWrapTextEvents {
}
interface RuxIconWrapTextSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWrapText extends SvelteComponent {
    $$prop_def: RuxIconWrapTextProps;
    $$events_def: RuxIconWrapTextEvents;
    $$slot_def: RuxIconWrapTextSlots;
    $on<K extends keyof RuxIconWrapTextEvents>(type: K, callback: (e: RuxIconWrapTextEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWrapTextProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWrapTextElement | undefined;
}
export default RuxIconWrapText;
