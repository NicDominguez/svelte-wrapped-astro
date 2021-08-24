import { Components } from '@astrouxds/astro-web-components';
interface RuxIconUndoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconUndo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconUndo["size"];
}
interface RuxIconUndoEvents {
}
interface RuxIconUndoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconUndo extends SvelteComponent {
    $$prop_def: RuxIconUndoProps;
    $$events_def: RuxIconUndoEvents;
    $$slot_def: RuxIconUndoSlots;
    $on<K extends keyof RuxIconUndoEvents>(type: K, callback: (e: RuxIconUndoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconUndoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconUndoElement | undefined;
}
export default RuxIconUndo;
