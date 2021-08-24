import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPersonPinCircleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPersonPinCircle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPersonPinCircle["size"];
}
interface RuxIconPersonPinCircleEvents {
}
interface RuxIconPersonPinCircleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPersonPinCircle extends SvelteComponent {
    $$prop_def: RuxIconPersonPinCircleProps;
    $$events_def: RuxIconPersonPinCircleEvents;
    $$slot_def: RuxIconPersonPinCircleSlots;
    $on<K extends keyof RuxIconPersonPinCircleEvents>(type: K, callback: (e: RuxIconPersonPinCircleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPersonPinCircleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPersonPinCircleElement | undefined;
}
export default RuxIconPersonPinCircle;
