import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAspectRatioProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAspectRatio["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAspectRatio["size"];
}
interface RuxIconAspectRatioEvents {
}
interface RuxIconAspectRatioSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAspectRatio extends SvelteComponent {
    $$prop_def: RuxIconAspectRatioProps;
    $$events_def: RuxIconAspectRatioEvents;
    $$slot_def: RuxIconAspectRatioSlots;
    $on<K extends keyof RuxIconAspectRatioEvents>(type: K, callback: (e: RuxIconAspectRatioEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAspectRatioProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAspectRatioElement | undefined;
}
export default RuxIconAspectRatio;
