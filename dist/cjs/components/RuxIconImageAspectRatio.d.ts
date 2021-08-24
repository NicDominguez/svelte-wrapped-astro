import { Components } from '@astrouxds/astro-web-components';
interface RuxIconImageAspectRatioProps {
    /** The fill color for the icon */
    color?: Components.RuxIconImageAspectRatio["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconImageAspectRatio["size"];
}
interface RuxIconImageAspectRatioEvents {
}
interface RuxIconImageAspectRatioSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconImageAspectRatio extends SvelteComponent {
    $$prop_def: RuxIconImageAspectRatioProps;
    $$events_def: RuxIconImageAspectRatioEvents;
    $$slot_def: RuxIconImageAspectRatioSlots;
    $on<K extends keyof RuxIconImageAspectRatioEvents>(type: K, callback: (e: RuxIconImageAspectRatioEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconImageAspectRatioProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconImageAspectRatioElement | undefined;
}
export default RuxIconImageAspectRatio;
