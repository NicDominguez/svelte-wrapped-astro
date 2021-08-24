import { Components } from '@astrouxds/astro-web-components';
interface RuxIconChevronLeftProps {
    /** The fill color for the icon */
    color?: Components.RuxIconChevronLeft["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconChevronLeft["size"];
}
interface RuxIconChevronLeftEvents {
}
interface RuxIconChevronLeftSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconChevronLeft extends SvelteComponent {
    $$prop_def: RuxIconChevronLeftProps;
    $$events_def: RuxIconChevronLeftEvents;
    $$slot_def: RuxIconChevronLeftSlots;
    $on<K extends keyof RuxIconChevronLeftEvents>(type: K, callback: (e: RuxIconChevronLeftEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconChevronLeftProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconChevronLeftElement | undefined;
}
export default RuxIconChevronLeft;
