import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVignetteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVignette["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVignette["size"];
}
interface RuxIconVignetteEvents {
}
interface RuxIconVignetteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVignette extends SvelteComponent {
    $$prop_def: RuxIconVignetteProps;
    $$events_def: RuxIconVignetteEvents;
    $$slot_def: RuxIconVignetteSlots;
    $on<K extends keyof RuxIconVignetteEvents>(type: K, callback: (e: RuxIconVignetteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVignetteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVignetteElement | undefined;
}
export default RuxIconVignette;
