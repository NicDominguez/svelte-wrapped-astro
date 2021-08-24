import { Components } from '@astrouxds/astro-web-components';
interface RuxIconKeyboardTabProps {
    /** The fill color for the icon */
    color?: Components.RuxIconKeyboardTab["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconKeyboardTab["size"];
}
interface RuxIconKeyboardTabEvents {
}
interface RuxIconKeyboardTabSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconKeyboardTab extends SvelteComponent {
    $$prop_def: RuxIconKeyboardTabProps;
    $$events_def: RuxIconKeyboardTabEvents;
    $$slot_def: RuxIconKeyboardTabSlots;
    $on<K extends keyof RuxIconKeyboardTabEvents>(type: K, callback: (e: RuxIconKeyboardTabEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconKeyboardTabProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconKeyboardTabElement | undefined;
}
export default RuxIconKeyboardTab;
