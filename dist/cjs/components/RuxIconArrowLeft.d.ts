import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowLeftProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowLeft["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowLeft["size"];
}
interface RuxIconArrowLeftEvents {
}
interface RuxIconArrowLeftSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowLeft extends SvelteComponent {
    $$prop_def: RuxIconArrowLeftProps;
    $$events_def: RuxIconArrowLeftEvents;
    $$slot_def: RuxIconArrowLeftSlots;
    $on<K extends keyof RuxIconArrowLeftEvents>(type: K, callback: (e: RuxIconArrowLeftEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowLeftProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowLeftElement | undefined;
}
export default RuxIconArrowLeft;
