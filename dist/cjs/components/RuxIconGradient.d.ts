import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGradientProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGradient["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGradient["size"];
}
interface RuxIconGradientEvents {
}
interface RuxIconGradientSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGradient extends SvelteComponent {
    $$prop_def: RuxIconGradientProps;
    $$events_def: RuxIconGradientEvents;
    $$slot_def: RuxIconGradientSlots;
    $on<K extends keyof RuxIconGradientEvents>(type: K, callback: (e: RuxIconGradientEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGradientProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGradientElement | undefined;
}
export default RuxIconGradient;
