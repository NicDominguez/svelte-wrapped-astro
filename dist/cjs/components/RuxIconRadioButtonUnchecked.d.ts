import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRadioButtonUncheckedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRadioButtonUnchecked["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRadioButtonUnchecked["size"];
}
interface RuxIconRadioButtonUncheckedEvents {
}
interface RuxIconRadioButtonUncheckedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRadioButtonUnchecked extends SvelteComponent {
    $$prop_def: RuxIconRadioButtonUncheckedProps;
    $$events_def: RuxIconRadioButtonUncheckedEvents;
    $$slot_def: RuxIconRadioButtonUncheckedSlots;
    $on<K extends keyof RuxIconRadioButtonUncheckedEvents>(type: K, callback: (e: RuxIconRadioButtonUncheckedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRadioButtonUncheckedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRadioButtonUncheckedElement | undefined;
}
export default RuxIconRadioButtonUnchecked;
