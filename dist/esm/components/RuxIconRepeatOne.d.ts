import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRepeatOneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRepeatOne["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRepeatOne["size"];
}
interface RuxIconRepeatOneEvents {
}
interface RuxIconRepeatOneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRepeatOne extends SvelteComponent {
    $$prop_def: RuxIconRepeatOneProps;
    $$events_def: RuxIconRepeatOneEvents;
    $$slot_def: RuxIconRepeatOneSlots;
    $on<K extends keyof RuxIconRepeatOneEvents>(type: K, callback: (e: RuxIconRepeatOneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRepeatOneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRepeatOneElement | undefined;
}
export default RuxIconRepeatOne;
