import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPlusOneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPlusOne["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPlusOne["size"];
}
interface RuxIconPlusOneEvents {
}
interface RuxIconPlusOneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPlusOne extends SvelteComponent {
    $$prop_def: RuxIconPlusOneProps;
    $$events_def: RuxIconPlusOneEvents;
    $$slot_def: RuxIconPlusOneSlots;
    $on<K extends keyof RuxIconPlusOneEvents>(type: K, callback: (e: RuxIconPlusOneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPlusOneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPlusOneElement | undefined;
}
export default RuxIconPlusOne;
