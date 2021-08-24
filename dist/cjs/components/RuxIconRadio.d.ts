import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRadioProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRadio["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRadio["size"];
}
interface RuxIconRadioEvents {
}
interface RuxIconRadioSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRadio extends SvelteComponent {
    $$prop_def: RuxIconRadioProps;
    $$events_def: RuxIconRadioEvents;
    $$slot_def: RuxIconRadioSlots;
    $on<K extends keyof RuxIconRadioEvents>(type: K, callback: (e: RuxIconRadioEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRadioProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRadioElement | undefined;
}
export default RuxIconRadio;
