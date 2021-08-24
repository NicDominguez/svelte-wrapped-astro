import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBlurOnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBlurOn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBlurOn["size"];
}
interface RuxIconBlurOnEvents {
}
interface RuxIconBlurOnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBlurOn extends SvelteComponent {
    $$prop_def: RuxIconBlurOnProps;
    $$events_def: RuxIconBlurOnEvents;
    $$slot_def: RuxIconBlurOnSlots;
    $on<K extends keyof RuxIconBlurOnEvents>(type: K, callback: (e: RuxIconBlurOnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBlurOnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBlurOnElement | undefined;
}
export default RuxIconBlurOn;
