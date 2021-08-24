import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRedoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRedo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRedo["size"];
}
interface RuxIconRedoEvents {
}
interface RuxIconRedoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRedo extends SvelteComponent {
    $$prop_def: RuxIconRedoProps;
    $$events_def: RuxIconRedoEvents;
    $$slot_def: RuxIconRedoSlots;
    $on<K extends keyof RuxIconRedoEvents>(type: K, callback: (e: RuxIconRedoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRedoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRedoElement | undefined;
}
export default RuxIconRedo;
