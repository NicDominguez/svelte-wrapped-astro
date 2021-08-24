import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCheckBoxProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCheckBox["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCheckBox["size"];
}
interface RuxIconCheckBoxEvents {
}
interface RuxIconCheckBoxSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCheckBox extends SvelteComponent {
    $$prop_def: RuxIconCheckBoxProps;
    $$events_def: RuxIconCheckBoxEvents;
    $$slot_def: RuxIconCheckBoxSlots;
    $on<K extends keyof RuxIconCheckBoxEvents>(type: K, callback: (e: RuxIconCheckBoxEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCheckBoxProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCheckBoxElement | undefined;
}
export default RuxIconCheckBox;
