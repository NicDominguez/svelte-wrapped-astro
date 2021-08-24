import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVisibilityProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVisibility["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVisibility["size"];
}
interface RuxIconVisibilityEvents {
}
interface RuxIconVisibilitySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVisibility extends SvelteComponent {
    $$prop_def: RuxIconVisibilityProps;
    $$events_def: RuxIconVisibilityEvents;
    $$slot_def: RuxIconVisibilitySlots;
    $on<K extends keyof RuxIconVisibilityEvents>(type: K, callback: (e: RuxIconVisibilityEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVisibilityProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVisibilityElement | undefined;
}
export default RuxIconVisibility;
