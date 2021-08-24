import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBlurLinearProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBlurLinear["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBlurLinear["size"];
}
interface RuxIconBlurLinearEvents {
}
interface RuxIconBlurLinearSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBlurLinear extends SvelteComponent {
    $$prop_def: RuxIconBlurLinearProps;
    $$events_def: RuxIconBlurLinearEvents;
    $$slot_def: RuxIconBlurLinearSlots;
    $on<K extends keyof RuxIconBlurLinearEvents>(type: K, callback: (e: RuxIconBlurLinearEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBlurLinearProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBlurLinearElement | undefined;
}
export default RuxIconBlurLinear;
