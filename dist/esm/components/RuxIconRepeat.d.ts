import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRepeatProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRepeat["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRepeat["size"];
}
interface RuxIconRepeatEvents {
}
interface RuxIconRepeatSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRepeat extends SvelteComponent {
    $$prop_def: RuxIconRepeatProps;
    $$events_def: RuxIconRepeatEvents;
    $$slot_def: RuxIconRepeatSlots;
    $on<K extends keyof RuxIconRepeatEvents>(type: K, callback: (e: RuxIconRepeatEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRepeatProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRepeatElement | undefined;
}
export default RuxIconRepeat;
