import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBlurCircularProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBlurCircular["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBlurCircular["size"];
}
interface RuxIconBlurCircularEvents {
}
interface RuxIconBlurCircularSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBlurCircular extends SvelteComponent {
    $$prop_def: RuxIconBlurCircularProps;
    $$events_def: RuxIconBlurCircularEvents;
    $$slot_def: RuxIconBlurCircularSlots;
    $on<K extends keyof RuxIconBlurCircularEvents>(type: K, callback: (e: RuxIconBlurCircularEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBlurCircularProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBlurCircularElement | undefined;
}
export default RuxIconBlurCircular;
