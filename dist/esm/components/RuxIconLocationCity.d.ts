import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocationCityProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocationCity["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocationCity["size"];
}
interface RuxIconLocationCityEvents {
}
interface RuxIconLocationCitySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocationCity extends SvelteComponent {
    $$prop_def: RuxIconLocationCityProps;
    $$events_def: RuxIconLocationCityEvents;
    $$slot_def: RuxIconLocationCitySlots;
    $on<K extends keyof RuxIconLocationCityEvents>(type: K, callback: (e: RuxIconLocationCityEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocationCityProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocationCityElement | undefined;
}
export default RuxIconLocationCity;
