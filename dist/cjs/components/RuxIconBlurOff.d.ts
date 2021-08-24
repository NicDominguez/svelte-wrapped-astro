import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBlurOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBlurOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBlurOff["size"];
}
interface RuxIconBlurOffEvents {
}
interface RuxIconBlurOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBlurOff extends SvelteComponent {
    $$prop_def: RuxIconBlurOffProps;
    $$events_def: RuxIconBlurOffEvents;
    $$slot_def: RuxIconBlurOffSlots;
    $on<K extends keyof RuxIconBlurOffEvents>(type: K, callback: (e: RuxIconBlurOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBlurOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBlurOffElement | undefined;
}
export default RuxIconBlurOff;
