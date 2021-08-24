import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRadioButtonCheckedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRadioButtonChecked["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRadioButtonChecked["size"];
}
interface RuxIconRadioButtonCheckedEvents {
}
interface RuxIconRadioButtonCheckedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRadioButtonChecked extends SvelteComponent {
    $$prop_def: RuxIconRadioButtonCheckedProps;
    $$events_def: RuxIconRadioButtonCheckedEvents;
    $$slot_def: RuxIconRadioButtonCheckedSlots;
    $on<K extends keyof RuxIconRadioButtonCheckedEvents>(type: K, callback: (e: RuxIconRadioButtonCheckedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRadioButtonCheckedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRadioButtonCheckedElement | undefined;
}
export default RuxIconRadioButtonChecked;
