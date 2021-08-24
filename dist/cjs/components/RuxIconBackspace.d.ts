import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBackspaceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBackspace["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBackspace["size"];
}
interface RuxIconBackspaceEvents {
}
interface RuxIconBackspaceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBackspace extends SvelteComponent {
    $$prop_def: RuxIconBackspaceProps;
    $$events_def: RuxIconBackspaceEvents;
    $$slot_def: RuxIconBackspaceSlots;
    $on<K extends keyof RuxIconBackspaceEvents>(type: K, callback: (e: RuxIconBackspaceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBackspaceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBackspaceElement | undefined;
}
export default RuxIconBackspace;
