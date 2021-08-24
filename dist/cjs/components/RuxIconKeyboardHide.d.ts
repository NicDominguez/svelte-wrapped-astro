import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardHideProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboardHide["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboardHide["size"];
}
interface RuxIconKeyboardHideEvents {
}
interface RuxIconKeyboardHideSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboardHide extends SvelteComponent {
    $$prop_def: RuxIconKeyboardHideProps;
    $$events_def: RuxIconKeyboardHideEvents;
    $$slot_def: RuxIconKeyboardHideSlots;
    $on<K extends keyof RuxIconKeyboardHideEvents>(type: K, callback: (e: RuxIconKeyboardHideEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardHideProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardHideElement | undefined;
}
export default RuxIconKeyboardHide;
