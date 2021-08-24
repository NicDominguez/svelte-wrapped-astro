import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderLeftProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderLeft["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderLeft["size"];
}
interface RuxIconBorderLeftEvents {
}
interface RuxIconBorderLeftSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderLeft extends SvelteComponent {
    $$prop_def: RuxIconBorderLeftProps;
    $$events_def: RuxIconBorderLeftEvents;
    $$slot_def: RuxIconBorderLeftSlots;
    $on<K extends keyof RuxIconBorderLeftEvents>(type: K, callback: (e: RuxIconBorderLeftEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderLeftProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderLeftElement | undefined;
}
export default RuxIconBorderLeft;
