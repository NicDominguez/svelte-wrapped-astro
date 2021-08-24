import { Components } from '@astrouxds/astro-web-components';
interface RuxIconShortTextProps {
    /** The fill color for the icon */
    color?: Components.RuxIconShortText["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconShortText["size"];
}
interface RuxIconShortTextEvents {
}
interface RuxIconShortTextSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconShortText extends SvelteComponent {
    $$prop_def: RuxIconShortTextProps;
    $$events_def: RuxIconShortTextEvents;
    $$slot_def: RuxIconShortTextSlots;
    $on<K extends keyof RuxIconShortTextEvents>(type: K, callback: (e: RuxIconShortTextEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconShortTextProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconShortTextElement | undefined;
}
export default RuxIconShortText;
