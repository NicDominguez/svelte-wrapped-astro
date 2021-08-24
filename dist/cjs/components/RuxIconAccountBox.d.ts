import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAccountBoxProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAccountBox["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAccountBox["size"];
}
interface RuxIconAccountBoxEvents {
}
interface RuxIconAccountBoxSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAccountBox extends SvelteComponent {
    $$prop_def: RuxIconAccountBoxProps;
    $$events_def: RuxIconAccountBoxEvents;
    $$slot_def: RuxIconAccountBoxSlots;
    $on<K extends keyof RuxIconAccountBoxEvents>(type: K, callback: (e: RuxIconAccountBoxEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAccountBoxProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAccountBoxElement | undefined;
}
export default RuxIconAccountBox;
