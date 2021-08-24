import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHighQualityProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHighQuality["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHighQuality["size"];
}
interface RuxIconHighQualityEvents {
}
interface RuxIconHighQualitySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHighQuality extends SvelteComponent {
    $$prop_def: RuxIconHighQualityProps;
    $$events_def: RuxIconHighQualityEvents;
    $$slot_def: RuxIconHighQualitySlots;
    $on<K extends keyof RuxIconHighQualityEvents>(type: K, callback: (e: RuxIconHighQualityEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHighQualityProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHighQualityElement | undefined;
}
export default RuxIconHighQuality;
