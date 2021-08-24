import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardArrowLeftProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboardArrowLeft["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboardArrowLeft["size"];
}
interface RuxIconKeyboardArrowLeftEvents {
}
interface RuxIconKeyboardArrowLeftSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboardArrowLeft extends SvelteComponent {
    $$prop_def: RuxIconKeyboardArrowLeftProps;
    $$events_def: RuxIconKeyboardArrowLeftEvents;
    $$slot_def: RuxIconKeyboardArrowLeftSlots;
    $on<K extends keyof RuxIconKeyboardArrowLeftEvents>(type: K, callback: (e: RuxIconKeyboardArrowLeftEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardArrowLeftProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardArrowLeftElement | undefined;
}
export default RuxIconKeyboardArrowLeft;
