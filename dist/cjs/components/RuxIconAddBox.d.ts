import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddBoxProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddBox["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddBox["size"];
}
interface RuxIconAddBoxEvents {
}
interface RuxIconAddBoxSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddBox extends SvelteComponent {
    $$prop_def: RuxIconAddBoxProps;
    $$events_def: RuxIconAddBoxEvents;
    $$slot_def: RuxIconAddBoxSlots;
    $on<K extends keyof RuxIconAddBoxEvents>(type: K, callback: (e: RuxIconAddBoxEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddBoxProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddBoxElement | undefined;
}
export default RuxIconAddBox;
