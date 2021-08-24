import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAccessibilityProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAccessibility["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAccessibility["size"];
}
interface RuxIconAccessibilityEvents {
}
interface RuxIconAccessibilitySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAccessibility extends SvelteComponent {
    $$prop_def: RuxIconAccessibilityProps;
    $$events_def: RuxIconAccessibilityEvents;
    $$slot_def: RuxIconAccessibilitySlots;
    $on<K extends keyof RuxIconAccessibilityEvents>(type: K, callback: (e: RuxIconAccessibilityEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAccessibilityProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAccessibilityElement | undefined;
}
export default RuxIconAccessibility;
