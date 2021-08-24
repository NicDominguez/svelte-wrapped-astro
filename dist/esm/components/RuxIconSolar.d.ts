import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSolarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSolar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSolar["size"];
}
interface RuxIconSolarEvents {
}
interface RuxIconSolarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSolar extends SvelteComponent {
    $$prop_def: RuxIconSolarProps;
    $$events_def: RuxIconSolarEvents;
    $$slot_def: RuxIconSolarSlots;
    $on<K extends keyof RuxIconSolarEvents>(type: K, callback: (e: RuxIconSolarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSolarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSolarElement | undefined;
}
export default RuxIconSolar;
