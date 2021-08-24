import { Components } from '@astrouxds/astro-web-components';
interface RuxIconArrowBackProps {
    /** The fill color for the icon */
    color?: Components.RuxIconArrowBack["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconArrowBack["size"];
}
interface RuxIconArrowBackEvents {
}
interface RuxIconArrowBackSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconArrowBack extends SvelteComponent {
    $$prop_def: RuxIconArrowBackProps;
    $$events_def: RuxIconArrowBackEvents;
    $$slot_def: RuxIconArrowBackSlots;
    $on<K extends keyof RuxIconArrowBackEvents>(type: K, callback: (e: RuxIconArrowBackEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconArrowBackProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconArrowBackElement | undefined;
}
export default RuxIconArrowBack;
