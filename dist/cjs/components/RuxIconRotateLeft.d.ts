import { Components } from '@astrouxds/astro-web-components';
interface RuxIconRotateLeftProps {
    /** The fill color for the icon */
    color?: Components.RuxIconRotateLeft["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconRotateLeft["size"];
}
interface RuxIconRotateLeftEvents {
}
interface RuxIconRotateLeftSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconRotateLeft extends SvelteComponent {
    $$prop_def: RuxIconRotateLeftProps;
    $$events_def: RuxIconRotateLeftEvents;
    $$slot_def: RuxIconRotateLeftSlots;
    $on<K extends keyof RuxIconRotateLeftEvents>(type: K, callback: (e: RuxIconRotateLeftEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconRotateLeftProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconRotateLeftElement | undefined;
}
export default RuxIconRotateLeft;
