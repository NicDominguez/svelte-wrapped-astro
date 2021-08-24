import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAccessibilityNewProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAccessibilityNew["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAccessibilityNew["size"];
}
interface RuxIconAccessibilityNewEvents {
}
interface RuxIconAccessibilityNewSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAccessibilityNew extends SvelteComponent {
    $$prop_def: RuxIconAccessibilityNewProps;
    $$events_def: RuxIconAccessibilityNewEvents;
    $$slot_def: RuxIconAccessibilityNewSlots;
    $on<K extends keyof RuxIconAccessibilityNewEvents>(type: K, callback: (e: RuxIconAccessibilityNewEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAccessibilityNewProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAccessibilityNewElement | undefined;
}
export default RuxIconAccessibilityNew;
