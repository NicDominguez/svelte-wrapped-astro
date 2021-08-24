import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPersonPinProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPersonPin["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPersonPin["size"];
}
interface RuxIconPersonPinEvents {
}
interface RuxIconPersonPinSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPersonPin extends SvelteComponent {
    $$prop_def: RuxIconPersonPinProps;
    $$events_def: RuxIconPersonPinEvents;
    $$slot_def: RuxIconPersonPinSlots;
    $on<K extends keyof RuxIconPersonPinEvents>(type: K, callback: (e: RuxIconPersonPinEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPersonPinProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPersonPinElement | undefined;
}
export default RuxIconPersonPin;
